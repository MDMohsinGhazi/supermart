import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
    productCount: 45,
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg',
    productCount: 38,
  },
  {
    id: 'dairy',
    name: 'Dairy & Eggs',
    image: 'https://images.pexels.com/photos/936302/pexels-photo-936302.jpeg',
    productCount: 22,
  },
  {
    id: 'meat',
    name: 'Meat & Seafood',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    productCount: 31,
  },
  {
    id: 'bakery',
    name: 'Bakery',
    image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg',
    productCount: 19,
  },
  {
    id: 'beverages',
    name: 'Beverages',
    image: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg',
    productCount: 27,
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of fresh products organized by category for your convenience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-gray-200">
                <CardContent className="p-4 text-center">
                  <div className="relative overflow-hidden rounded-lg mb-3">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={200}
                      height={150}
                      className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.productCount} products
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}