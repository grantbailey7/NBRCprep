import { NextAuthOptions, getServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import bcrypt from 'bcryptjs'
import { prisma } from './prisma'

export const authOptions: NextAuthOptions = {
  // @ts-ignore — PrismaAdapter type compatibility
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        deviceId: { label: 'Device ID', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const identifier = credentials.email.toLowerCase().trim()
        const isEmail = identifier.includes('@')

        const user = isEmail
          ? await prisma.user.findUnique({ where: { email: identifier } })
          : await prisma.user.findUnique({ where: { username: identifier } })

        if (!user?.passwordHash) return null

        const isValid = await bcrypt.compare(credentials.password, user.passwordHash)
        if (!isValid) return null

        if (user.planType === 'FULL_ACCESS' && credentials.deviceId) {
          if (user.registeredDeviceId && user.registeredDeviceId !== credentials.deviceId) {
            throw new Error('DEVICE_MISMATCH')
          }
          if (!user.registeredDeviceId) {
            await prisma.user.update({
              where: { id: user.id },
              data: { registeredDeviceId: credentials.deviceId },
            })
          }
        }

        return {
          id: user.id,
          email: user.email ?? user.username ?? user.id,
          name: user.name,
          planType: user.planType,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
        token.planType = (user as any).planType
      }
      if (trigger === 'update' && session?.planType) {
        token.planType = session.planType
      }
      if (token.id) {
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id as string },
          select: { planType: true, email: true },
        })
        if (dbUser) {
          token.email = dbUser.email
          if (dbUser.email === 'grantbailey2019@gmail.com' && dbUser.planType === 'FREE') {
            await prisma.user.update({
              where: { id: token.id as string },
              data: { planType: 'FULL_BUNDLE' },
            })
          }
          token.planType = dbUser.email === 'grantbailey2019@gmail.com' ? 'FULL_BUNDLE' : dbUser.planType
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.planType = token.planType as string
        if (token.email) session.user.email = token.email as string
      }
      return session
    },
  },
}

export const getAuthSession = () => getServerSession(authOptions)
