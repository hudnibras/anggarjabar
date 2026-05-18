import Link from "next/link"
import Image from "next/image"
import { BrandWordmark } from "@/components/brand-wordmark"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted w-full">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Image
                src="/Logo.svg"
                alt="IKASI JABAR Logo"
                width={120}
                height={40}
                className="h-8 w-auto shrink-0"
              />
              <h3>
                <BrandWordmark />
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Sistem Manajemen Kompetisi Anggar Regional Jawa Barat
            </p>
            <p className="text-xs text-muted-foreground">
              Dikembangkan oleh FnCorporation
            </p>
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold mb-3">Informasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-3">Kontak</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:info@ikasijabar.org"
                  className="flex items-start gap-2 break-all hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 mt-0.5" />
                  info@ikasijabar.org
                </a>
              </li>
              <li>
                <a
                  href="tel:+62221234567"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  (022) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} IKASI JABAR. Hak cipta dilindungi.
            </p>
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row md:text-right">
              <div>
                <p className="font-medium">Dikembangkan oleh FnCorporation</p>
                <p className="text-xs">Developer: A.M. Hud Nibras Fadhlullah</p>
              </div>
              <Link href="/privacy" className="hover:text-primary transition-colors text-xs whitespace-nowrap">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
