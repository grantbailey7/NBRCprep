import { PrismaClient } from '@prisma/client'
const p = new PrismaClient()
async function main() {
  const divs = await p.division.findMany({ select: { id: true, slug: true } })
  console.log(JSON.stringify(divs, null, 2))
}
main().finally(() => p.$disconnect())
