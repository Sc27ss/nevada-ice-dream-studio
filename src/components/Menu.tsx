
import React, { useState } from 'react';
import { IceCreamCone, IceCreamBowl, Smile, Star, Award, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('clasicos');

  const menuData = {
    clasicos: {
      title: 'Sabores Clásicos',
      icon: <IceCreamCone className="h-6 w-6" />,
      description: 'Nuestros sabores tradicionales preparados con la receta perfecta',
      items: [
        { 
          name: 'Vainilla Premium', 
          description: 'Cremosa vainilla con esencia natural de Madagascar', 
          price: '$ 8.000', 
          popular: true,
          rating: 4.9
        },
        { 
          name: 'Fresa Natural', 
          description: 'Con trozos de fresa fresca colombiana', 
          price: '$ 8.500', 
          popular: false,
          rating: 4.7
        },
        { 
          name: 'Chocolate Belga', 
          description: 'Intenso chocolate importado de Bélgica', 
          price: '$ 9.000', 
          popular: true,
          rating: 4.8
        },
        { 
          name: 'Arequipe Artesanal', 
          description: 'Dulce de leche casero tradicional', 
          price: '$ 9.500', 
          popular: false,
          rating: 4.6
        },
        { 
          name: 'Limón Refrescante', 
          description: 'Cítrico natural y revitalizante', 
          price: '$ 8.000', 
          popular: false,
          rating: 4.5
        }
      ]
    },
    especiales: {
      title: 'Sabores Especiales',
      icon: <Smile className="h-6 w-6" />,
      description: 'Creaciones únicas que conquistarán tu paladar',
      items: [
        { 
          name: 'Cheesecake con Fresa', 
          description: 'Cremoso queso Philadelphia con salsa de fresa', 
          price: '$ 12.000', 
          popular: true,
          rating: 4.9
        },
        { 
          name: 'Brownie con Nuez', 
          description: 'Chocolate intenso con nueces pecanas crujientes', 
          price: '$ 11.500', 
          popular: true,
          rating: 4.8
        },
        { 
          name: 'Mango Biche', 
          description: 'Tropical y refrescante con toque picante', 
          price: '$ 10.000', 
          popular: false,
          rating: 4.7
        },
        { 
          name: 'Café con Leche', 
          description: 'Aromático café colombiano premium', 
          price: '$ 10.500', 
          popular: false,
          rating: 4.6
        }
      ]
    },
    adicionales: {
      title: 'Adicionales y Postres',
      icon: <IceCreamBowl className="h-6 w-6" />,
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
          description: 'Experiencia completa para compartir', 
          price: '$ 18.000', 
          popular: true,
          rating: 4.9
        },
        { 
          name: 'Paletas de Fruta', 
          description: 'Naturales sin conservantes artificiales', 
          price: '$ 6.000', 
          popular: false,
          rating: 4.4
        }
      ]
    }
  };

  const promos = [
    {
      title: 'Combo Familiar Nevada',
      description: '4 helados premium + 2 malteadas + toppings especiales',
      price: '$ 35.000',
      badge: 'Ahorra $ 10.000',
      icon: <Heart className="h-5 w-5" />
    },
    {
      title: 'Combo Niños Felices',
      description: '1 helado + juguete sorpresa + stickers Nevada',
      price: '$ 12.000',
      badge: 'Incluye Sorpresa',
      icon: <Smile className="h-5 w-5" />
    },
    {
      title: 'Línea Saludable',
      description: 'Opciones endulzadas con stevia natural',
      price: '$ 9.500',
      badge: 'Sin Azúcar',
      icon: <Award className="h-5 w-5" />
    }
  ];

  return (
    <section id="sabores" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Header mejorado */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-800">Nuestro </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">Menú</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Descubre nuestra selección de sabores únicos, preparados artesanalmente 
            con los mejores ingredientes premium para toda la familia. 
            <span className="text-blue-600 font-semibold block mt-2">¡Cada sabor cuenta una historia!</span>
          </p>
        </div>

        {/* Category Tabs mejorados */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-blue-100">
            {Object.entries(menuData).map(([key, category]) => (
              <Button
                key={key}
                variant={activeCategory === key ? "default" : "ghost"}
                className={`rounded-xl px-8 py-4 mx-2 transition-all duration-300 font-semibold ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg transform scale-105'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setActiveCategory(key)}
              >
                <span className="flex items-center gap-3">
                  {category.icon}
                  <div className="text-left">
                    <div className="text-sm font-bold">{category.title}</div>
                    <div className="text-xs opacity-80">{category.description}</div>
                  </div>
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items mejorados */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {menuData[activeCategory as keyof typeof menuData].items.map((item, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden group hover:-translate-y-2">
              <CardHeader className="pb-4 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
                    {item.name}
                    {item.popular && (
                      <Badge className="bg-gradient-to-r from-pink-500 to-rose-400 text-white text-xs font-semibold">
                        ¡Popular!
                      </Badge>
                    )}
                  </CardTitle>
                  <span className="text-2xl font-bold text-blue-600">
                    {item.price}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-sm text-slate-600 ml-2 font-medium">{item.rating}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  {item.description}
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Agregar al Pedido
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Promociones mejoradas */}
        <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-3xl p-10 shadow-2xl border-4 border-white/20">
          <h3 className="text-4xl font-bold text-center text-white mb-10">
            ✨ Promociones Especiales ✨
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {promos.map((promo, index) => (
              <Card key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <CardHeader className="text-center bg-gradient-to-br from-slate-50 to-blue-50">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white">
                      {promo.icon}
                    </div>
                  </div>
                  <Badge className="w-fit mx-auto mb-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold px-4 py-1">
                    {promo.badge}
                  </Badge>
                  <CardTitle className="text-2xl text-slate-800 font-bold">
                    {promo.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-6">
                  <p className="text-slate-600 mb-6 font-medium leading-relaxed">{promo.description}</p>
                  <div className="text-3xl font-bold text-blue-600 mb-6">
                    {promo.price}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    ¡Ordenar Ahora!
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
