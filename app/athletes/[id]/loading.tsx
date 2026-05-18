import { PublicLayout } from "@/components/public-layout"
import { DetailPageSkeleton } from "@/components/detail-page-skeleton"

export default function AthleteDetailLoading() {
  return (
    <PublicLayout>
      <div className="container py-6 sm:py-8 page-shell">
        <DetailPageSkeleton />
      </div>
    </PublicLayout>
  )
}
