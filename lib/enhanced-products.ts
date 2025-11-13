export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  category: string
  subcategory?: string
  brand: string
  image: string
  rating: number
  reviews: number
  inStock: boolean
  stockCount: number
  features: string[]
  description: string
  specifications: Record<string, string>
  isNew?: boolean
  isFeatured?: boolean
  discount?: number
}

export const categories = [
  {
    id: 'security-systems',
    name: 'Security Systems',
    description: 'Professional security cameras, alarms, and monitoring systems for home and business',
    icon: 'Shield',
    subcategories: ['CCTV Cameras', 'IP Cameras', 'Security Alarms', 'Access Control', 'Monitoring Systems']
  },
  {
    id: 'laptops',
    name: 'Laptops',
    description: 'Gaming, business, and ultrabook laptops from top brands with latest technology',
    icon: 'Laptop',
    subcategories: ['Gaming Laptops', 'Business Laptops', 'Ultrabooks', 'Workstations', '2-in-1 Laptops']
  },
  {
    id: 'desktops',
    name: 'Desktops',
    description: 'Custom PCs, brand desktops, and all-in-one computers for every need',
    icon: 'Monitor',
    subcategories: ['Gaming PCs', 'Office PCs', 'All-in-One', 'Workstations', 'Mini PCs']
  },
  {
    id: 'gaming-pcs',
    name: 'Gaming PCs',
    description: 'High-performance gaming computers and components for ultimate gaming experience',
    icon: 'Gamepad2',
    subcategories: ['Pre-built Gaming PCs', 'Custom Gaming PCs', 'Gaming Components', 'VR Ready PCs']
  },
  {
    id: 'mobile-phones',
    name: 'Mobile Phones',
    description: 'Latest smartphones from leading manufacturers with cutting-edge features',
    icon: 'Smartphone',
    subcategories: ['Android Phones', 'iPhones', 'Gaming Phones', 'Budget Phones', 'Flagship Phones']
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Computer peripherals, mobile accessories, and tech gadgets to enhance your setup',
    icon: 'Headphones',
    subcategories: ['Keyboards & Mice', 'Headphones', 'Mobile Accessories', 'Cables & Adapters', 'Storage']
  },
  {
    id: 'networking',
    name: 'Networking',
    description: 'Routers, switches, and network infrastructure equipment for reliable connectivity',
    icon: 'Router',
    subcategories: ['Routers', 'Switches', 'Access Points', 'Network Cards', 'Cables']
  },
  {
    id: 'software',
    name: 'Software',
    description: 'Operating systems, productivity software, and security solutions for all platforms',
    icon: 'Lock',
    subcategories: ['Operating Systems', 'Antivirus', 'Office Software', 'Design Software', 'Development Tools']
  }
]

