"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Eye, MessageSquare, Zap, ArrowRight, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function AISolutions() {
  const sections = [
    {
      title: "Surveillance Intelligente par Vision par Ordinateur",
      description: "Systèmes de surveillance de pointe utilisant le Deep Learning pour la détection en temps réel.",
      icon: Eye,
      image:
        "https://images.prismic.io/codiste-website/658bc1f0531ac2845a26f11d_InnovationsinReal-TimeObjectDetectionSystems.webp?auto=format,compress",
      features: [
        "Détection d'intrusion périmétrique",
        "Reconnaissance faciale sécurisée",
        "Analyse comportementale",
        "Alerte automatique en temps réel",
      ],
    },
    {
      title: "Chatbots de Nouvelle Génération",
      description: "Agents conversationnels intelligents pour l'assistance client et la surveillance opérationnelle.",
      icon: MessageSquare,
      image:
        "https://alhena.ai/blog/content/images/size/w1200/2025/05/Cover-Image.jpg",
      features: [
        "Assistance 24/7 multilingue",
        "Intégration CRM & ERP",
        "Apprentissage continu",
      ],
    },
    {
      title: "Analyse Prédictive & Data Stratégique",
      description: "Transformez vos données brutes en insights actionnables pour devancer la concurrence.",
      icon: BarChart3,
      image:
        "https://www.geeky-gadgets.com/wp-content/uploads/2024/07/NEW-Excel-Formulas-2024.webp",
      features: [
        "Prévision des ventes",
        "Optimisation des stocks",
        "Segmentation client avancée",
        "Maintenance prédictive",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 inline-block">
                AI & Data Solutions
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                L'Intelligence Artificielle au Service de votre Performance
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                AIBC déploie des solutions d'IA de bout en bout, de la stratégie à l'implémentation, pour automatiser
                vos processus et sécuriser vos actifs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/consultation">Démarrer un projet</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-primary/50 text-primary hover:bg-primary/10"
                >
                  <Link href="#solutions">Voir nos solutions</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Propositions */}
        <section id="solutions" className="py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-32">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 space-y-8">
                    <div className="p-3 rounded-2xl bg-primary/10 w-fit">
                      <section.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">{section.title}</h2>
                    <p className="text-lg text-muted-foreground">{section.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-accent" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                    >
                      <Link href="/consultation">
                        En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex-1 relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Notre approche End-to-End</h2>
              <p className="text-muted-foreground">
                Une méthodologie rigoureuse pour garantir le succès de votre transformation IA.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Audit & Stratégie",
                  desc: "Évaluation de vos données et définition des objectifs business.",
                },
                {
                  step: "02",
                  title: "POC & Design",
                  desc: "Création d'une preuve de concept et conception de l'architecture.",
                },
                { step: "03", title: "Développement", desc: "Entraînement des modèles et intégration logicielle." },
                { step: "04", title: "Déploiement", desc: "Mise en production sécurisée et maintenance continue." },
              ].map((item) => (
                <Card key={item.step} className="bg-card border-none shadow-md">
                  <CardHeader>
                    <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
