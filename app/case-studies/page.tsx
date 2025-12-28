"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

const caseStudies = [
  {
    title: "Migration Cloud Privé pour une Institution Financière",
    client: "Confidential Bank",
    challenge: "Besoin de souveraineté totale sur les données clients tout en modernisant l'accès aux services.",
    result: "Souveraineté 100% assurée, latence réduite de 30% et conformité totale avec les régulations locales.",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Cloud Privé", "Finance", "Souveraineté"],
  },
  {
    title: "Système de Surveillance IA par Computer Vision",
    client: "Site Industriel Majeur",
    challenge: "Sécurisation d'un périmètre de 50 hectares avec détection automatique d'anomalies.",
    result: "Détection d'intrusion réduite à < 5 secondes, réduction des fausses alertes de 85%.",
    image: "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?auto=format&fit=crop&w=1200&q=80",
    tags: ["AI", "Computer Vision", "Sécurité"],
  },
  {
    title: "Automatisation End-to-End de la Chaîne Logistique",
    client: "Distributeur Régional",
    challenge: "Erreurs de saisie manuelles et manque de visibilité en temps réel sur les stocks.",
    result: "Zéro erreur de saisie, visibilité 100% en temps réel, gain de productivité de 40%.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Web & Cloud", "Logistique", "Automation"],
  },
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-24 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Études de Cas Avancées</h1>
            <p className="text-xl text-muted-foreground">
              Découvrez comment AIBC accompagne ses clients dans leurs défis technologiques les plus complexes.
            </p>
          </div>

          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 space-y-8">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{study.title}</h2>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" /> Le Défi
                      </h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent" /> Le Résultat
                      </h4>
                      <p className="text-muted-foreground">{study.result}</p>
                    </div>
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/consultation">
                      Obtenir des résultats similaires <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex-1 w-full">
                  <Card className="overflow-hidden border-none shadow-2xl rounded-3xl">
                    <div className="relative aspect-video">
                      <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-sm font-medium opacity-80 mb-1">Client</div>
                        <div className="text-xl font-bold">{study.client}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
