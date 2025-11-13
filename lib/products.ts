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
    description: 'Professional security cameras, alarms, and monitoring systems',
    icon: 'Shield',
    subcategories: ['CCTV Cameras', 'IP Cameras', 'Security Alarms', 'Access Control', 'Monitoring Systems']
  },
  {
    id: 'laptops',
    name: 'Laptops',
    description: 'Gaming, business, and ultrabook laptops from top brands',
    icon: 'Laptop',
    subcategories: ['Gaming Laptops', 'Business Laptops', 'Ultrabooks', 'Workstations', '2-in-1 Laptops']
  },
  {
    id: 'desktops',
    name: 'Desktops',
    description: 'Custom PCs, brand desktops, and all-in-one computers',
    icon: 'Monitor',
    subcategories: ['Gaming PCs', 'Office PCs', 'All-in-One', 'Workstations', 'Mini PCs']
  },
  {
    id: 'gaming-pcs',
    name: 'Gaming PCs',
    description: 'High-performance gaming computers and components',
    icon: 'Gamepad2',
    subcategories: ['Pre-built Gaming PCs', 'Custom Gaming PCs', 'Gaming Components', 'VR Ready PCs']
  },
  {
    id: 'mobile-phones',
    name: 'Mobile Phones',
    description: 'Latest smartphones from leading manufacturers',
    icon: 'Smartphone',
    subcategories: ['Android Phones', 'iPhones', 'Gaming Phones', 'Budget Phones', 'Flagship Phones']
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Computer peripherals, mobile accessories, and tech gadgets',
    icon: 'Headphones',
    subcategories: ['Keyboards & Mice', 'Headphones', 'Mobile Accessories', 'Cables & Adapters', 'Storage']
  },
  {
    id: 'networking',
    name: 'Networking',
    description: 'Routers, switches, and network infrastructure equipment',
    icon: 'Router',
    subcategories: ['Routers', 'Switches', 'Access Points', 'Network Cards', 'Cables']
  },
  {
    id: 'software',
    name: 'Software',
    description: 'Operating systems, productivity software, and security solutions',
    icon: 'Lock',
    subcategories: ['Operating Systems', 'Antivirus', 'Office Software', 'Design Software', 'Development Tools']
  }
]

