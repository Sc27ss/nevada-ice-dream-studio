
import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 nevada-text-gradient">NEVADA</h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Más que una heladería, somos el lugar donde las familias crean recuerdos dulces. 
              Cada helado está hecho con amor y los mejores ingredientes para ofrecerte 
              una experiencia única e inolvidable.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <span className="text-white">📷</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <span className="text-white">📘</span>
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-300">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-sm">Centro Comercial Nevada Plaza</p>
                  <p className="text-sm">Bogotá, Colombia</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-sm">+57 (1) 234-5678</p>
                  <p className="text-sm">WhatsApp: +57 300 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <p className="text-sm">info@nevadaheladeria.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-300">Horarios</h4>
            <div className="space-y-3">
              <div className="text-gray-300">
                <p className="font-semibold text-white">Lunes a Domingo</p>
                <p className="text-sm">10:00 AM - 10:00 PM</p>
              </div>
              <div className="text-gray-300">
                <p className="font-semibold text-white">Festivos</p>
                <p className="text-sm">11:00 AM - 9:00 PM</p>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-3 border border-blue-500/30 mt-4">
                <p className="text-blue-300 text-sm font-medium">
                  ¡Abierto todos los días para endulzar tu semana!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Heart className="w-4 h-4 text-red-500" />
              <p className="text-sm">© 2025 NEVADA Heladería. Todos los derechos reservados.</p>
            </div>
            <div className="text-gray-500">
              <p className="text-xs">Diseñada por Clicka Studio - 2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
