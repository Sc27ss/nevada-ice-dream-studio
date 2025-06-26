
import React, { useState } from 'react';
import { IceCreamCone, IceCreamBowl, Smile } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('clasicos');

  const menuData = {
    clasicos: {
      title: 'Sabores Clásicos',
      icon: <IceCreamCone className="h-6 w-6" />,
      items: [
        { name: 'Vainilla Premium', description: 'Cremosa vainilla con esencia natural', price: '$ 8.000', popular: true },
        { name: 'Fresa Natural', description: 'Con trozos de fresa fresca', price: '$ 8.500', popular: false },
        { name: 'Chocolate Belga', description: 'Intenso chocolate importado', price: '$ 9.000', popular: true },
        { name: 'Arequipe Artesanal', description: 'Dulce de leche casero', price: '$ 9.500', popular: false },
        { name: 'Limón Refrescante', description: 'Cítrico y revitalizante', price: '$ 8.000', popular: false }
      ]
    },
    especiales: {
      title: 'Sabores Especiales',
      icon: <Smile className="h-6 w-6" />,
      items: [
        { name: 'Cheesecake con Fresa', description: 'Cremoso queso con salsa de fresa', price: '$ 12.000', popular: true },
        { name: 'Brownie con Nuez', description: 'Chocolate intenso con nueces crujientes', price: '$ 11.500', popular: true },
        { name: 'Mango Biche', description: 'Tropical y refrescante', price: '$ 10.000', popular: false },
        { name: 'Café con Leche', description: 'Aromático café colombiano', price: '$ 10.500', popular: false }
      ]
    },
    adicionales: {
      title: 'Adicionales y Postres',
      icon: <IceCreamBowl className="h-6 w-6" />,
      items: [
        { name: 'Malteadas', description: 'Cremosas y espesas, varios sabores', price: '$ 12.000', popular: true },
        { name: 'Conos Premium', description: 'Crujientes y dorados', price: '$ 2.000', popular: false },
        { name: 'Barquillos Artesanales', description: 'Hechos en casa diariamente', price: '$ 3.000', popular: false },
        { name: 'Banana Split Familiar', description: 'Para compartir en familia', price: '$ 18.000', popular: true },
        { name: 'Paletas de Fruta', description: 'Naturales y refrescantes', price: '$ 6.000', popular: false }
      ]
    }
  };

  const promos = [
    {
      title: 'Combo Familiar',
      description: '4 helados + 2 malteadas + toppings',
      price: '$ 35.000',
      badge: 'Ahorra $ 10.000'
    },
    {
      title: 'Combo Niños',
      description: '1 helado + juguete sorpresa',
      price: '$ 12.000',
      badge: 'Incluye Sorpresa'
    },
    {
      title: 'Sin Azúcar',
      description: 'Opciones endulzadas naturalmente',
      price: '$ 9.500',
      badge: 'Saludable'
    }
  ];

  return (
    <section id="sabores" className="py-20 bg-nevada-snow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Nuestro <span className="nevada-text-gradient">Menú</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de sabores únicos, preparados artesanalmente 
            con los mejores ingredientes para toda la familia
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg nevada-shadow">
            {Object.entries(menuData).map(([key, category]) => (
              <Button
                key={key}
                variant={activeCategory === key ? "default" : "ghost"}
                className={`rounded-full px-6 py-3 mx-1 transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-nevada-glacier-blue text-white shadow-md'
                    : 'text-gray-600 hover:text-nevada-glacier-blue'
                }`}
                onClick={() => setActiveCategory(key)}
              >
                <span className="flex items-center gap-2">
                  {category.icon}
                  {category.title}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {menuData[activeCategory as keyof typeof menuData].items.map((item, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 nevada-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    {item.name}
                    {item.popular && (
                      <Badge className="bg-nevada-accent-pink text-white text-xs">
                        Popular
                      </Badge>
                    )}
                  </CardTitle>
                  <span className="text-xl font-bold text-nevada-glacier-blue">
                    {item.price}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                <Button 
                  size="sm" 
                  className="mt-4 w-full bg-nevada-ice-blue hover:bg-nevada-pastel-blue text-nevada-glacier-blue hover:text-white transition-all duration-300"
                >
                  Agregar al Pedido
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Promociones */}
        <div className="bg-gradient-to-r from-nevada-ice-blue to-nevada-pastel-blue rounded-3xl p-8 nevada-shadow">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Promociones Especiales
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {promos.map((promo, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <Badge className="w-fit mx-auto mb-2 bg-nevada-accent-pink text-white">
                    {promo.badge}
                  </Badge>
                  <CardTitle className="text-xl text-gray-800">
                    {promo.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <div className="text-2xl font-bold text-nevada-glacier-blue mb-4">
                    {promo.price}
                  </div>
                  <Button className="w-full bg-nevada-glacier-blue hover:bg-nevada-pastel-blue text-white">
                    Ordenar Ahora
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
