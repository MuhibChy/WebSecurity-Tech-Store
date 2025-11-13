'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, ChevronLeft } from 'lucide-react'
import GlassCard from './ui/GlassCard'
import { getProductById, products, Product } from '@/lib/products'

interface ProductPageClientProps {
  productId: number
}

export default function ProductPageClient({ productId }: ProductPageClientProps) {
  const product = getProductById(productId)
  
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  if (!product) {
    return (
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
        <p className="text-gray-400 mb-8">The requested product does not exist.</p>
        <Link href="/" className="glass-button bg-blue-600 hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    console.log(`Added ${quantity} x ${product.name} to cart`)
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="container mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <span>/</span>
        <Link 
          href={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`}
          className="hover:text-blue-400"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-blue-400">{product.name}</span>
      </div>

      {/* Back Button */}
      <button 
        onClick={() => window.history.back()}
        className="glass-button flex items-center gap-2 mb-8"
      >
        <ChevronLeft className="h-4 w-4" />
        Back
      </button>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <GlassCard className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <span className="text-gray-400">Product Image</span>
          </GlassCard>
          
          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`glass-card aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center ${
                  selectedImage === index ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                <span className="text-xs text-gray-400">{index}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Brand & Name */}
          <div>
            <p className="text-blue-400 font-medium mb-2">{product.brand}</p>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-400">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-blue-400">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            {product.inStock ? (
              <>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-green-400 font-medium">
                  In Stock ({product.stockCount} available)
                </span>
              </>
            ) : (
              <>
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span className="text-red-400 font-medium">Out of Stock</span>
              </>
            )}
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          {product.inStock && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-white font-medium">Quantity:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="glass-button p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-white font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stockCount}
                    className="glass-button p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 glass-button bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 py-4 text-lg font-semibold"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`glass-button p-4 ${isWishlisted ? 'bg-red-500' : 'hover:bg-red-500'}`}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                <button className="glass-button p-4 hover:bg-gray-600">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* Service Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-white font-medium text-sm">Free Shipping</p>
                <p className="text-gray-400 text-xs">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-white font-medium text-sm">Warranty</p>
                <p className="text-gray-400 text-xs">1 year coverage</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="h-5 w-5 text-yellow-400" />
              <div>
                <p className="text-white font-medium text-sm">Returns</p>
                <p className="text-gray-400 text-xs">30 day policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <GlassCard className="p-8">
          <div className="space-y-8">
            {/* Description */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Description</h3>
              <p className="text-gray-300 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">{key}:</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h3 className="text-3xl font-bold gradient-text mb-8">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`}>
                <GlassCard className="p-4 h-full">
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Image</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h4>
                  <p className="text-blue-400 font-bold">
                    ${relatedProduct.price.toFixed(2)}
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
