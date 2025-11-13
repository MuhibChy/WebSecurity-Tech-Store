import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductPageClient from '@/components/ProductPageClient'

// Generate static params for all products
export async function generateStaticParams() {
  const productIds = [1, 2, 3, 4, 5, 6, 7, 8, 9] // All product IDs
  
  return productIds.map((id) => ({
    id: id.toString(),
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
      
      <main className="pt-32 pb-16 px-4">
        <ProductPageClient productId={productId} />
      </main>

      <Footer />
    </div>
  )
}
