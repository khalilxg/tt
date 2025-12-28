"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Laptop, Smartphone, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const statsData = [
  { name: "Performance", value: 98 },
  { name: "Sécurité", value: 100 },
  { name: "Évolutivité", value: 95 },
  { name: "Satisfaction", value: 99 },
]

export default function CustomSoftware() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-background via-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Solutions Web & Cloud <span className="text-primary">Sur Mesure</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mt-6">
                    Conception et déploiement de plateformes performantes, accessibles et évolutives pour propulser
                    votre business vers de nouveaux sommets.
                  </p>
                </motion.div>
                <div className="flex gap-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/consultation">Démarrer un projet</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative aspect-square w-full max-w-[500px]">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Code on screen"
                  width={1000}
                  height={1000}
                  className="rounded-3xl shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Real World Projects / Stats */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <TrendingUp className="text-accent" /> Performance & Impact
                </h2>
                <p className="text-muted-foreground text-lg">
                  Nos solutions ne sont pas seulement esthétiques, elles sont construites pour performer. Nous suivons
                  des métriques rigoureuses pour garantir que votre investissement génère une valeur réelle.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Projets livrés", val: "150+" },
                    { label: "Clients satisfaits", val: "99%" },
                    { label: "Disponibilité", val: "99.9%" },
                    { label: "Équipe experte", val: "40+" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl bg-background border shadow-sm">
                      <div className="text-3xl font-bold text-primary">{stat.val}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-card border shadow-xl">
                <CardHeader>
                  <CardTitle className="text-primary">Indice de Qualité Logicielle</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ChartContainer
                    config={{
                      value: {
                        label: "Indice",
                        color: "hsl(var(--primary))",
                      },
                    }}
                    className="h-full w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={statsData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                          {statsData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={index % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Nos Domaines d'Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Développement Web",
                  desc: "Sites vitrines, e-commerce et applications web complexes (React, Next.js, Node.js).",
                  icon: Globe,
                },
                {
                  title: "Applications Mobiles",
                  desc: "Solutions natives et hybrides pour iOS et Android (React Native, Flutter).",
                  icon: Smartphone,
                },
                {
                  title: "Logiciels de Gestion",
                  desc: "ERP, CRM et outils métier sur mesure pour automatiser vos workflows.",
                  icon: Laptop,
                },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-shadow border-primary/10">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* End to End Process */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Comment obtenir votre solution ?</h2>
              <div className="space-y-12">
                {[
                  {
                    title: "Consultation Initiale",
                    desc: "Nous discutons de vos besoins, de vos défis et de vos objectifs business.",
                  },
                  {
                    title: "Proposition & Devis",
                    desc: "Une proposition détaillée avec architecture, budget et calendrier prévisionnel.",
                  },
                  {
                    title: "Cycle de Développement Agile",
                    desc: "Développement itératif avec des démonstrations régulières et feedback client.",
                  },
                  {
                    title: "Déploiement & Support",
                    desc: "Mise en ligne, formation des équipes et support technique continu.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="opacity-80 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16 text-center">
                <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
                  <Link href="/consultation">Parlez à un expert aujourd'hui</Link>
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
