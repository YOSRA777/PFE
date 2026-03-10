import Link from 'next/link';
import { LayoutDashboard, Settings, Users, FolderKanban } from 'lucide-react'; // Optional: npm install lucide-react

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Projects', href: '/projects', icon: FolderKanban },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-slate-900 border-r border-slate-800">
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-6">
          <span className="text-xl font-bold text-white tracking-tight italic">PRO-SHELL</span>
        </div>
        <nav className="mt-8 flex-1 px-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center px-3 py-2 text-sm font-medium text-slate-300 rounded-md hover:text-white hover:bg-slate-800 transition-colors"
            >
              <item.icon className="mr-3 h-5 w-5 text-slate-400 group-hover:text-white" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}