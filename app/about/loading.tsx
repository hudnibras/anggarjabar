import { PublicLayout } from "@/components/public-layout"
import { Skeleton } from "@/components/ui/skeleton"

export default function AboutLoading() {
  return (
    <PublicLayout>
      <section className="hero-section min-h-[280px]">
        <div className="hero-section-overlay" />
        <div className="container relative z-10 py-16 flex flex-col items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-full bg-primary-foreground/20" />
          <Skeleton className="h-10 w-64 bg-primary-foreground/20" />
          <Skeleton className="h-5 w-96 max-w-full bg-primary-foreground/20" />
        </div>
      </section>
      <div className="container py-12 space-y-6">
        <Skeleton className="h-10 w-full max-w-md" />
        <Skeleton className="h-64 w-full" />
      </div>
    </PublicLayout>
  )
}
