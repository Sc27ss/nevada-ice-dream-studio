
import React from 'react';
import { MapPin, Clock, Phone, Mail, Car, User, Star, Store } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      details: [
        'Calle Principal #123',
        'Centro Comercial Nevada Plaza',
        'Bogotá, Colombia'
      ],
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: [
        'Lunes a Domingo',
        '10:00 AM - 10:00 PM',
        'Festivos: 11:00 AM - 9:00 PM'
      ],
      color: 'green'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: [
        '+57 (1) 234-5678',
        'WhatsApp: +57 300 123 4567',
        'Consultas y reservas'
      ],
      color: 'purple'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@nevadaheladeria.com',
        'contacto@nevadaheladeria.com',
        'Respuesta en 2 horas'
      ],
      color: 'cyan'
    }
  ];

  const whyVisitReasons = [
    { icon: '🍦', title: 'Tamaños', description: '1, 2 o 3 bolas' },
    { icon: '🥄', title: 'Presentaciones', description: 'Cono, vaso, barquillo' },
    { icon: '⭐', title: 'Calidad', description: 'Ingredientes premium' },
    { icon: '🏪', title: 'Parqueadero', description: 'Disponible gratis' }
  ];

  const accessOptions = [
    { icon: Car, title: 'En Auto', description: 'Parqueadero gratis disponible', color: 'green' },
    { icon: User, title: 'A Pie', description: 'Fácil acceso desde el centro comercial', color: 'purple' }
  ];

  return (
    <section id="contacto" className="py-16 bg-nevada-snow relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full animate-float opacity-50"
            style={{
              left: `${15 + i * 18}%`,
              top: `${10 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${4 + i * 0.4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-800">¡Visítanos en </span>
            <span className="nevada-text-gradient">NEVADA</span>
            <span className="text-slate-800">!</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-width-4xl mx-auto leading-relaxed">
            Te esperamos con los sabores más frescos y un ambiente único. 
            ¡Ven y crea momentos dulces con nosotros!
          </p>
        </div>

        {/* Información de Contacto */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
            Información de Contacto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 overflow-hidden"
                >
                  <div className={`p-4 ${
                    info.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                    info.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                    info.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                    'bg-gradient-to-r from-cyan-500 to-cyan-600'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white">{info.title}</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-slate-600 text-sm mb-2 last:mb-0">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ¿Por qué visitarnos? */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
            ¿Por qué visitarnos?
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
              <div className="bg-gradient-to-r from-nevada-ice-blue to-nevada-pastel-blue p-6 text-center">
                <h4 className="text-xl font-bold text-slate-800">
                  Lo que nos hace especiales
                </h4>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {whyVisitReasons.map((reason, index) => (
                    <div key={index} className="text-center p-4 bg-nevada-ice-blue rounded-xl">
                      <div className="text-2xl mb-2">{reason.icon}</div>
                      <h4 className="font-semibold text-blue-700 text-lg mb-1">{reason.title}</h4>
                      <p className="text-slate-600 text-sm">{reason.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="mb-12 flex justify-center">
          <div className="bg-gradient-to-r from-nevada-ice-blue to-nevada-pastel-blue rounded-2xl shadow-xl border border-blue-100 w-full max-w-md">
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Síguenos en Redes Sociales
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 bg-white rounded-full py-3 px-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📷</span>
                  </div>
                  <span className="font-medium text-slate-700">@nevadaheladeria</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white rounded-full py-3 px-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
                  <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📘</span>
                  </div>
                  <span className="font-medium text-slate-700">Nevada Heladería</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa y acceso */}
        <div className="bg-nevada-ice-blue rounded-2xl shadow-xl border border-blue-100 p-8 text-center">
          <div className="mb-6">
            <MapPin className="w-16 h-16 text-nevada-glacier-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Encuéntranos Fácilmente</h3>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              Estamos ubicados en el corazón de la ciudad, con fácil acceso 
              y parqueadero disponible para nuestros visitantes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {accessOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-2xl mb-2">
                    {option.title === 'En Auto' ? '🚗' : '🚶'}
                  </div>
                  <h4 className={`font-semibold text-lg mb-2 ${
                    option.color === 'green' ? 'text-green-600' : 'text-purple-600'
                  }`}>
                    {option.title}
                  </h4>
                  <p className="text-slate-600 text-sm">{option.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
