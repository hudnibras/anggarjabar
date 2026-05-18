import { PublicLayout } from "@/components/public-layout"
import { Skeleton } from "@/components/ui/skeleton"

export default function PrivacyLoading() {
  return (
    <PublicLayout>
      <div className="container-narrow py-6 sm:py-8 page-shell space-y-6">
        <Skeleton className="h-9 w-64" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    </PublicLayout>
  )
}
