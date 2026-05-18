"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { BrandWordmark } from "@/components/brand-wordmark"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavigationItem {
  name: string
  href: string
}

interface HeaderMobileProps {
  navigation: NavigationItem[]
}

export function HeaderMobile({ navigation }: HeaderMobileProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = useMemo(() => {
    return navigation.map((item) => {
      const isActive = pathname === item.href
      return {
        ...item,
        isActive
      }
    })
  }, [navigation, pathname])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5 transition-transform duration-200" />
          <span className="sr-only">Buka menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle asChild>
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <Image
                src="/Logo.svg"
                alt="IKASI JABAR Logo"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <BrandWordmark className="text-sm leading-tight" />
            </Link>
          </SheetTitle>
          <div className="mt-6 flex flex-col space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                  item.isActive 
                    ? "bg-accent text-accent-foreground font-semibold" 
                    : "text-foreground/70"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Tema</span>
              <ThemeToggle />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
