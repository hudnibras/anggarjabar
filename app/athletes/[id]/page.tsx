import { PublicLayout } from "@/components/public-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, MapPin, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { calculateAge, getAthleteStatusLabel, getCategoryLabel } from "@/lib/athlete-utils"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function AthleteProfilePage({ params }: PageProps) {
  const { id } = await params

  const athlete = await prisma.athlete.findUnique({
    where: { id },
    include: { region: true },
  })

  if (!athlete) {
    notFound()
  }

  const age = calculateAge(athlete.birthDate)
  const imageSrc = athlete.image
    ? `${athlete.image}?f_auto,q_100`
    : `/placeholder.svg?height=400&width=300&text=${encodeURIComponent(athlete.name)}`

  return (
    <PublicLayout>
      <div className="container py-6 sm:py-8 lg:py-10 page-shell">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/athletes">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Kembali ke Daftar Atlet
          </Link>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1 overflow-hidden">
            <div className="relative h-80 w-full">
              <Image
                src={imageSrc}
                alt={athlete.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold mb-1">{athlete.name}</h1>
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{athlete.region.name}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {getCategoryLabel(athlete.category)}
                  </Badge>
                  <Badge variant="outline">{athlete.gender}</Badge>
                  <Badge variant={athlete.status === "ACTIVE" ? "default" : "secondary"}>
                    {getAthleteStatusLabel(athlete.status)}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 w-full gap-2 text-sm">
                  <div className="flex flex-col items-center p-3 bg-muted rounded-md">
                    <span className="text-lg font-bold">{age}</span>
                    <span className="text-xs text-muted-foreground">Usia</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-muted rounded-md">
                    <Calendar className="h-4 w-4 text-muted-foreground mb-1" />
                    <span className="text-xs text-muted-foreground">
                      {athlete.birthDate.toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Profil Atlet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Informasi
                </h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Nama</dt>
                    <dd className="font-medium">{athlete.name}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Wilayah</dt>
                    <dd className="font-medium">{athlete.region.name}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Kategori</dt>
                    <dd className="font-medium">{getCategoryLabel(athlete.category)}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Status</dt>
                    <dd className="font-medium">{getAthleteStatusLabel(athlete.status)}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Terdaftar sejak</dt>
                    <dd className="font-medium">
                      {athlete.createdAt.toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </dd>
                  </div>
                </dl>
              </div>
              <p className="text-sm text-muted-foreground">
                Data atlet ini dikelola melalui sistem IKASI JABAR. Untuk koreksi data, silakan hubungi administrator wilayah terkait.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PublicLayout>
  )
}