export const products: Product[] = [
  // Security Systems
  {
    id: 1,
    name: 'Professional 4K Security Camera System',
    price: 299.99,
    originalPrice: 399.99,
    category: 'Security Systems',
    subcategory: 'CCTV Cameras',
    brand: 'SecureTech',
    image: '/images/security-camera.jpg',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    stockCount: 45,
    features: ['4K Ultra HD', 'Night Vision', 'Motion Detection', 'Mobile App', 'Cloud Storage'],
    description: 'Professional grade 4K security camera system with advanced night vision and intelligent motion detection.',
    specifications: {
      'Resolution': '4K Ultra HD (3840x2160)',
      'Night Vision': 'Up to 100ft',
      'Storage': 'Local + Cloud',
      'Connectivity': 'WiFi + Ethernet',
      'Power': 'PoE or DC 12V'
    },
    isNew: true,
    isFeatured: true,
    discount: 25
  },
  {
    id: 2,
    name: 'Smart Home Security Alarm System',
    price: 199.99,
    category: 'Security Systems',
    subcategory: 'Security Alarms',
    brand: 'HomeSafe',
    image: '/images/alarm-system.jpg',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    stockCount: 32,
    features: ['Wireless Setup', 'Mobile Alerts', 'Smart Integration', '24/7 Monitoring'],
    description: 'Complete wireless security alarm system with smart home integration and professional monitoring.',
    specifications: {
      'Sensors': '10 Door/Window + 2 Motion',
      'Range': 'Up to 1000ft',
      'Battery Life': '3-5 years',
      'Connectivity': 'WiFi + Cellular',
      'Monitoring': '24/7 Professional'
    }
  },

  // Laptops
  {
    id: 3,
    name: 'Gaming Laptop RTX 4070 - 15.6" 144Hz',
    price: 1299.99,
    originalPrice: 1499.99,
    category: 'Laptops',
    subcategory: 'Gaming Laptops',
    brand: 'ASUS',
    image: '/images/gaming-laptop.jpg',
    rating: 4.9,
    reviews: 234,
    inStock: true,
    stockCount: 12,
    features: ['RTX 4070 GPU', '144Hz Display', 'RGB Keyboard', '32GB RAM', '1TB SSD'],
    description: 'High-performance gaming laptop with RTX 4070 graphics and 144Hz display for ultimate gaming experience.',
    specifications: {
      'Processor': 'Intel Core i7-13700H',
      'Graphics': 'NVIDIA RTX 4070 8GB',
      'RAM': '32GB DDR5',
      'Storage': '1TB NVMe SSD',
      'Display': '15.6" 144Hz IPS'
    },
    isFeatured: true,
    discount: 13
  },
  {
    id: 4,
    name: 'Business Ultrabook - 13.3" Touch',
    price: 899.99,
    category: 'Laptops',
    subcategory: 'Business Laptops',
    brand: 'Dell',
    image: '/images/business-laptop.jpg',
    rating: 4.7,
    reviews: 167,
    inStock: true,
    stockCount: 28,
    features: ['Touchscreen', 'Fingerprint Reader', 'All-day Battery', 'Lightweight', 'Windows 11 Pro'],
    description: 'Premium business ultrabook with touchscreen and enterprise-grade security features.',
    specifications: {
      'Processor': 'Intel Core i5-1340P',
      'RAM': '16GB LPDDR5',
      'Storage': '512GB SSD',
      'Display': '13.3" FHD Touch',
      'Weight': '2.8 lbs'
    }
  },

  // Desktops
  {
    id: 5,
    name: 'Custom Gaming PC - RTX 4080 Build',
    price: 2199.99,
    category: 'Desktops',
    subcategory: 'Gaming PCs',
    brand: 'Custom Build',
    image: '/images/gaming-desktop.jpg',
    rating: 4.9,
    reviews: 98,
    inStock: true,
    stockCount: 8,
    features: ['RTX 4080 GPU', 'Liquid Cooling', 'RGB Lighting', '32GB RAM', '2TB Storage'],
    description: 'Ultimate custom gaming PC with RTX 4080 graphics and premium components for 4K gaming.',
    specifications: {
      'Processor': 'AMD Ryzen 7 7700X',
      'Graphics': 'NVIDIA RTX 4080 16GB',
      'RAM': '32GB DDR5-5600',
      'Storage': '1TB NVMe + 1TB HDD',
      'Cooling': 'AIO Liquid Cooler'
    },
    isNew: true,
    isFeatured: true
  },

  // Mobile Phones
  {
    id: 6,
    name: 'iPhone 15 Pro Max - 256GB',
    price: 1199.99,
    category: 'Mobile Phones',
    subcategory: 'iPhones',
    brand: 'Apple',
    image: '/images/iphone-15.jpg',
    rating: 4.8,
    reviews: 445,
    inStock: true,
    stockCount: 67,
    features: ['A17 Pro Chip', 'Pro Camera System', 'Titanium Design', '5G Ready', 'iOS 17'],
    description: 'Latest iPhone 15 Pro Max with titanium design and advanced Pro camera system.',
    specifications: {
      'Display': '6.7" Super Retina XDR',
      'Processor': 'A17 Pro',
      'Storage': '256GB',
      'Camera': '48MP Main + 12MP Ultra Wide',
      'Battery': 'All-day battery life'
    },
    isNew: true,
    isFeatured: true
  },

  // Accessories
  {
    id: 7,
    name: 'Mechanical Gaming Keyboard RGB',
    price: 129.99,
    originalPrice: 159.99,
    category: 'Accessories',
    subcategory: 'Keyboards & Mice',
    brand: 'Corsair',
    image: '/images/gaming-keyboard.jpg',
    rating: 4.7,
    reviews: 312,
    inStock: true,
    stockCount: 156,
    features: ['Mechanical Switches', 'RGB Backlighting', 'Programmable Keys', 'USB-C', 'Gaming Mode'],
    description: 'Premium mechanical gaming keyboard with customizable RGB lighting and programmable macros.',
    specifications: {
      'Switch Type': 'Cherry MX Red',
      'Backlighting': 'Per-key RGB',
      'Connectivity': 'USB-C',
      'Layout': 'Full Size (104 keys)',
      'Polling Rate': '1000Hz'
    },
    discount: 19
  },

  // Networking
  {
    id: 8,
    name: 'WiFi 6E Gaming Router - AX6000',
    price: 349.99,
    category: 'Networking',
    subcategory: 'Routers',
    brand: 'ASUS',
    image: '/images/gaming-router.jpg',
    rating: 4.6,
    reviews: 178,
    inStock: true,
    stockCount: 23,
    features: ['WiFi 6E', 'Gaming Accelerator', 'Mesh Ready', '8 Antennas', 'Mobile App'],
    description: 'High-performance WiFi 6E gaming router with advanced QoS and mesh capabilities.',
    specifications: {
      'Standard': 'WiFi 6E (802.11ax)',
      'Speed': 'Up to 6000 Mbps',
      'Bands': 'Tri-band (2.4GHz + 5GHz + 6GHz)',
      'Ports': '4x Gigabit LAN + 1x WAN',
      'Antennas': '8x External'
    }
  },

  // Software
  {
    id: 9,
    name: 'Windows 11 Pro - Digital License',
    price: 199.99,
    category: 'Software',
    subcategory: 'Operating Systems',
    brand: 'Microsoft',
    image: '/images/windows-11.jpg',
    rating: 4.5,
    reviews: 89,
    inStock: true,
    stockCount: 999,
    features: ['Digital License', 'Instant Delivery', 'Lifetime Updates', 'Business Features', 'Enhanced Security'],
    description: 'Genuine Windows 11 Pro digital license with enhanced business and security features.',
    specifications: {
      'Edition': 'Windows 11 Pro',
      'Architecture': '64-bit',
      'License Type': 'Digital (OEM)',
      'Delivery': 'Instant Email',
      'Support': 'Microsoft Official'
    }
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
