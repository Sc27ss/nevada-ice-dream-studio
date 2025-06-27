
import React, { useState } from 'react';
import { IceCreamBowl, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('clasicos');

  const menuData = {
    clasicos: {
      title: 'Sabores Clásicos',
      description: 'Nuestros sabores tradicionales preparados con la receta perfecta',
      items: [
        { 
          name: 'Vainilla Premium', 
          description: 'Cremosa vainilla con esencia natural de Madagascar', 
          price: '$ 4.000', 
          popular: true,
          rating: 4.9
        },
        { 
          name: 'Fresa Natural', 
          description: 'Con trozos de fresa fresca colombiana', 
          price: '$ 4.200', 
          popular: false,
          rating: 4.7
        },
        { 
          name: 'Chocolate Belga', 
          description: 'Intenso chocolate importado de Bélgica', 
          price: '$ 4.500', 
          popular: true,
          rating: 4.8
        },
        { 
          name: 'Arequipe Artesanal', 
          description: 'Dulce de leche casero tradicional', 
          price: '$ 4.800', 
          popular: false,
          rating: 4.6
        },
        { 
          name: 'Limón Refrescante', 
          description: 'Cítrico natural y revitalizante', 
          price: '$ 4.000', 
          popular: false,
          rating: 4.5
        }
      ]
    },
    especiales: {
      title: 'Sabores Especiales',
      description: 'Creaciones únicas que conquistarán tu paladar',
      items: [
        { 
          name: 'Cheesecake con Fresa', 
          description: 'Cremoso queso Philadelphia con salsa de fresa', 
          price: '$ 6.000', 
          popular: true,
          rating: 4.9
        },
        { 
          name: 'Brownie con Nuez', 
          description: 'Chocolate intenso con nueces pecanas crujientes', 
          price: '$ 5.800', 
          popular: true,
          rating: 4.8
        },
        { 
          name: 'Mango Biche', 
          description: 'Tropical y refrescante con toque picante', 
          price: '$ 5.000', 
          popular: false,
          rating: 4.7
        },
        { 
          name: 'Café con Leche', 
          description: 'Aromático café colombiano premium', 
          price: '$ 5.200', 
          popular: false,
          rating: 4.6
        }
      ]
    },
    adicionales: {
      title: 'Adicionales y Postres',
      description: 'Complementos perfectos para tu experiencia NEVADA',
      items: [
        { 
          name: 'Malteadas Especiales', 
          description: 'Cremosas y espesas, preparadas al momento', 
          price: '$ 12.000', 
          popular: true,
          rating: 4.8
        },
        { 
          name: 'Conos Premium', 
          description: 'Crujientes y dorados, horneados diariamente', 
          price: '$ 2.000', 
          popular: false,
          rating: 4.5
        },
        { 
          name: 'Barquillos Artesanales', 
          description: 'Hechos en casa con receta familiar', 
          price: '$ 3.000', 
          popular: false,
          rating: 4.6
        },
        { 
          name: 'Banana Split Familiar', 
          description: 'Experiencia completa para compartir (3 bolas)', 
          price: '$ 18.000', 
          popular: true,
          rating: 4.9
        }
      ]
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <section id="sabores" className="py-20 bg-gradient-to-br from-gray-50 via-nevada-ice-blue to-nevada-pastel-blue relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-200 to-white rounded-full animate-float opacity-60"
            style={{
              left: `${20 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-slate-800">Nuestros </span>
            <span className="nevada-text-gradient">Sabores</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-width-4xl mx-auto leading-relaxed">
            Descubre nuestra selección de sabores únicos, preparados artesanalmente 
            con los mejores ingredientes premium para toda la familia.
            <span className="text-blue-600 font-semibold"> ¡Cada sabor cuenta una historia!</span>
          </p>
        </div>

        {/* Tabs de categorías */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {Object.entries(menuData).map(([key, category]) => (
                <Button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`relative px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 min-h-[80px] ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg transform scale-105'
                      : 'bg-transparent text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                  variant="ghost"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <IceCreamBowl className="w-6 h-6" />
                    <span className="text-sm font-bold">{category.title}</span>
                    <span className="text-xs opacity-80">
                      {key === 'clasicos' && 'Tradicionales'}
                      {key === 'especiales' && 'Únicos'}
                      {key === 'adicionales' && 'Complementos'}
                    </span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {menuData[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100"
            >
              {/* Imagen del producto */}
              <div className="relative h-48 bg-gradient-to-br from-nevada-ice-blue to-nevada-pastel-blue flex items-center justify-center overflow-hidden">
                <IceCreamBowl className="w-16 h-16 text-blue-500 animate-float group-hover:scale-110 transition-transform duration-300" />
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    ¡Popular!
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
                  {item.name}
                </h4>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(item.rating)}
                  <span className="text-sm text-slate-600 ml-2 font-medium">{item.rating}</span>
                </div>

                {/* Precio */}
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600">{item.price}</div>
                  <div className="text-sm text-slate-500 font-medium">por bola</div>
                </div>

                {/* Descripción */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="bg-nevada-ice-blue rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-600 font-medium flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Disponible en nuestro local
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de combos especiales */}
        <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-white/20">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            ✨ Combos Especiales ✨
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-32 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <IceCreamBowl className="w-12 h-12 text-pink-500" />
              </div>
              <div className="p-6 text-center">
                <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
                  Ahorra $ 10.000
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Combo Familiar Nevada</h4>
                <p className="text-slate-600 text-sm mb-4">4 helados de 2 bolas + 2 conos premium + toppings especiales</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">$ 35.000</div>
                <div className="bg-green-50 rounded-lg p-2">
                  <p className="text-green-700 text-xs font-semibold">¡Perfecto para compartir en familia!</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-32 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <IceCreamBowl className="w-12 h-12 text-yellow-500" />
              </div>
              <div className="p-6 text-center">
                <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
                  Incluye Decoración
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Combo Niños Felices</h4>
                <p className="text-slate-600 text-sm mb-4">1 helado de 1 bola + cono + decoración especial</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">$ 8.000</div>
                <div className="bg-blue-50 rounded-lg p-2">
                  <p className="text-blue-700 text-xs font-semibold">¡Ideal para los más pequeños!</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-32 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <IceCreamBowl className="w-12 h-12 text-green-500" />
              </div>
              <div className="p-6 text-center">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
                  Sin Azúcar Añadida
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Línea Saludable</h4>
                <p className="text-slate-600 text-sm mb-4">Opciones endulzadas con stevia natural</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">$ 4.500</div>
                <div className="bg-purple-50 rounded-lg p-2">
                  <p className="text-purple-700 text-xs font-semibold">¡Cuida tu salud sin renunciar al sabor!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
