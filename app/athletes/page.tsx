import { PublicLayout } from "@/components/public-layout"
import { prisma } from "@/lib/prisma"
import { AthletesClient } from "@/components/athletes-client"
import { PageHeader } from "@/components/page-header"

interface Athlete {
  id: string
  name: string
  region: string
  category: string
  status: string
  image: string
}

interface AthleteData {
  id: string
  name: string
  region: {
    name: string
  }
  category: string
  status: string
}

export default async function AthletesPage() {
  // Fetch athletes data on the server with error handling
  let athletesData: any[] = []

  try {
    athletesData = await prisma.athlete.findMany({
      include: {
        region: true,
      },
      orderBy: {
        name: "asc",
      },
    })
  } catch (error) {
    console.error('Database connection error:', error)
    // Use empty array if database is not available
    athletesData = []
  }

  // Transform data for client component
  const transformedAthletes: Athlete[] = athletesData.map((athlete) => ({
    id: athlete.id,
    name: athlete.name,
    region: athlete.region.name,
    category: athlete.category,
    status: athlete.status,
    image: athlete.image ? `${athlete.image}?f_auto,q_100` : "/placeholder.svg?height=400&width=400",
  }))

  // Get unique regions and categories for filters
  const uniqueRegions = [...new Set(athletesData.map(a => a.region.name))]
  const uniqueCategories = [...new Set(athletesData.map(a => a.category))]

  return (
    <PublicLayout>
      <div className="container py-6 sm:py-8 lg:py-10 page-shell">
        <PageHeader
          title="Atlet IKASI JABAR"
          description="Daftar atlet terdaftar di sistem IKASI JABAR"
        />

        <AthletesClient 
          athletes={transformedAthletes}
          regions={uniqueRegions}
          categories={uniqueCategories}
        />
      </div>
    </PublicLayout>
  )
}