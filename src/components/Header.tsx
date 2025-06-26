
import React, { useState } from 'react';
import { Menu, X, IceCreamCone, Snowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sabores', href: '#sabores' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-xl border-b border-blue-100/50 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo mejorado */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative p-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full">
              <Snowflake className="h-8 w-8 text-blue-600 animate-spin" style={{ animationDuration: '8s' }} />
              <IceCreamCone className="absolute -top-1 -right-1 h-5 w-5 text-pink-500 animate-bounce" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-800 bg-clip-text text-transparent tracking-tight">
              NEVADA
            </span>
          </div>

          {/* Desktop Menu mejorado */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold text-lg relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button mejorado */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu mejorado */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-100 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mx-4">
            <div className="flex flex-col space-y-4 pt-6 px-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-semibold text-lg py-2 border-b border-blue-50 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
