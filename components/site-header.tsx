"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/aibc-logo.png" alt="AIBC Logo" width={100} height={40} className="h-10 w-auto" />
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/10 p-6 no-underline outline-none focus:shadow-md border border-primary/20"
                          href="/ai-solutions"
                        >
                          <Brain className="h-8 w-8 text-primary mb-2" />
                          <div className="mb-2 mt-4 text-lg font-medium">AI & Data</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Analyse avancée et automatisation intelligente.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/custom-software"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                      >
                        <div className="text-sm font-medium leading-none">Solutions Web & Cloud</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Conception et déploiement sur mesure.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/cloud-solutions"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/10 hover:text-secondary focus:bg-secondary/10 focus:text-secondary"
                      >
                        <div className="text-sm font-medium leading-none">Cloud Privé</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Hébergement hautement sécurisé et local.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/consultation"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                      >
                        <div className="text-sm font-medium leading-none">Consultation Digitale</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Conseils stratégiques sur mesure.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/case-studies" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent">
                    Case Studies
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden sm:flex bg-transparent">
              <Link href="mailto:contact@aibc.tn">Contact Us</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/consultation">Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
