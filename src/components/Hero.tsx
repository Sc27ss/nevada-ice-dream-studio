
import React from 'react';
import { IceCreamBowl, Smile, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen pt-20 nevada-gradient relative overflow-hidden">
      {/* Floating ice crystals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 ice-crystal rounded-full animate-float opacity-60`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
                Bienvenidos a{' '}
                <span className="nevada-text-gradient block">NEVADA</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Donde cada helado es una experiencia única llena de{' '}
                <span className="text-nevada-glacier-blue font-semibold">frescura</span>{' '}
                y{' '}
                <span className="text-nevada-accent-pink font-semibold">sabor</span>
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Descubre nuestra colección de sabores artesanales, desde clásicos irresistibles 
              hasta creaciones especiales que deleitarán a toda la familia en un ambiente 
              moderno y acogedor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-nevada-glacier-blue hover:bg-nevada-pastel-blue text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 nevada-glow text-lg group">
                Conoce Nuestros Sabores
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-nevada-glacier-blue text-nevada-glacier-blue hover:bg-nevada-ice-blue px-8 py-4 rounded-full text-lg">
                Ver Menú Completo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-nevada-glacier-blue">25+</div>
                <div className="text-sm text-gray-600">Sabores Únicos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-nevada-accent-pink">100%</div>
                <div className="text-sm text-gray-600">Artesanal</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-nevada-glacier-blue">5★</div>
                <div className="text-sm text-gray-600">Experiencia</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main ice cream illustration */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white rounded-full shadow-2xl nevada-shadow flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-4">
                  <IceCreamBowl className="h-32 w-32 text-nevada-glacier-blue mx-auto animate-float" />
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-gray-700">¡Helados Frescos!</div>
                    <Smile className="h-8 w-8 text-nevada-accent-pink mx-auto animate-sparkle" />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-nevada-soft-pink rounded-full animate-sparkle" />
                <div className="absolute bottom-8 left-6 w-4 h-4 bg-nevada-vanilla rounded-full animate-float" />
                <div className="absolute top-1/3 left-4 w-3 h-3 bg-nevada-pastel-blue rounded-full animate-sparkle" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-nevada-soft-pink rounded-full opacity-80 animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-4 -left-8 w-16 h-16 bg-nevada-vanilla rounded-full opacity-70 animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
