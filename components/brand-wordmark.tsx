import { cn } from "@/lib/utils"

interface BrandWordmarkProps {
  className?: string
  suffixClassName?: string
}

export function BrandWordmark({ className, suffixClassName }: BrandWordmarkProps) {
  return (
    <span className={cn("font-bold", className)}>
      IKASI
      <span className={cn("brand-gradient bg-clip-text text-transparent", suffixClassName)}>
        JABAR
      </span>
    </span>
  )
}
