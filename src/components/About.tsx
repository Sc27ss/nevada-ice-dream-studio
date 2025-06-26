
import React, { useState, useEffect, useRef } from 'react';
import { Award, Heart, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [flavorsCount, setFlavorsCount] = useState(0);
  const [happinessCount, setHappinessCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Intersection Observer para detectar cuando la sección es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animaciones de conteo cuando la sección es visible
  useEffect(() => {
    if (!isVisible) return;

    const timer1 = setTimeout(() => {
      const interval1 = setInterval(() => {
        setYearsCount(prev => prev < 15 ? prev + 1 : 15);
      }, 80);
      setTimeout(() => clearInterval(interval1), 1200);
    }, 300);

    const timer2 = setTimeout(() => {
      const interval2 = setInterval(() => {
        setClientsCount(prev => prev < 5000 ? prev + 100 : 5000);
      }, 40);
      setTimeout(() => clearInterval(interval2), 2000);
    }, 600);

    const timer3 = setTimeout(() => {
      const interval3 = setInterval(() => {
        setFlavorsCount(prev => prev < 50 ? prev + 2 : 50);
      }, 60);
      setTimeout(() => clearInterval(interval3), 1500);
    }, 900);

    const timer4 = setTimeout(() => {
      const interval4 = setInterval(() => {
        setHappinessCount(prev => prev < 100 ? prev + 5 : 100);
      }, 50);
      setTimeout(() => clearInterval(interval4), 1000);
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [isVisible]);

  const stats = [
    { 
      icon: <Clock className="h-8 w-8 text-blue-500" />, 
      value: yearsCount, 
      suffix: "+", 
      label: "Años de experiencia",
      color: "text-blue-600"
    },
    { 
      icon: <Users className="h-8 w-8 text-green-500" />, 
      value: clientsCount, 
      suffix: "+", 
      label: "Familias satisfechas",
      color: "text-green-600"
    },
    { 
      icon: <Award className="h-8 w-8 text-purple-500" />, 
      value: flavorsCount, 
      suffix: "+", 
      label: "Sabores únicos",
      color: "text-purple-600"
    },
    { 
      icon: <Heart className="h-8 w-8 text-pink-500" />, 
      value: happinessCount, 
      suffix: "%", 
      label: "Sonrisas garantizadas",
      color: "text-pink-600"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-nevada-snow via-white to-nevada-ice-blue">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nuestra <span className="nevada-text-gradient">Historia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de una década creando momentos dulces y memorables para familias como la tuya
          </p>
        </div>

        {/* Estadísticas animadas */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6 nevada-shadow">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-nevada-ice-blue to-nevada-pastel-blue rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              Una tradición familiar que perdura
            </h3>
            <p className="text-gray-600 leading-relaxed">
              NEVADA nació del sueño de crear helados únicos que despertaran sonrisas auténticas. 
              Desde nuestros inicios, hemos mantenido el compromiso de usar solo los mejores 
              ingredientes y técnicas artesanales que nos han convertido en el lugar favorito 
              de las familias de la ciudad.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cada helado que servimos lleva consigo la pasión y dedicación de un equipo que 
              cree en la magia de los momentos compartidos. Nuestros sabores únicos y la 
              calidez de nuestro servicio han creado una comunidad de amantes del helado 
              que nos visitan una y otra vez.
            </p>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-nevada-pastel-blue to-nevada-ice-blue border-0 shadow-xl nevada-shadow p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-gray-800">
                  Nuestra Misión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 text-center leading-relaxed font-medium text-lg">
                  Crear experiencias inolvidables a través de helados artesanales excepcionales, 
                  fomentando la conexión familiar y comunitaria en un ambiente cálido y acogedor 
                  donde cada visita se convierte en un momento especial.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-nevada-glacier-blue" />,
                title: "Calidad Premium",
                description: "Ingredientes de primera calidad seleccionados cuidadosamente para cada preparación"
              },
              {
                icon: <Heart className="h-12 w-12 text-nevada-accent-pink" />,
                title: "Pasión Familiar",
                description: "Cada helado está hecho con amor y dedicación para crear momentos especiales"
              },
              {
                icon: <Users className="h-12 w-12 text-nevada-pastel-blue" />,
                title: "Comunidad",
                description: "Somos parte de tu familia, creando lazos que van más allá del helado"
              }
            ].map((value, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6 nevada-shadow hover:nevada-glow">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-nevada-ice-blue rounded-full">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
