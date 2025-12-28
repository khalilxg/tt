import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image src="/aibc-logo.png" alt="AIBC Logo" width={100} height={40} className="h-8 w-auto" />
            <p className="text-sm text-muted-foreground">
              Accompagner votre transformation digitale avec sécurité et innovation.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/aibcflow"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:contact@aibc.tn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-solutions" className="text-sm text-muted-foreground hover:text-primary">
                  AI & Data
                </Link>
              </li>
              <li>
                <Link href="/custom-software" className="text-sm text-muted-foreground hover:text-primary">
                  Solutions Web & Cloud
                </Link>
              </li>
              <li>
                <Link href="/cloud-solutions" className="text-sm text-muted-foreground hover:text-primary">
                  Cloud Privé
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-sm text-muted-foreground hover:text-primary">
                  Consultation Digitale
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Tunis, Tunisie</li>
              <li>
                <Link href="mailto:contact@aibc.tn" className="text-sm text-muted-foreground hover:text-primary">
                  contact@aibc.tn
                </Link>
              </li>
              <li>
                <Link href="tel:+21612345678" className="text-sm text-muted-foreground hover:text-primary">
                  +216 12 345 678
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AIBC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