export const products: Product[] = [
  // Security Systems (Enhanced with more products)
  {
    id: 1,
    name: 'Professional 4K Security Camera System (8-Channel)',
    price: 599.99,
    originalPrice: 799.99,
    category: 'Security Systems',
    subcategory: 'CCTV Cameras',
    brand: 'SecureTech Pro',
    image: '/images/security-camera-system.jpg',
    rating: 4.9,
    reviews: 342,
    inStock: true,
    stockCount: 28,
    features: ['8x 4K Cameras', 'Night Vision 150ft', 'AI Motion Detection', 'Mobile App', 'Cloud Storage', '2TB HDD Included'],
    description: 'Complete 8-channel 4K security camera system with AI-powered motion detection, advanced night vision, and professional-grade recording capabilities.',
    specifications: {
      'Resolution': '4K Ultra HD (3840x2160)',
      'Cameras Included': '8x Weatherproof Cameras',
      'Night Vision': 'Up to 150ft IR Range',
      'Storage': '2TB HDD + Cloud Backup',
      'Connectivity': 'WiFi + Ethernet + PoE',
      'Recording': '24/7 Continuous + Motion',
      'Mobile App': 'iOS & Android Compatible',
      'Warranty': '3 Years Professional'
    },
    isNew: true,
    isFeatured: true,
    discount: 25
  },
  {
    id: 2,
    name: 'Smart Wireless IP Camera - Pan/Tilt/Zoom',
    price: 149.99,
    originalPrice: 199.99,
    category: 'Security Systems',
    subcategory: 'IP Cameras',
    brand: 'SmartView',
    image: '/images/ip-camera.jpg',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    stockCount: 67,
    features: ['360° Pan/Tilt', '4x Digital Zoom', 'Two-Way Audio', 'Motion Tracking', 'Night Vision', 'Cloud Storage'],
    description: 'Advanced wireless IP camera with 360-degree rotation, intelligent motion tracking, and crystal-clear two-way audio communication.',
    specifications: {
      'Resolution': '2K QHD (2560x1440)',
      'Field of View': '360° Pan, 90° Tilt',
      'Zoom': '4x Digital Zoom',
      'Audio': 'Two-Way Communication',
      'Night Vision': 'Up to 32ft',
      'Storage': 'MicroSD + Cloud',
      'Power': 'DC 5V USB',
      'Connectivity': 'WiFi 802.11n'
    },
    discount: 25
  },
  {
    id: 3,
    name: 'Smart Home Security Alarm System - Complete Kit',
    price: 299.99,
    originalPrice: 399.99,
    category: 'Security Systems',
    subcategory: 'Security Alarms',
    brand: 'HomeSafe Pro',
    image: '/images/alarm-system.jpg',
    rating: 4.8,
    reviews: 234,
    inStock: true,
    stockCount: 45,
    features: ['15 Sensors Included', 'Professional Monitoring', 'Smart Integration', 'Mobile Alerts', 'Backup Battery', 'Easy DIY Setup'],
    description: 'Comprehensive wireless security system with professional monitoring, smart home integration, and easy self-installation.',
    specifications: {
      'Sensors': '10 Door/Window + 3 Motion + 2 Glass Break',
      'Hub Range': 'Up to 2000ft',
      'Battery Life': '5+ years per sensor',
      'Connectivity': 'WiFi + Cellular Backup',
      'Monitoring': '24/7 Professional Service',
      'Integration': 'Alexa, Google, Apple HomeKit',
      'Installation': 'DIY with Professional Support'
    },
    isFeatured: true,
    discount: 25
  },

  // Laptops (Enhanced with more variety)
  {
    id: 4,
    name: 'ASUS ROG Strix G16 - RTX 4070 Gaming Laptop',
    price: 1599.99,
    originalPrice: 1899.99,
    category: 'Laptops',
    subcategory: 'Gaming Laptops',
    brand: 'ASUS',
    image: '/images/asus-rog-laptop.jpg',
    rating: 4.9,
    reviews: 567,
    inStock: true,
    stockCount: 15,
    features: ['RTX 4070 8GB', '16" 165Hz Display', 'RGB Per-Key Keyboard', '32GB DDR5', '1TB Gen4 SSD', 'Advanced Cooling'],
    description: 'Ultimate gaming laptop with RTX 4070 graphics, high-refresh display, and advanced thermal management for peak performance.',
    specifications: {
      'Processor': 'Intel Core i7-13650HX (14-Core)',
      'Graphics': 'NVIDIA GeForce RTX 4070 8GB GDDR6',
      'RAM': '32GB DDR5-4800',
      'Storage': '1TB PCIe 4.0 NVMe SSD',
      'Display': '16" WQXGA 165Hz IPS G-SYNC',
      'Keyboard': 'RGB Per-Key with Aura Sync',
      'Audio': 'Dolby Atmos with Smart Amp',
      'Ports': 'USB-C, USB 3.2, HDMI 2.1, Ethernet'
    },
    isNew: true,
    isFeatured: true,
    discount: 16
  },
  {
    id: 5,
    name: 'MacBook Pro 14" - M3 Pro Chip (Space Black)',
    price: 2399.99,
    category: 'Laptops',
    subcategory: 'Business Laptops',
    brand: 'Apple',
    image: '/images/macbook-pro-14.jpg',
    rating: 4.9,
    reviews: 423,
    inStock: true,
    stockCount: 32,
    features: ['M3 Pro Chip', 'Liquid Retina XDR', '18GB Unified Memory', '512GB SSD', '18-hour Battery', 'Studio-Quality Mics'],
    description: 'Professional laptop with M3 Pro chip delivering exceptional performance for creative professionals and developers.',
    specifications: {
      'Processor': 'Apple M3 Pro (11-core CPU, 14-core GPU)',
      'Memory': '18GB Unified Memory',
      'Storage': '512GB SSD',
      'Display': '14.2" Liquid Retina XDR (3024x1964)',
      'Battery': 'Up to 18 hours video playback',
      'Camera': '1080p FaceTime HD',
      'Audio': '6-speaker system with Spatial Audio',
      'Ports': '3x Thunderbolt 4, HDMI, SDXC, MagSafe 3'
    },
    isNew: true,
    isFeatured: true
  },
  {
    id: 6,
    name: 'Dell XPS 13 Plus - Business Ultrabook',
    price: 1299.99,
    originalPrice: 1499.99,
    category: 'Laptops',
    subcategory: 'Ultrabooks',
    brand: 'Dell',
    image: '/images/dell-xps-13.jpg',
    rating: 4.7,
    reviews: 298,
    inStock: true,
    stockCount: 41,
    features: ['13.4" OLED Touch', 'Intel Evo Platform', '16GB LPDDR5', '512GB SSD', 'Fingerprint Reader', 'Premium Design'],
    description: 'Premium ultrabook with stunning OLED display, Intel Evo certification, and enterprise-grade security features.',
    specifications: {
      'Processor': 'Intel Core i7-1360P (12th Gen)',
      'RAM': '16GB LPDDR5-5200',
      'Storage': '512GB PCIe 4.0 SSD',
      'Display': '13.4" 3.5K OLED Touch (3456x2160)',
      'Graphics': 'Intel Iris Xe',
      'Weight': '2.73 lbs (1.24 kg)',
      'Battery': 'Up to 12 hours',
      'Security': 'Windows Hello Fingerprint'
    },
    discount: 13
  },

  // Desktops (Enhanced with more variety)
  {
    id: 7,
    name: 'Custom Gaming PC - RTX 4080 Super Build',
    price: 2799.99,
    originalPrice: 3199.99,
    category: 'Desktops',
    subcategory: 'Gaming PCs',
    brand: 'WebSecurity Custom',
    image: '/images/custom-gaming-pc.jpg',
    rating: 4.9,
    reviews: 187,
    inStock: true,
    stockCount: 12,
    features: ['RTX 4080 Super', 'Liquid Cooling', 'Tempered Glass', '32GB DDR5', '2TB NVMe', 'RGB Ecosystem'],
    description: 'Ultimate custom gaming PC with RTX 4080 Super graphics, premium liquid cooling, and stunning RGB lighting for 4K gaming excellence.',
    specifications: {
      'Processor': 'AMD Ryzen 9 7900X (12-Core, 24-Thread)',
      'Graphics': 'NVIDIA GeForce RTX 4080 Super 16GB',
      'RAM': '32GB DDR5-5600 RGB',
      'Storage': '2TB PCIe 4.0 NVMe SSD',
      'Motherboard': 'ASUS ROG Strix X670E-E',
      'Cooling': '360mm AIO Liquid Cooler',
      'PSU': '850W 80+ Gold Modular',
      'Case': 'Tempered Glass RGB'
    },
    isNew: true,
    isFeatured: true,
    discount: 12
  },
  {
    id: 8,
    name: 'HP EliteDesk 800 G9 - Business Desktop',
    price: 899.99,
    category: 'Desktops',
    subcategory: 'Office PCs',
    brand: 'HP',
    image: '/images/hp-elitedesk.jpg',
    rating: 4.6,
    reviews: 145,
    inStock: true,
    stockCount: 67,
    features: ['Intel vPro', 'Windows 11 Pro', 'Tool-free Upgrade', 'Energy Efficient', 'Multiple Ports', '3-Year Warranty'],
    description: 'Professional business desktop with Intel vPro technology, enterprise security features, and reliable performance for office environments.',
    specifications: {
      'Processor': 'Intel Core i5-12500 (6-Core)',
      'RAM': '16GB DDR4-3200',
      'Storage': '512GB NVMe SSD',
      'Graphics': 'Intel UHD Graphics 770',
      'OS': 'Windows 11 Pro',
      'Form Factor': 'Small Form Factor',
      'Ports': 'USB-C, USB 3.2, DisplayPort, VGA',
      'Security': 'TPM 2.0, Secure Boot'
    }
  },

  // Mobile Phones (Enhanced with latest models)
  {
    id: 9,
    name: 'iPhone 15 Pro Max - 512GB (Natural Titanium)',
    price: 1499.99,
    category: 'Mobile Phones',
    subcategory: 'iPhones',
    brand: 'Apple',
    image: '/images/iphone-15-pro-max.jpg',
    rating: 4.9,
    reviews: 892,
    inStock: true,
    stockCount: 34,
    features: ['A17 Pro Chip', 'Titanium Design', 'Pro Camera System', 'Action Button', 'USB-C', '5G Ultra Wideband'],
    description: 'The most advanced iPhone ever with titanium construction, A17 Pro chip, and revolutionary Pro camera system with 5x telephoto zoom.',
    specifications: {
      'Display': '6.7" Super Retina XDR OLED',
      'Processor': 'A17 Pro (3nm)',
      'Storage': '512GB',
      'Camera': '48MP Main + 12MP Ultra Wide + 12MP Telephoto (5x)',
      'Video': '4K ProRes, Cinematic Mode',
      'Battery': 'Up to 29 hours video playback',
      'Connectivity': '5G, WiFi 6E, Bluetooth 5.3',
      'Materials': 'Grade 5 Titanium'
    },
    isNew: true,
    isFeatured: true
  },
  {
    id: 10,
    name: 'Samsung Galaxy S24 Ultra - 256GB (Titanium Black)',
    price: 1299.99,
    originalPrice: 1399.99,
    category: 'Mobile Phones',
    subcategory: 'Android Phones',
    brand: 'Samsung',
    image: '/images/galaxy-s24-ultra.jpg',
    rating: 4.8,
    reviews: 567,
    inStock: true,
    stockCount: 45,
    features: ['S Pen Included', '200MP Camera', 'AI Photo Enhancement', '120Hz Display', '5000mAh Battery', 'Titanium Frame'],
    description: 'Premium Android flagship with built-in S Pen, 200MP camera system, AI-powered features, and titanium construction.',
    specifications: {
      'Display': '6.8" Dynamic AMOLED 2X 120Hz',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': '12GB',
      'Storage': '256GB UFS 4.0',
      'Camera': '200MP Main + 50MP Periscope + 12MP Ultra Wide + 10MP Telephoto',
      'Battery': '5000mAh with 45W Fast Charging',
      'S Pen': 'Built-in with Air Actions',
      'OS': 'Android 14 with One UI 6.1'
    },
    isNew: true,
    isFeatured: true,
    discount: 7
  }
]

export function getProductsByCategory(categoryId: string): Product[] {
  const categoryName = categories.find(cat => cat.id === categoryId)?.name
  return products.filter(product => 
    product.category === categoryName || 
    product.category.toLowerCase().replace(/\s+/g, '-') === categoryId
  )
}

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.isFeatured)
}

export function getNewProducts(): Product[] {
  return products.filter(product => product.isNew)
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase())
}

export function getProductsByPriceRange(min: number, max: number): Product[] {
  return products.filter(product => product.price >= min && product.price <= max)
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.brand.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.features.some(feature => feature.toLowerCase().includes(searchTerm))
  )
}

export function getDiscountedProducts(): Product[] {
  return products.filter(product => product.discount && product.discount > 0)
}

export function getTopRatedProducts(minRating: number = 4.5): Product[] {
  return products.filter(product => product.rating >= minRating)
    .sort((a, b) => b.rating - a.rating)
}
