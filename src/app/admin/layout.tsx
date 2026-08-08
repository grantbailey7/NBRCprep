import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const ADMIN_EMAIL = 'grantbailey2019@gmail.com';

const navLinks = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/flashcards', label: 'Flashcards' },
  { href: '/admin/exams', label: 'Mini Exams' },
  { href: '/admin/full-exams', label: 'Full Exams' },
  { href: '/admin/users', label: 'Users' },
  { href: '/admin/accounts', label: 'Accounts' },
  { href: '/admin/blog', label: 'Blog' },
  { href: '/admin/console', label: 'Control Console' },
  { href: '/admin/seed', label: 'Seed DB' },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  if (!session?.user?.email || session.user.email !== ADMIN_EMAIL) {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <aside className="w-64 bg-gray-950 border-r border-gray-800 flex flex-col shrink-0">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-xl font-bold text-teal-400">NBRCprep Admin</h1>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
