import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full max-w-[100vw] flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 min-w-0 w-full">{children}</main>
      <Footer />
    </div>
  )
}
