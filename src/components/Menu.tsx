
import React, { useState } from 'react';
import { IceCreamCone, IceCreamBowl, Smile, Star, Award, Heart, MapPin, ImageIcon } from 'lucide-react';
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
          pricePerScoop: '$ 4.000', 
          popular: true,
          rating: 4.9
        },
        { 
          name: 'Fresa Natural', 
          description: 'Con trozos de fresa fresca colombiana', 
          pricePerScoop: '$ 4.200', 
          popular: false,
          rating: 4.7
        },
        { 
          name: 'Chocolate Belga', 
          description: 'Intenso chocolate importado de Bélgica', 
          pricePerScoop: '$ 4.500', 
          popular: true,
          rating: 4.8
        },
        { 
          name: 'Arequipe Artesanal', 
          description: 'Dulce de leche casero tradicional', 
          pricePerScoop: '$ 4.800', 
          popular: false,
          rating: 4.6
        },
        { 
          name: 'Limón Refrescante', 
          description: 'Cítrico natural y revitalizante', 
          pricePerScoop: '$ 4.000', 
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
          pricePerScoop: '$ 6.000', 
          popular: true,
          rating: 4.9
        },
        { 
          name: 'Brownie con Nuez', 
          description: 'Chocolate intenso con nueces pecanas crujientes', 
          pricePerScoop: '$ 5.800', 
          popular: true,
          rating: 4.8
        },
        { 
          name: 'Mango Biche', 
          description: 'Tropical y refrescante con toque picante', 
          pricePerScoop: '$ 5.000', 
          popular: false,
          rating: 4.7
        },
        { 
          name: 'Café con Leche', 
          description: 'Aromático café colombiano premium', 
          pricePerScoop: '$ 5.200', 
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
          pricePerScoop: '$ 12.000', 
          popular: true,
          rating: 4.8
        },
        { 
          name: 'Conos Premium', 
          description: 'Crujientes y dorados, horneados diariamente', 
          pricePerScoop: '$ 2.000', 
          popular: false,
          rating: 4.5
        },
        { 
          name: 'Barquillos Artesanales', 
          description: 'Hechos en casa con receta familiar', 
          pricePerScoop: '$ 3.000', 
          popular: false,
          rating: 4.6
        },
        { 
          name: 'Banana Split Familiar', 
          description: 'Experiencia completa para compartir (3 bolas)', 
          pricePerScoop: '$ 18.000', 
          popular: true,
          rating: 4.9
        },
        { 
          name: 'Paletas de Fruta', 
          description: 'Naturales sin conservantes artificiales', 
          pricePerScoop: '$ 6.000', 
          popular: false,
          rating: 4.4
        }
      ]
    }
  };

  const combos = [
    {
      title: 'Combo Familiar Nevada',
      description: '4 helados de 2 bolas + 2 conos premium + toppings especiales',
      price: '$ 35.000',
      badge: 'Ahorra $ 10.000',
      icon: <Heart className="h-5 w-5" />
    },
    {
      title: 'Combo Niños Felices',
      description: '1 helado de 1 bola + cono + decoración especial',
      price: '$ 8.000',
      badge: 'Incluye Decoración',
      icon: <Smile className="h-5 w-5" />
    },
    {
      title: 'Línea Saludable',
      description: 'Opciones endulzadas con stevia natural',
      price: '$ 4.500',
      badge: 'Sin Azúcar Añadida',
      icon: <Award className="h-5 w-5" />
    }
  ];

  return (
    <section id="sabores" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Header mejorado */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-800">Nuestros </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">Sabores</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Descubre nuestra selección de sabores únicos, preparados artesanalmente 
            con los mejores ingredientes premium para toda la familia. 
            <span className="text-blue-600 font-semibold block mt-2">¡Cada sabor cuenta una historia!</span>
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-slate-700">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="font-medium">Tienda física - Ven y disfruta en nuestro local</span>
          </div>
        </div>

        {/* Category Tabs mejorados - Más separación */}
        <div className="flex justify-center mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(menuData).map(([key, category]) => (
                <Button
                  key={key}
                  variant={activeCategory === key ? "default" : "ghost"}
                  className={`rounded-xl px-6 py-6 transition-all duration-300 font-semibold min-h-[100px] ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg transform scale-105'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setActiveCategory(key)}
                >
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="text-2xl">{category.icon}</div>
                    <div>
                      <div className="text-base font-bold">{category.title}</div>
                      <div className="text-xs opacity-80 mt-1">{category.description}</div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items mejorados con espacio para imágenes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {menuData[activeCategory as keyof typeof menuData].items.map((item, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/95 backdrop-blur-sm overflow-hidden group hover:-translate-y-2">
              {/* Espacio para imagen */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <ImageIcon className="h-16 w-16 text-blue-400 opacity-50" />
                <div className="absolute top-4 right-4">
                  {item.popular && (
                    <Badge className="bg-gradient-to-r from-pink-500 to-rose-400 text-white text-xs font-semibold">
                      ¡Popular!
                    </Badge>
                  )}
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-800 mb-2">
                  {item.name}
                </CardTitle>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-sm text-slate-600 ml-2 font-medium">{item.rating}</span>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-blue-600">
                    {item.pricePerScoop}
                  </span>
                  <p className="text-sm text-slate-500 font-medium">por bola</p>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                  {item.description}
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-600 font-medium">
                    💡 Disponible en nuestro local
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Promociones mejoradas con espacio para imágenes */}
        <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-3xl p-10 shadow-2xl border-4 border-white/20">
          <h3 className="text-4xl font-bold text-center text-white mb-10">
            ✨ Combos Especiales ✨
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {combos.map((combo, index) => (
              <Card key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                {/* Espacio para imagen */}
                <div className="h-40 bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-slate-400 opacity-50" />
                </div>
                
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white">
                      {combo.icon}
                    </div>
                  </div>
                  <Badge className="w-fit mx-auto mb-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold px-4 py-1">
                    {combo.badge}
                  </Badge>
                  <CardTitle className="text-2xl text-slate-800 font-bold">
                    {combo.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-6">
                  <p className="text-slate-600 mb-6 font-medium leading-relaxed">{combo.description}</p>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    {combo.price}
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3">
                    <p className="text-sm text-green-700 font-semibold">
                      🏪 Disponible en tienda
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-slate-800 mb-4">
              📍 Visítanos en nuestro local
            </h4>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Disfruta de nuestros helados artesanales en un ambiente familiar y acogedor. 
              Todos nuestros sabores están disponibles para degustar en el momento.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-blue-50 rounded-lg p-4">
                <h5 className="font-bold text-blue-800 mb-2">🍦 Tamaños disponibles:</h5>
                <ul className="text-slate-600 space-y-1">
                  <li>• 1 bola: Perfecto para probar</li>
                  <li>• 2 bolas: Lo más popular</li>
                  <li>• 3 bolas: Para los golosos</li>
                </ul>
              </div>
              <div className="bg-cyan-50 rounded-lg p-4">
                <h5 className="font-bold text-cyan-800 mb-2">🥄 Presentaciones:</h5>
                <ul className="text-slate-600 space-y-1">
                  <li>• En cono crujiente</li>
                  <li>• En vaso premium</li>
                  <li>• En barquillo artesanal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
