"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { HeaderMobile } from "@/components/header-mobile"
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { BrandWordmark } from "@/components/brand-wordmark"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Atlet", href: "/athletes" },
  { name: "Wilayah", href: "/regions" },
  { name: "Tentang", href: "/about" },
  { name: "Kontak", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()

  const navigationItems = useMemo(() => {
    return navigation.map((item) => ({
      ...item,
      isActive: pathname === item.href,
    }))
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center gap-2 sm:gap-4 min-w-0">
        <HeaderMobile navigation={navigation} />

        <div className="mr-auto hidden min-w-0 md:flex md:items-center md:gap-6">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/Logo.svg"
              alt="IKASI JABAR Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <BrandWordmark className="hidden text-sm leading-tight lg:inline-block" />
          </Link>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium xl:gap-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`whitespace-nowrap transition-colors hover:text-foreground/80 ${
                  item.isActive
                    ? "font-semibold text-foreground border-b-2 border-primary pb-0.5"
                    : "text-foreground/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <Link href="/" className="flex min-w-0 items-center gap-2 md:hidden">
          <Image
            src="/Logo.svg"
            alt="IKASI JABAR Logo"
            width={28}
            height={28}
            className="h-7 w-7 shrink-0"
          />
          <BrandWordmark className="truncate text-sm leading-tight" />
        </Link>

        <nav className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="px-2 sm:px-4">
            <Link href="/login">
              <span className="hidden sm:inline">Masuk Admin</span>
              <span className="sm:hidden">Admin</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
