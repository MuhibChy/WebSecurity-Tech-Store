'use client'

import { Shield, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import GlassCard from './ui/GlassCard'

export default function Footer() {
  const quickLinks = [
    'About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 
    'Shipping Info', 'Returns', 'FAQ', 'Support'
  ]

  const categories = [
    'Security Systems', 'Laptops', 'Desktops', 'Gaming PCs',
    'Mobile Phones', 'Accessories', 'Networking', 'Software'
  ]

  return (
    <footer className="mt-20 py-16 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold gradient-text">WebSecurity.com</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Leading provider of security solutions and technology products with 16+ years of experience.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>123 Tech Street, Digital City</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@websecurity.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button className="text-gray-400 hover:text-blue-400 transition-colors text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <button className="text-gray-400 hover:text-blue-400 transition-colors text-left">
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest deals and tech news.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full glass rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="w-full glass-button bg-blue-600 hover:bg-blue-700 py-3">
                Subscribe
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <button className="glass-button p-3 hover:bg-blue-600">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="glass-button p-3 hover:bg-blue-600">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="glass-button p-3 hover:bg-pink-600">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="glass-button p-3 hover:bg-red-600">
                <Youtube className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 WebSecurity.com. All rights reserved. | ISO 9001:2015 Certified
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-blue-400 transition-colors">Privacy</button>
              <button className="hover:text-blue-400 transition-colors">Terms</button>
              <button className="hover:text-blue-400 transition-colors">Cookies</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
