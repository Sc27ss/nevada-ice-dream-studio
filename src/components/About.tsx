
import React from 'react';
import { Heart, Users, Award, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-nevada-accent-pink" />,
      title: 'Hecho con Amor',
      description: 'Cada helado es preparado artesanalmente con ingredientes seleccionados y mucho cariño.'
    },
    {
      icon: <Users className="h-8 w-8 text-nevada-glacier-blue" />,
      title: 'Ambiente Familiar',
      description: 'Un espacio diseñado para que toda la familia disfrute momentos especiales juntos.'
    },
    {
      icon: <Award className="h-8 w-8 text-nevada-pastel-blue" />,
      title: 'Calidad Premium',
      description: 'Utilizamos solo los mejores ingredientes para garantizar sabores únicos y memorables.'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-nevada-accent-pink" />,
      title: 'Experiencia Única',
      description: 'Creamos momentos mágicos que perduran en la memoria de nuestros clientes.'
    }
  ];

  const stats = [
    { number: '2025', label: 'Año de Fundación' },
    { number: '25+', label: 'Sabores Únicos' },
    { number: '100%', label: 'Artesanal' },
    { number: '1000+', label: 'Familias Felices' }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-nevada-snow to-nevada-ice-blue">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Conoce <span className="nevada-text-gradient">NEVADA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos una heladería moderna comprometida con ofrecer los sabores más frescos 
            y deliciosos en un ambiente acogedor donde las familias crean recuerdos inolvidables.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              Nuestra Historia
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                NEVADA nació de la pasión por crear momentos dulces y especiales para las familias. 
                Nos inspiramos en la pureza y frescura de la nieve para desarrollar helados 
                artesanales que despiertan sonrisas en cada cucharada.
              </p>
              <p>
                Nuestro equipo de heladeros expertos trabaja día a día para perfeccionar 
                recetas únicas, combinando técnicas tradicionales con innovación moderna 
                para crear sabores que sorprenden y deleitan.
              </p>
              <p>
                En NEVADA, cada visita es una experiencia memorable donde la calidad, 
                el sabor y la calidez humana se unen para crear momentos perfectos.
              </p>
            </div>
          </div>

          {/* Visual representation */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl nevada-shadow">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-2xl bg-nevada-ice-blue">
                    <div className="text-3xl font-bold text-nevada-glacier-blue mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-nevada-accent-pink rounded-full animate-sparkle" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-nevada-vanilla rounded-full animate-float opacity-80" />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 nevada-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-nevada-ice-blue rounded-full">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-nevada-glacier-blue to-nevada-pastel-blue rounded-3xl p-12 text-center nevada-shadow">
          <h3 className="text-3xl font-bold text-white mb-6">
            Nuestra Misión
          </h3>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            "Crear momentos de felicidad a través de helados artesanales excepcionales, 
            ofreciendo una experiencia familiar única donde cada visita se convierte en 
            un recuerdo especial lleno de sabor, frescura y alegría."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
