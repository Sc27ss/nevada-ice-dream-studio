
import React from 'react';
import { Clock, Users, Award, Heart, Trophy, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, number: '15+', label: 'Años de experiencia', color: 'blue' },
    { icon: Users, number: '5000+', label: 'Familias satisfechas', color: 'green' },
    { icon: Trophy, number: '50+', label: 'Sabores únicos', color: 'yellow' },
    { icon: Heart, number: '100%', label: 'Sonrisas garantizadas', color: 'pink' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Ingredientes de primera calidad seleccionados cuidadosamente para cada preparación'
    },
    {
      icon: Heart,
      title: 'Pasión Familiar',
      description: 'Cada helado está hecho con amor y dedicación para crear momentos especiales'
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Somos parte de tu familia, creando lazos que van más allá del helado'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-nevada-snow via-white to-nevada-ice-blue relative overflow-hidden">
      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-300 to-cyan-200 rounded-full animate-float opacity-40"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-slate-800">Nuestra </span>
            <span className="nevada-text-gradient">Historia</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-width-4xl mx-auto leading-relaxed">
            Más de una década creando momentos dulces y memorables para familias como la tuya
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              >
                <div className={`inline-flex p-4 rounded-full mb-4 ${
                  stat.color === 'blue' ? 'bg-blue-100' :
                  stat.color === 'green' ? 'bg-green-100' :
                  stat.color === 'yellow' ? 'bg-yellow-100' :
                  'bg-pink-100'
                }`}>
                  <IconComponent className={`w-8 h-8 ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'yellow' ? 'text-yellow-600' :
                    'text-pink-600'
                  }`} />
                </div>
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                  stat.color === 'blue' ? 'text-blue-600' :
                  stat.color === 'green' ? 'text-green-600' :
                  stat.color === 'yellow' ? 'text-yellow-600' :
                  'text-pink-600'
                }`}>
                  {stat.number}
                </div>
                <p className="text-slate-600 font-medium text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Historia y misión */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Una tradición familiar que perdura</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              NEVADA nació del sueño de crear helados únicos que despertaran sonrisas auténticas. 
              Desde nuestros inicios, hemos mantenido el compromiso de usar solo los mejores 
              ingredientes y técnicas artesanales que nos han convertido en el lugar favorito 
              de las familias de la ciudad.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Cada helado que servimos lleva consigo la pasión y dedicación de un equipo que 
              cree en la magia de los momentos compartidos. Nuestros sabores únicos y la 
              calidez de nuestro servicio han creado una comunidad de amantes del helado 
              que nos visitan una y otra vez.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-nevada-pastel-blue to-nevada-ice-blue rounded-3xl p-8 shadow-2xl border border-blue-200">
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-pulse" />
              <h4 className="text-2xl font-bold text-slate-800 mb-4">Nuestra Misión</h4>
              <p className="text-slate-800 leading-relaxed font-medium text-lg">
                Crear experiencias inolvidables a través de helados artesanales excepcionales, 
                fomentando la conexión familiar y comunitaria en un ambiente cálido y acogedor 
                donde cada visita se convierte en un momento especial.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-800 mb-8">Nuestros Valores</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 hover:nevada-glow"
              >
                <div className="inline-flex p-4 bg-nevada-ice-blue rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-12 h-12 text-nevada-glacier-blue" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors">
                  {value.title}
                </h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
