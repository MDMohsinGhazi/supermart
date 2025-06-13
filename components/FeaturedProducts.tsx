'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  unit: string;
  inStock: boolean;
  featured: boolean;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for now - replace with API call
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Fresh Organic Bananas',
        description: 'Sweet and ripe organic bananas, perfect for breakfast or snacks.',
        price: 2.99,
        originalPrice: 3.49,
        image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg',
        unit: 'lb',
        inStock: true,
        featured: true,
      },
      {
        id: '2',
        name: 'Premium Ground Coffee',
        description: 'Rich, aromatic coffee beans ground to perfection.',
        price: 12.99,
        originalPrice: 15.99,
        image: 'https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg',
        unit: 'bag',
        inStock: true,
        featured: true,
      },
      {
        id: '3',
        name: 'Fresh Salmon Fillet',
        description: 'Wild-caught salmon, fresh and ready to cook.',
        price: 18.99,
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
        unit: 'lb',
        inStock: true,
        featured: true,
      },
      {
        id: '4',
        name: 'Organic Mixed Greens',
        description: 'Fresh organic salad mix with various leafy greens.',
        price: 4.99,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        unit: 'bag',
        inStock: true,
        featured: true,
      },
    ];

    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium products
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                <div className="bg-gray-300 h-48 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="bg-gray-300 h-4 rounded w-3/4"></div>
                  <div className="bg-gray-300 h-3 rounded w-1/2"></div>
                  <div className="bg-gray-300 h-6 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products, carefully chosen for their quality and freshness
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}