import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export function DetailPageSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-9 w-40" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 overflow-hidden">
          <Skeleton className="h-80 w-full rounded-none" />
          <div className="p-6 space-y-3">
            <Skeleton className="h-7 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-1/2 mx-auto" />
            <Skeleton className="h-10 w-full" />
          </div>
        </Card>
        <Card className="md:col-span-2 p-6 space-y-4">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-32 w-full" />
        </Card>
      </div>
    </div>
  )
}
