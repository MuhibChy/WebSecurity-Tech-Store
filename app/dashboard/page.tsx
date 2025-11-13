'use client'

import { useState } from 'react'
import GlassCard from '@/components/ui/GlassCard'
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  DollarSign,
  Eye,
  Edit,
  Trash2,
  Plus
} from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { title: 'Total Revenue', value: '$124,563', change: '+12.5%', icon: DollarSign, color: 'text-green-400' },
    { title: 'Total Orders', value: '1,234', change: '+8.2%', icon: ShoppingCart, color: 'text-blue-400' },
    { title: 'Total Products', value: '856', change: '+3.1%', icon: Package, color: 'text-purple-400' },
    { title: 'Total Users', value: '12,456', change: '+15.3%', icon: Users, color: 'text-yellow-400' },
  ]

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', product: 'Security Camera System', amount: '$299.99', status: 'Completed' },
    { id: '#ORD-002', customer: 'Jane Smith', product: 'Gaming Laptop RTX 4070', amount: '$1,299.99', status: 'Processing' },
    { id: '#ORD-003', customer: 'Mike Johnson', product: 'Wireless Router', amount: '$89.99', status: 'Shipped' },
  ]

  const products = [
    { id: 1, name: 'Professional Security Camera System', category: 'Security', price: '$299.99', stock: 45 },
    { id: 2, name: 'Gaming Laptop RTX 4070', category: 'Laptops', price: '$1,299.99', stock: 12 },
    { id: 3, name: 'Wireless Gaming Mouse', category: 'Accessories', price: '$59.99', stock: 78 },
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'users', label: 'Users', icon: Users },
  ]

  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage your WebSecurity.com store</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8 overflow-x-auto">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`glass-button flex items-center space-x-2 px-6 py-3 whitespace-nowrap ${
                  activeTab === tab.id ? 'bg-blue-600' : 'hover:bg-white/20'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => {
                const IconComponent = stat.icon
                return (
                  <GlassCard key={stat.title} className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">{stat.title}</p>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                      </div>
                      <IconComponent className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </GlassCard>
                )
              })}
            </div>

            {/* Recent Orders */}
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Recent Orders
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 text-gray-400">Order ID</th>
                      <th className="text-left py-3 text-gray-400">Customer</th>
                      <th className="text-left py-3 text-gray-400">Product</th>
                      <th className="text-left py-3 text-gray-400">Amount</th>
                      <th className="text-left py-3 text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-white/5">
                        <td className="py-3 text-blue-400">{order.id}</td>
                        <td className="py-3">{order.customer}</td>
                        <td className="py-3">{order.product}</td>
                        <td className="py-3 font-semibold">{order.amount}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            order.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                            order.status === 'Processing' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">Product Management</h3>
              <button className="glass-button flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4" />
                <span>Add Product</span>
              </button>
            </div>

            <GlassCard className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 text-gray-400">Product Name</th>
                      <th className="text-left py-3 text-gray-400">Category</th>
                      <th className="text-left py-3 text-gray-400">Price</th>
                      <th className="text-left py-3 text-gray-400">Stock</th>
                      <th className="text-left py-3 text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-b border-white/5">
                        <td className="py-3">{product.name}</td>
                        <td className="py-3 text-gray-400">{product.category}</td>
                        <td className="py-3 font-semibold text-green-400">{product.price}</td>
                        <td className="py-3">{product.stock}</td>
                        <td className="py-3">
                          <div className="flex space-x-2">
                            <button className="glass-button p-2 hover:bg-blue-600">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="glass-button p-2 hover:bg-yellow-600">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="glass-button p-2 hover:bg-red-600">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <GlassCard className="p-6">
            <h3 className="text-2xl font-semibold mb-6">Order Management</h3>
            <div className="text-center py-12 text-gray-400">
              <ShoppingCart className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>Order management interface would be implemented here</p>
            </div>
          </GlassCard>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <GlassCard className="p-6">
            <h3 className="text-2xl font-semibold mb-6">User Management</h3>
            <div className="text-center py-12 text-gray-400">
              <Users className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>User management interface would be implemented here</p>
            </div>
          </GlassCard>
        )}
      </div>
    </div>
  )
}
