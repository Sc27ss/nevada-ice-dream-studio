
import React from 'react';
import { IceCreamCone, Snowflake, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Snowflake className="h-8 w-8 text-nevada-glacier-blue" />
                <IceCreamCone className="absolute -top-1 -right-1 h-4 w-4 text-nevada-accent-pink" />
              </div>
              <span className="text-2xl font-bold text-white">NEVADA</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Heladería moderna donde cada sabor cuenta una historia de frescura, 
              calidad y momentos especiales para toda la familia.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <Heart className="h-4 w-4 mr-2 text-nevada-accent-pink" />
              Hecho con amor desde 2025
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-nevada-glacier-blue">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-nevada-glacier-blue transition-colors">Inicio</a></li>
              <li><a href="#sabores" className="text-gray-300 hover:text-nevada-glacier-blue transition-colors">Sabores</a></li>
              <li><a href="#nosotros" className="text-gray-300 hover:text-nevada-glacier-blue transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-nevada-glacier-blue transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-nevada-glacier-blue">Contacto</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>📍 Calle Principal #123</p>
              <p>📞 +57 (1) 234-5678</p>
              <p>✉️ info@nevadaheladeria.com</p>
              <p>🕒 Lun-Dom: 10AM-10PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} NEVADA Heladería. Todos los derechos reservados.
            </div>
            
            {/* Designer Credit */}
            <div className="text-gray-500 text-xs flex items-center">
              <span className="mr-2">✨</span>
              Web diseñada por 
              <span className="ml-1 text-nevada-glacier-blue font-medium">Santiago Carvajal</span>
              <span className="mx-1">–</span>
              <span className="text-nevada-pastel-blue">2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
