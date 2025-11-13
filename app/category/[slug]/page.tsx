'use client'

import { useState, useMemo } from 'react'
import { useParams } from 'next/navigation'
import { Filter, Grid, List, SlidersHorizontal, ChevronDown } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import GlassCard from '@/components/ui/GlassCard'
import { categories, products, Product } from '@/lib/products'

export default function CategoryPage() {
  const params = useParams()
  const categorySlug = params.slug as string
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  // Find category
  const category = categories.find(cat => cat.id === categorySlug)
  
  // Get products for this category
  const categoryProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = product.category.toLowerCase().replace(/\s+/g, '-') === categorySlug ||
                           product.category === category?.name
      
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
      
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      
      const subcategoryMatch = selectedSubcategories.length === 0 || 
                              selectedSubcategories.includes(product.subcategory || '')
      
      return categoryMatch && priceMatch && brandMatch && subcategoryMatch
    })
  }, [categorySlug, category?.name, priceRange, selectedBrands, selectedSubcategories])

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...categoryProducts]
    
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price)
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating)
      case 'newest':
        return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      default: // featured
        return sorted.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
    }
  }, [categoryProducts, sortBy])

  // Get unique brands and subcategories for filters
  const availableBrands = useMemo(() => {
    return [...new Set(categoryProducts.map(p => p.brand))].sort()
  }, [categoryProducts])

  const availableSubcategories = useMemo(() => {
    return [...new Set(categoryProducts.map(p => p.subcategory).filter(Boolean))].sort()
  }, [categoryProducts])

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <p className="text-gray-400">The requested category does not exist.</p>
        </div>
      </div>
    )
  }

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  const handleSubcategoryToggle = (subcategory: string) => {
    setSelectedSubcategories(prev => 
      prev.includes(subcategory) 
        ? prev.filter(s => s !== subcategory)
        : [...prev, subcategory]
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          {/* Category Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span>Home</span>
              <span>/</span>
              <span className="text-blue-400">{category.name}</span>
            </div>
            <h1 className="text-4xl font-bold gradient-text mb-4">{category.name}</h1>
            <p className="text-gray-300 text-lg">{category.description}</p>
            <p className="text-gray-400 mt-2">{sortedProducts.length} products found</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80">
              <div className="lg:sticky lg:top-32">
                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden w-full glass-button flex items-center justify-center gap-2 mb-4"
                >
                  <SlidersHorizontal className="h-5 w-5" />
                  Filters
                  <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>

                <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                  {/* Price Range */}
                  <GlassCard className="p-6">
                    <h3 className="font-semibold text-white mb-4">Price Range</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <input
                          type="number"
                          placeholder="Min"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                          className="glass rounded px-3 py-2 text-white text-sm flex-1"
                        />
                        <span className="text-gray-400">-</span>
                        <input
                          type="number"
                          placeholder="Max"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                          className="glass rounded px-3 py-2 text-white text-sm flex-1"
                        />
                      </div>
                    </div>
                  </GlassCard>

                  {/* Brands */}
                  {availableBrands.length > 0 && (
                    <GlassCard className="p-6">
                      <h3 className="font-semibold text-white mb-4">Brands</h3>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {availableBrands.map(brand => (
                          <label key={brand} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedBrands.includes(brand)}
                              onChange={() => handleBrandToggle(brand)}
                              className="rounded border-gray-600 bg-transparent"
                            />
                            <span className="text-gray-300 text-sm">{brand}</span>
                          </label>
                        ))}
                      </div>
                    </GlassCard>
                  )}

                  {/* Subcategories */}
                  {availableSubcategories.length > 0 && (
                    <GlassCard className="p-6">
                      <h3 className="font-semibold text-white mb-4">Categories</h3>
                      <div className="space-y-2">
                        {availableSubcategories.map(subcategory => subcategory && (
                          <label key={subcategory} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedSubcategories.includes(subcategory)}
                              onChange={() => handleSubcategoryToggle(subcategory)}
                              className="rounded border-gray-600 bg-transparent"
                            />
                            <span className="text-gray-300 text-sm">{subcategory}</span>
                          </label>
                        ))}
                      </div>
                    </GlassCard>
                  )}
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="glass rounded px-4 py-2 text-white text-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Name A-Z</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`glass-button p-2 ${viewMode === 'grid' ? 'bg-blue-600' : ''}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`glass-button p-2 ${viewMode === 'list' ? 'bg-blue-600' : ''}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Products Grid */}
              {sortedProducts.length > 0 ? (
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                    : 'grid-cols-1'
                }`}>
                  {sortedProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={(product) => {
                        console.log('Add to cart:', product.name)
                        // Add to cart logic here
                      }}
                      onViewDetails={(product) => {
                        console.log('View details:', product.name)
                        // Navigate to product details
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <Filter className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-xl">No products found</p>
                    <p>Try adjusting your filters or search criteria</p>
                  </div>
                  <button
                    onClick={() => {
                      setPriceRange([0, 5000])
                      setSelectedBrands([])
                      setSelectedSubcategories([])
                    }}
                    className="glass-button px-6 py-3 bg-blue-600 hover:bg-blue-700"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
