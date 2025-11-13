'use client'

import { useState } from 'react'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import GlassCard from './ui/GlassCard'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image?: string
  category: string
}

interface ShoppingCartProps {
  isOpen: boolean
  onClose: () => void
}

export default function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Professional Security Camera System',
      price: 299.99,
      quantity: 1,
      category: 'Security Systems'
    },
    {
      id: 2,
      name: 'Gaming Laptop RTX 4070',
      price: 1299.99,
      quantity: 1,
      category: 'Laptops'
    },
    {
      id: 3,
      name: 'Wireless Gaming Mouse',
      price: 59.99,
      quantity: 2,
      category: 'Accessories'
    }
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md glass-dark border-l border-white/20">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-blue-400" />
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded-full">
                {getTotalItems()}
              </span>
            </div>
            <button
              onClick={onClose}
              className="glass-button p-2 hover:bg-red-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <ShoppingBag className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Your cart is empty</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <GlassCard key={item.id} className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-400">IMG</span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white truncate">{item.name}</h3>
                      <p className="text-sm text-gray-400">{item.category}</p>
                      <p className="text-lg font-semibold text-blue-400">
                        ${item.price.toFixed(2)}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="glass-button p-1 hover:bg-red-600"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-white font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="glass-button p-1 hover:bg-green-600"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="glass-button p-1 hover:bg-red-600 ml-auto"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-white/10 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-blue-400">${getTotalPrice().toFixed(2)}</span>
              </div>
              
              <div className="space-y-3">
                <button className="w-full glass-button bg-blue-600 hover:bg-blue-700 py-3 font-medium">
                  Proceed to Checkout
                </button>
                <button 
                  onClick={onClose}
                  className="w-full glass-button hover:bg-white/20 py-3"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
