import { cn } from "@/lib/utils"

type ContainerVariant = "default" | "wide" | "narrow" | "2xl"

const variantClass: Record<ContainerVariant, string> = {
  default: "container",
  wide: "container-wide",
  narrow: "container-narrow",
  "2xl": "container-2xl",
}

interface PageContainerProps {
  children: React.ReactNode
  className?: string
  variant?: ContainerVariant
  as?: "div" | "section" | "main"
}

export function PageContainer({
  children,
  className,
  variant = "default",
  as: Component = "div",
}: PageContainerProps) {
  return (
    <Component className={cn(variantClass[variant], "page-shell", className)}>
      {children}
    </Component>
  )
}
