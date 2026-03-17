import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Programs', path: 'home', scrollTo: 'programs' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavClick = (path: string, scrollTo?: string) => {
    onNavigate(path);
    setIsMenuOpen(false);

    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-2xl">☀️</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Youth Matterz</span>
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path, item.scrollTo)}
                className={`${
                  currentPage === item.path
                    ? 'text-yellow-600 font-semibold'
                    : 'text-gray-700 hover:text-yellow-600'
                } transition-colors duration-200`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-yellow-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path, item.scrollTo)}
                className={`block w-full text-left py-2 ${
                  currentPage === item.path
                    ? 'text-yellow-600 font-semibold'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
