
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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Snowflake className="h-8 w-8 text-nevada-glacier-blue animate-sparkle" />
              <IceCreamCone className="absolute -top-1 -right-1 h-4 w-4 text-nevada-accent-pink animate-float" />
            </div>
            <span className="text-2xl font-bold nevada-text-gradient tracking-tight">
              NEVADA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-nevada-glacier-blue transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-nevada-glacier-blue hover:bg-nevada-pastel-blue text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 nevada-glow">
              Haz tu Pedido
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-nevada-glacier-blue"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-nevada-ice-blue">
            <div className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-nevada-glacier-blue transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-nevada-glacier-blue hover:bg-nevada-pastel-blue text-white px-6 py-2 rounded-full shadow-lg w-fit">
                Haz tu Pedido
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
