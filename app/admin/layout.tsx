"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Map,
  Settings,
  Menu,
  Shield,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BrandWordmark } from "@/components/brand-wordmark"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AdminProfileDropdown } from "@/components/admin-profile-dropdown"
import { AdminSidebarProfile } from "@/components/admin-sidebar-profile"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const menuItems = [
    { title: "Dasbor", icon: LayoutDashboard, href: "/admin" },
    { title: "Wilayah", icon: Map, href: "/admin/regions" },
    { title: "Atlet", icon: Users, href: "/admin/athletes" },
    { title: "Admin", icon: Shield, href: "/admin/admins" },
    { title: "Pengaturan", icon: Settings, href: "/admin/settings" },
  ]

  if (!isMounted) {
    return null
  }

  const navLinkClass = (href: string) =>
    `flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
      pathname === href || (href === "/admin" && pathname === "/admin")
        ? "bg-accent text-accent-foreground"
        : "text-foreground"
    }`

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r bg-background md:block">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/admin" className="flex items-center gap-2">
            <Image src="/Logo.svg" alt="IKASI JABAR Logo" width={32} height={32} className="h-8 w-8" />
            <BrandWordmark className="text-sm" />
          </Link>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)] px-3 py-4">
          <div className="mb-4 px-4">
            <AdminSidebarProfile />
          </div>
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <Link key={item.title} href={item.href} className={navLinkClass(item.href)}>
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      <div className="flex flex-1 flex-col md:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <div className="flex h-16 items-center border-b px-6">
                <Link href="/admin" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image src="/Logo.svg" alt="IKASI JABAR Logo" width={32} height={32} className="h-8 w-8" />
                  <BrandWordmark className="text-sm" />
                </Link>
              </div>
              <ScrollArea className="h-[calc(100vh-4rem)] px-3 py-4">
                <div className="mb-4 px-4">
                  <AdminSidebarProfile />
                </div>
                <nav className="flex flex-col gap-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={navLinkClass(item.href)}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </ScrollArea>
            </SheetContent>
          </Sheet>

          <div className="w-full flex items-center justify-end gap-2">
            <ThemeToggle />
            <AdminProfileDropdown />
          </div>
        </header>

        <main className="flex-1 min-w-0 w-full p-4 sm:p-6 bg-muted/30">
          <div className="container-wide page-shell">{children}</div>
        </main>
      </div>
    </div>
  )
}
