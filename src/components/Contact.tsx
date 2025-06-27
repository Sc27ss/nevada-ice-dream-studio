
import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-nevada-glacier-blue" />,
      title: 'Ubicación',
      details: ['Calle Principal #123', 'Centro Comercial Nevada Plaza', 'Bogotá, Colombia']
    },
    {
      icon: <Clock className="h-6 w-6 text-nevada-accent-pink" />,
      title: 'Horarios',
      details: ['Lunes a Domingo', '10:00 AM - 10:00 PM', 'Festivos: 11:00 AM - 9:00 PM']
    },
    {
      icon: <Phone className="h-6 w-6 text-nevada-pastel-blue" />,
      title: 'Teléfono',
      details: ['+57 (1) 234-5678', 'WhatsApp: +57 300 123 4567', 'Consultas y reservas']
    },
    {
      icon: <Mail className="h-6 w-6 text-nevada-glacier-blue" />,
      title: 'Email',
      details: ['info@nevadaheladeria.com', 'contacto@nevadaheladeria.com', 'Respuesta en 2 horas']
    }
  ];

  const socialMedia = [
    { icon: <Instagram className="h-6 w-6" />, name: '@nevadaheladeria', color: 'text-pink-500' },
    { icon: <Facebook className="h-6 w-6" />, name: 'Nevada Heladería', color: 'text-blue-600' }
  ];

  return (
    <section id="contacto" className="py-12 md:py-20 bg-nevada-snow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            ¡Visítanos en <span className="nevada-text-gradient">NEVADA</span>!
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Te esperamos con los sabores más frescos y un ambiente único. 
            ¡Ven y crea momentos dulces con nosotros!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center lg:text-left">
              Información de Contacto
            </h3>
            <div className="grid gap-4 md:gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 nevada-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-base md:text-lg">
                      <div className="p-2 bg-nevada-ice-blue rounded-lg flex-shrink-0">
                        {info.icon}
                      </div>
                      <span className="text-sm md:text-base">{info.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-xs md:text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Store Information */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center lg:text-left">
              ¿Por qué visitarnos?
            </h3>
            
            <Card className="bg-white border-0 shadow-lg nevada-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-lg md:text-xl text-gray-800">
                  Experiencia Completa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="font-semibold text-blue-800">🍦 Tamaños:</p>
                    <p className="text-gray-600">1, 2 o 3 bolas</p>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-3">
                    <p className="font-semibold text-cyan-800">🥄 Presentaciones:</p>
                    <p className="text-gray-600">Cono, vaso, barquillo</p>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-3">
                    <p className="font-semibold text-pink-800">⭐ Calidad:</p>
                    <p className="text-gray-600">Ingredientes premium</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="font-semibold text-green-800">🏪 Parqueadero:</p>
                    <p className="text-gray-600">Disponible gratis</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-nevada-accent-pink to-nevada-soft-pink border-0 shadow-lg nevada-shadow">
              <CardContent className="p-4 md:p-6 text-center text-white">
                <h4 className="text-lg md:text-xl font-bold mb-3">Ambiente Acogedor</h4>
                <p className="mb-4 text-sm md:text-base">Disfruta en un espacio diseñado para tu disfrute</p>
                <div className="text-xs md:text-sm opacity-90 space-y-1">
                  <p>🪑 Mesas cómodas</p>
                  <p>🎵 Ambiente musical agradable</p>
                  <p>❄️ Aire acondicionado</p>
                  <p>🍽️ Área de degustación</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media - Centrado y optimizado para móviles */}
        <div className="flex justify-center mb-12">
          <Card className="bg-gradient-to-r from-nevada-ice-blue to-nevada-pastel-blue border-0 shadow-lg nevada-shadow w-full max-w-lg">
            <CardHeader>
              <CardTitle className="text-center text-gray-800 text-lg md:text-xl">
                Síguenos en Redes Sociales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                {socialMedia.map((social, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group w-full sm:w-auto justify-center">
                    <span className={`${social.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
                      {social.icon}
                    </span>
                    <span className="text-gray-700 font-medium text-sm md:text-base">{social.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map placeholder - Optimizado para móviles */}
        <Card className="bg-nevada-ice-blue border-0 shadow-lg nevada-shadow">
          <CardContent className="p-6 md:p-8 text-center">
            <MapPin className="h-12 w-12 md:h-16 md:w-16 text-nevada-glacier-blue mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Encuéntranos Fácilmente
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm md:text-base px-4">
              Estamos ubicados en el corazón de la ciudad, con fácil acceso 
              y parqueadero disponible para nuestros visitantes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-3 md:p-4">
                <p className="font-semibold text-green-800">🚗 En Auto</p>
                <p className="text-gray-600">Parqueadero gratis disponible</p>
              </div>
              <div className="bg-white rounded-lg p-3 md:p-4">
                <p className="font-semibold text-purple-800">🚶 A Pie</p>
                <p className="text-gray-600">Fácil acceso desde el centro comercial</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
