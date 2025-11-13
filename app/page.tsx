'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GlassCard from '@/components/ui/GlassCard'
import { Shield, Laptop, Monitor, Gamepad2, Smartphone, Headphones, Router, Lock } from 'lucide-react'

export default function Home() {
  const featuredCategories = [
    { name: 'Security Systems', slug: 'security-systems', icon: Shield, count: '150+ Products', color: 'text-red-400' },
    { name: 'Laptops', slug: 'laptops', icon: Laptop, count: '200+ Products', color: 'text-blue-400' },
    { name: 'Desktops', slug: 'desktops', icon: Monitor, count: '180+ Products', color: 'text-green-400' },
    { name: 'Gaming PCs', slug: 'gaming-pcs', icon: Gamepad2, count: '120+ Products', color: 'text-purple-400' },
    { name: 'Mobile Phones', slug: 'mobile-phones', icon: Smartphone, count: '300+ Products', color: 'text-yellow-400' },
    { name: 'Accessories', slug: 'accessories', icon: Headphones, count: '500+ Products', color: 'text-pink-400' },
    { name: 'Networking', slug: 'networking', icon: Router, count: '80+ Products', color: 'text-cyan-400' },
    { name: 'Software', slug: 'software', icon: Lock, count: '60+ Products', color: 'text-orange-400' },
  ]

  const sampleProducts = [
    {
      id: 1,
      name: 'Professional Security Camera System',
      price: '$299.99',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
      category: 'Security Systems'
    },
    {
      id: 2,
      name: 'Gaming Laptop RTX 4070',
      price: '$1,299.99',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=200&fit=crop',
      category: 'Laptops'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-float">
              Leading Security & Tech Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Professional security systems, computers, laptops, and tech products with cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 neon-glow">
                Explore Products
              </button>
              <button className="glass-button text-lg px-8 py-4 hover:bg-white/20">
                PC Builder
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Featured Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <GlassCard className="text-center p-6 h-full">
                    <IconComponent className={`h-12 w-12 mx-auto mb-4 ${category.color}`} />
                    <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                    <p className="text-gray-400 text-sm">{category.count}</p>
                  </GlassCard>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sample Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Featured Products
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sampleProducts.map((product) => (
              <GlassCard key={product.id} className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Product Image</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-2">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-400">{product.price}</span>
                  <button className="glass-button px-4 py-2 bg-blue-600 hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <GlassCard className="p-8">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">20+</h3>
              <p className="text-gray-300">Physical Stores</p>
            </GlassCard>
            <GlassCard className="p-8">
              <h3 className="text-3xl font-bold text-green-400 mb-2">1500+</h3>
              <p className="text-gray-300">Products</p>
            </GlassCard>
            <GlassCard className="p-8">
              <h3 className="text-3xl font-bold text-purple-400 mb-2">50K+</h3>
              <p className="text-gray-300">Happy Customers</p>
            </GlassCard>
            <GlassCard className="p-8">
              <h3 className="text-3xl font-bold text-yellow-400 mb-2">16+</h3>
              <p className="text-gray-300">Years Experience</p>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
