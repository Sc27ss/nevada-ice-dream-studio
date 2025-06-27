
import React from 'react';
import { Heart, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 nevada-text-gradient">NEVADA</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Más que una heladería, somos el lugar donde las familias crean recuerdos dulces. 
              Cada helado está hecho con amor y los mejores ingredientes para ofrecerte 
              una experiencia única e inolvidable.
            </p>
            <div className="flex gap-4">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-300">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-sm">Centro Comercial Nevada Plaza</p>
                  <p className="text-sm">Bogotá, Colombia</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-sm">+57 (1) 234-5678</p>
                  <p className="text-sm">WhatsApp: +57 300 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <p className="text-sm">info@nevadaheladeria.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-300">Horarios</h4>
            <div className="space-y-3 text-slate-300">
              <div>
                <p className="font-semibold text-white">Lunes a Domingo</p>
                <p className="text-sm">10:00 AM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white">Festivos</p>
                <p className="text-sm">11:00 AM - 9:00 PM</p>
              </div>
              <div className="mt-4 p-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg border border-blue-500/30">
                <p className="text-sm text-blue-300 font-medium">
                  ¡Abierto todos los días para endulzar tu semana!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <Heart className="h-4 w-4 text-red-400" />
              <p className="text-sm">
                © 2025 NEVADA Heladería. Todos los derechos reservados.
              </p>
            </div>
            <div className="text-slate-500 text-xs">
              Diseñada por Clicka Studio - 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
