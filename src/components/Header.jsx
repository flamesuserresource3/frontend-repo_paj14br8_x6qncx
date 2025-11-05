import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, User } from 'lucide-react';

export default function Header({ darkMode, onToggleDark }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-neutral-900/80 shadow-sm'
          : 'bg-white/10 dark:bg-neutral-900/10'
      } backdrop-blur-md`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500" />
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              WebGIS Parallax
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {['Home', 'Data', 'Statistik', '3D View', 'API'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={onToggleDark}
              className="inline-flex items-center justify-center rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-neutral-700" />
              )}
            </button>
            <button className="hidden sm:inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition">
              <User className="h-4 w-4" /> Login
            </button>
            <button className="md:hidden inline-flex items-center justify-center rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/5 transition" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
