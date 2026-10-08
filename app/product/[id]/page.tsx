import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductPageClient from '@/components/ProductPageClient'
import { products } from '@/lib/products'

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id)

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-44 md:pt-48 pb-16 px-4">
        <ProductPageClient productId={productId} />
      </main>

      <Footer />
    </div>
  )
}
