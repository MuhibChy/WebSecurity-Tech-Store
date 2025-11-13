'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GlassCard from '@/components/ui/GlassCard'
import ProductCard from '@/components/ProductCard'
import { Shield, Laptop, Monitor, Gamepad2, Smartphone, Headphones, Router, Lock, Star, TrendingUp, Zap } from 'lucide-react'
import { categories, getFeaturedProducts, getNewProducts, getDiscountedProducts } from '@/lib/products'

export default function Home() {
  const featuredProducts = getFeaturedProducts()
  const newProducts = getNewProducts()
  const discountedProducts = getDiscountedProducts()

  const featuredCategories = categories.map(category => ({
    ...category,
    count: `${Math.floor(Math.random() * 50) + 20}+ Products`,
    color: {
      'security-systems': 'text-red-400',
      'laptops': 'text-blue-400',
      'desktops': 'text-green-400',
      'gaming-pcs': 'text-purple-400',
      'mobile-phones': 'text-yellow-400',
      'accessories': 'text-pink-400',
      'networking': 'text-cyan-400',
      'software': 'text-orange-400',
    }[category.id] || 'text-gray-400'
  }))

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
              const iconMap = {
                'Shield': Shield,
                'Laptop': Laptop,
                'Monitor': Monitor,
                'Gamepad2': Gamepad2,
                'Smartphone': Smartphone,
                'Headphones': Headphones,
                'Router': Router,
                'Lock': Lock
              }
              const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Shield
              return (
                <Link key={category.id} href={`/category/${category.id}`}>
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

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="h-8 w-8 text-yellow-400" />
            <h2 className="text-4xl font-bold gradient-text">Featured Products</h2>
            <Star className="h-8 w-8 text-yellow-400" />
          </div>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover our hand-picked selection of premium tech products with cutting-edge features and unbeatable performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(product) => console.log('Add to cart:', product.name)}
                onViewDetails={(product) => console.log('View details:', product.name)}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/category/all" className="glass-button bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="h-8 w-8 text-green-400" />
            <h2 className="text-4xl font-bold gradient-text">New Arrivals</h2>
            <Zap className="h-8 w-8 text-green-400" />
          </div>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Stay ahead with the latest technology releases and innovations in the market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(product) => console.log('Add to cart:', product.name)}
                onViewDetails={(product) => console.log('View details:', product.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="h-8 w-8 text-red-400" />
            <h2 className="text-4xl font-bold gradient-text">Special Offers</h2>
            <TrendingUp className="h-8 w-8 text-red-400" />
          </div>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Don't miss out on these incredible deals and limited-time discounts on premium products.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {discountedProducts.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(product) => console.log('Add to cart:', product.name)}
                onViewDetails={(product) => console.log('View details:', product.name)}
              />
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
