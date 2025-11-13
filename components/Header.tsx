'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu, X, Shield } from 'lucide-react'
import GlassCard from './ui/GlassCard'
import ShoppingCartComponent from './ShoppingCart'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false)

  const categories = [
    { name: 'Security Systems', slug: 'security-systems' },
    { name: 'Laptops', slug: 'laptops' },
    { name: 'Desktops', slug: 'desktops' },
    { name: 'Gaming PCs', slug: 'gaming-pcs' },
    { name: 'Mobile Phones', slug: 'mobile-phones' },
    { name: 'Accessories', slug: 'accessories' },
    { name: 'Networking', slug: 'networking' },
    { name: 'Software', slug: 'software' }
  ]

  return (
    <header className="fixed top-0 w-full z-50 glass-dark border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold gradient-text">WebSecurity.com</h1>
          </Link>
          
          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for security systems, laptops, accessories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass rounded-l-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="glass-button rounded-r-lg rounded-l-none px-6 py-3 bg-blue-600 hover:bg-blue-700">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="glass-button p-3 relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="glass-button p-3">
              <User className="h-5 w-5" />
            </button>
            <button 
              className="md:hidden glass-button p-3"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="glass-button text-sm hover:text-blue-400 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass rounded-l-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="absolute right-0 top-0 glass-button rounded-r-lg rounded-l-none px-4 py-3 bg-blue-600 hover:bg-blue-700">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Shopping Cart */}
      <ShoppingCartComponent 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </header>
  )
}
