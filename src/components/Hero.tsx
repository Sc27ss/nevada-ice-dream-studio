
import React, { useState, useEffect, useRef } from 'react';
import { IceCreamBowl, Smile, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [flavorsCount, setFlavorsCount] = useState(0);
  const [qualityCount, setQualityCount] = useState(0);
  const [starsCount, setStarsCount] = useState(0);
  const [snowflakes, setSnowflakes] = useState<{ id: number; x: number; y: number; opacity: number }[]>([]);
  const heroRef = useRef<HTMLElement>(null);

  // Animación de conteo
  useEffect(() => {
    const timer1 = setTimeout(() => {
      const interval1 = setInterval(() => {
        setFlavorsCount(prev => prev < 25 ? prev + 1 : 25);
      }, 50);
      setTimeout(() => clearInterval(interval1), 1250);
    }, 500);

    const timer2 = setTimeout(() => {
      const interval2 = setInterval(() => {
        setQualityCount(prev => prev < 100 ? prev + 2 : 100);
      }, 30);
      setTimeout(() => clearInterval(interval2), 1500);
    }, 1000);

    const timer3 = setTimeout(() => {
      const interval3 = setInterval(() => {
        setStarsCount(prev => prev < 5 ? prev + 1 : 5);
      }, 200);
      setTimeout(() => clearInterval(interval3), 1000);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Efecto rastro de nieve
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current && heroRef.current.contains(e.target as Node)) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const newSnowflake = {
          id: Date.now() + Math.random(),
          x,
          y,
          opacity: 1
        };
        
        setSnowflakes(prev => [...prev.slice(-20), newSnowflake]);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Eliminar copos de nieve después de un tiempo
  useEffect(() => {
    const timer = setInterval(() => {
      setSnowflakes(prev => 
        prev.map(flake => ({ ...flake, opacity: flake.opacity - 0.05 }))
           .filter(flake => flake.opacity > 0)
      );
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" ref={heroRef} className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-100">
      {/* Rastro de nieve del mouse */}
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute pointer-events-none z-10"
          style={{
            left: flake.x - 4,
            top: flake.y - 4,
            opacity: flake.opacity,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
        </div>
      ))}

      {/* Cristales de hielo flotantes mejorados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-200 to-white rounded-full animate-float shadow-lg"
            style={{
              left: `${15 + i * 8}%`,
              top: `${20 + (i % 4) * 15}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + i * 0.3}s`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido mejorado */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-800">Bienvenidos a</span>{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent block animate-pulse">
                  NEVADA
                </span>
              </h1>
              <p className="text-xl lg:text-2xl font-medium leading-relaxed">
                <span className="text-slate-700">Donde cada helado es una experiencia única llena de </span>
                <span className="text-blue-600 font-bold">frescura </span>
                <span className="text-slate-700">y </span>
                <span className="text-pink-500 font-bold">sabor</span>
              </p>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Descubre nuestra colección de sabores artesanales, desde clásicos irresistibles 
              hasta creaciones especiales que deleitarán a toda la familia en un ambiente 
              moderno y acogedor. <span className="text-blue-600 font-semibold">¡Una experiencia única te espera!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg group">
                Conoce Nuestros Sabores
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Menú Completo
              </Button>
            </div>

            {/* Estadísticas animadas mejoradas - Ampliadas */}
            <div className="grid grid-cols-3 gap-6 pt-12">
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 min-h-[120px] flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {flavorsCount}+
                </div>
                <div className="text-xs lg:text-sm font-semibold text-slate-700 uppercase tracking-wide leading-tight">
                  Sabores Únicos
                </div>
              </div>
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100 min-h-[120px] flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl font-bold text-pink-500 mb-2">
                  {qualityCount}%
                </div>
                <div className="text-xs lg:text-sm font-semibold text-slate-700 uppercase tracking-wide leading-tight">
                  Artesanal
                </div>
              </div>
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 min-h-[120px] flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2 flex items-center justify-center gap-1">
                  {starsCount}
                  {[...Array(Math.floor(starsCount))].map((_, i) => (
                    <span key={i} className="text-yellow-400 animate-pulse text-lg">★</span>
                  ))}
                </div>
                <div className="text-xs lg:text-sm font-semibold text-slate-700 uppercase tracking-wide leading-tight">
                  Experiencia
                </div>
              </div>
            </div>
          </div>

          {/* Visual mejorado */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Círculo principal mejorado */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white via-blue-50 to-cyan-100 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden border-4 border-white/50">
                <div className="text-center space-y-6">
                  <IceCreamBowl className="h-32 w-32 text-blue-500 mx-auto animate-float drop-shadow-lg" />
                  <div className="space-y-3">
                    <div className="text-xl font-bold text-slate-800 bg-white/80 px-4 py-2 rounded-full shadow-md">
                      ¡Helados Frescos!
                    </div>
                    <Smile className="h-10 w-10 text-pink-500 mx-auto animate-bounce" />
                  </div>
                </div>
                
                {/* Elementos decorativos mejorados */}
                <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-300 rounded-full animate-pulse shadow-lg" />
                <div className="absolute bottom-12 left-8 w-6 h-6 bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-full animate-float shadow-md" />
                <div className="absolute top-1/3 left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full animate-sparkle shadow-sm" />
              </div>

              {/* Elementos flotantes mejorados */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-pink-300 to-pink-200 rounded-full opacity-90 animate-float shadow-xl border-2 border-white/30" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-6 -left-10 w-20 h-20 bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-full opacity-80 animate-float shadow-lg border-2 border-white/30" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-200 rounded-full opacity-75 animate-float shadow-md border-2 border-white/30" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
