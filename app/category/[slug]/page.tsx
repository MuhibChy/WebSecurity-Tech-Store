import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CategoryPageClient from '@/components/CategoryPageClient'

// Generate static params for all categories
export async function generateStaticParams() {
  const categoryIds = [
    'security-systems',
    'laptops', 
    'desktops',
    'gaming-pcs',
    'mobile-phones',
    'accessories',
    'networking',
    'software'
  ]
  
  return categoryIds.map((slug) => ({
    slug: slug,
  }))
}

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-16 px-4">
        <CategoryPageClient categorySlug={params.slug} />
      </main>

      <Footer />
    </div>
  )
}
