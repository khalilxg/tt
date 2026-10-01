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
    title: "Préparer une migration cloud pour les services financiers",
    client: "Scénario illustratif : services financiers",
    challenge: "Des applications historiques et des données sensibles rendent les décisions d'hébergement, de reprise et de contrôle des accès particulièrement importantes.",
    result: "Définir une architecture cible, documenter les dépendances et convenir d'indicateurs de validation avant de planifier la migration.",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Cloud Privé", "Finance", "Souveraineté"],
  },
  {
    title: "Étudier la vision par ordinateur sur un site industriel",
    client: "Scénario illustratif : site industriel",
    challenge: "Les équipes doivent repérer des événements prioritaires dans des zones étendues sans être submergées par des alertes peu pertinentes.",
    result: "Valider les conditions de captation, tester des événements représentatifs et définir le traitement humain des alertes avant un déploiement élargi.",
    image: "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?auto=format&fit=crop&w=1200&q=80",
    tags: ["AI", "Computer Vision", "Sécurité"],
  },
  {
    title: "Améliorer la visibilité d'une chaîne logistique",
    client: "Scénario illustratif : distribution",
    challenge: "Les mises à jour manuelles, les outils dispersés et les écarts de stock compliquent le suivi des opérations.",
    result: "Cartographier les flux d'information, automatiser les échanges répétitifs et mesurer la qualité des données avec les équipes opérationnelles.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Scénarios de transformation</h1>
            <p className="text-xl text-muted-foreground">
              Ces scénarios illustratifs présentent des enjeux fréquents en transformation numérique. Ils ne constituent
              pas des références client ni des résultats mesurés : chaque mission est cadrée selon son contexte, ses
              contraintes et ses propres indicateurs de réussite.
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
                        <CheckCircle2 className="w-5 h-5 text-accent" /> Une cible de travail
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

          <section className="mt-24 border-t border-primary/20 pt-16">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Au-delà de la technologie</p>
                <h2 className="text-3xl font-bold">Les résultats commencent par les bonnes questions</h2>
              </div>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Une architecture performante n'a de valeur que si elle répond à une contrainte opérationnelle claire.
                  Avant de recommander une solution, nous cherchons à comprendre les utilisateurs concernés, les
                  systèmes à connecter, les exigences de sécurité et le coût du statu quo.
                </p>
                <p>
                  Pour évaluer un projet similaire au vôtre, nous pouvons commencer par un échange de cadrage :
                  périmètre, dépendances, risques, options possibles et critères de réussite. Vous repartez avec une
                  lecture plus structurée des prochaines décisions, même si le projet n'est pas encore défini dans
                  tous ses détails.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/consultation">Échanger sur votre projet <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
