
import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      details: ['+57 (1) 234-5678', 'WhatsApp: +57 300 123 4567', 'Pedidos y reservas']
    },
    {
      icon: <Mail className="h-6 w-6 text-nevada-glacier-blue" />,
      title: 'Email',
      details: ['info@nevadaheladeria.com', 'pedidos@nevadaheladeria.com', 'Respuesta en 2 horas']
    }
  ];

  const socialMedia = [
    { icon: <Instagram className="h-6 w-6" />, name: '@nevadaheladeria', color: 'text-pink-500' },
    { icon: <Facebook className="h-6 w-6" />, name: 'Nevada Heladería', color: 'text-blue-600' }
  ];

  return (
    <section id="contacto" className="py-20 bg-nevada-snow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            ¡Visitanos en <span className="nevada-text-gradient">NEVADA</span>!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Te esperamos con los sabores más frescos y un ambiente familiar único. 
            ¡Ven y crea momentos dulces con nosotros!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 nevada-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 bg-nevada-ice-blue rounded-lg">
                        {info.icon}
                      </div>
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="bg-gradient-to-r from-nevada-ice-blue to-nevada-pastel-blue border-0 shadow-lg nevada-shadow">
              <CardHeader>
                <CardTitle className="text-center text-gray-800">
                  Síguenos en Redes Sociales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center gap-6">
                  {socialMedia.map((social, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group">
                      <span className={`${social.color} group-hover:scale-110 transition-transform`}>
                        {social.icon}
                      </span>
                      <span className="text-gray-700 font-medium">{social.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <Card className="bg-white border-0 shadow-lg nevada-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-800">
                  ¿Listo para tu Helado?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center">
                  Haz tu pedido ahora y disfruta de nuestros sabores únicos
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-nevada-glacier-blue hover:bg-nevada-pastel-blue text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 nevada-glow">
                    Haz tu Pedido
                  </Button>
                  <Button variant="outline" className="w-full border-nevada-glacier-blue text-nevada-glacier-blue hover:bg-nevada-ice-blue py-3 rounded-full">
                    Ver Menú Completo
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="bg-gradient-to-br from-nevada-accent-pink to-nevada-soft-pink border-0 shadow-lg nevada-shadow">
              <CardContent className="p-6 text-center text-white">
                <h3 className="text-xl font-bold mb-3">Delivery Gratis</h3>
                <p className="mb-4">En pedidos superiores a $25.000</p>
                <div className="text-sm opacity-90">
                  <p>⏰ Tiempo promedio: 30 min</p>
                  <p>📍 Radio de cobertura: 5 km</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map placeholder */}
        <Card className="bg-nevada-ice-blue border-0 shadow-lg nevada-shadow">
          <CardContent className="p-8 text-center">
            <MapPin className="h-16 w-16 text-nevada-glacier-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Encuéntranos Fácilmente
            </h3>
            <p className="text-gray-600 mb-4">
              Estamos ubicados en el corazón de la ciudad, con fácil acceso y parqueadero disponible
            </p>
            <Button className="bg-nevada-glacier-blue hover:bg-nevada-pastel-blue text-white px-8 py-3 rounded-full shadow-lg">
              Ver en Google Maps
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
