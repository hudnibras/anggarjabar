import { PublicLayout } from "@/components/public-layout"
import { ListPageSkeleton } from "@/components/list-page-skeleton"

export default function RegionsLoading() {
  return (
    <PublicLayout>
      <div className="container py-6 sm:py-8 page-shell">
        <ListPageSkeleton variant="list" count={6} />
      </div>
    </PublicLayout>
  )
}
