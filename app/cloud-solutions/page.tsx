"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Server, Lock, ChevronRight, Zap } from "lucide-react"
import Link from "next/link"

export default function CloudSolutions() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-24 bg-[#0a101f] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-2 text-secondary font-semibold mb-4">
                  <ShieldCheck className="w-5 h-5" />
                  <span>SÉCURITÉ & PERFORMANCE</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8">Cloud Privé & Infrastructure Sécurisée</h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
                  Reprenez le contrôle de vos données avec notre infrastructure locale privée ou sécurisez votre
                  environnement cloud existant grâce à notre expertise.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90 font-bold" asChild>
                    <Link href="/consultation">Consulter un expert Cloud</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Pourquoi choisir le Cloud Privé AIBC ?</h2>
                  <p className="text-muted-foreground text-lg">
                    Contrairement aux solutions de cloud public, notre Cloud Privé vous offre une isolation totale et
                    une infrastructure dédiée.
                  </p>
                </div>

                <div className="grid gap-8">
                  {[
                    {
                      title: "Hébergement Local",
                      desc: "Vos données ne quittent jamais le territoire, garantissant souveraineté et conformité.",
                      icon: Server,
                    },
                    {
                      title: "Isolation Totale",
                      desc: "Ressources dédiées pour éviter les baisses de performance dues aux 'voisins bruyants'.",
                      icon: Lock,
                    },
                    {
                      title: "Sécurité de Niveau Bancaire",
                      desc: "Chiffrement de bout en bout et surveillance 24/7 par nos experts SOC.",
                      icon: ShieldCheck,
                    },
                  ].map((service) => (
                    <div key={service.title} className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <service.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-background">
                  <Image
                    src="https://storage.googleapis.com/kms-au.appspot.com/sites/toim/assets/270ad9bd-2faa-467f-919d-7023f0d76b4a/Group%2012281.svg"
                    alt="Data Center Server"
                    width={800}
                    height={1000}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Security Services */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Sécurisation du Cloud Public</h2>
              <p className="text-muted-foreground">
                Vous utilisez déjà AWS, Azure ou Google Cloud ? Nous vous aidons à les rendre impénétrables.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Audit de Sécurité Cloud",
                "Gestion des Identités (IAM)",
                "Conformité RGPD & Locale",
                "Gestion des Vulnérabilités",
                "Firewall & WAF Avancé",
                "Backup & Disaster Recovery",
              ].map((item) => (
                <div
                  key={item}
                  className="p-6 rounded-xl bg-background border flex items-center gap-4 hover:border-primary transition-colors"
                >
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white">Prêt à sécuriser votre infrastructure ?</h2>
                <p className="text-xl text-primary-foreground/80">
                  Découvrez comment AIBC peut transformer votre cloud en un avantage stratégique imbattable.
                </p>
                <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
                  <Link href="/consultation">
                    Demandez une consultation gratuite <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
