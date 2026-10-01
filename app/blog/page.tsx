"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ChevronRight } from "lucide-react"

const blogPosts = [
  {
    title: "L'impact de l'IA sur la surveillance périmétrique en 2025",
    excerpt:
      "La vision par ordinateur peut aider à repérer des événements inhabituels, mais la qualité dépend du contexte, des conditions de prise de vue et de la façon dont les alertes sont traitées. Voici les questions à cadrer avant un pilote.",
    image: "/cvv.png",
    date: "15 Mai 2025",
    readTime: "8 min",
    category: "AI & Security",
  },
  {
    title: "Pourquoi le Cloud Privé devient un standard pour les banques",
    excerpt: "Souveraineté, continuité et maîtrise des accès sont des critères importants, mais ils ne suffisent pas à eux seuls à choisir une architecture. Cet article propose une grille de lecture pour comparer les options.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    date: "10 Mai 2025",
    readTime: "12 min",
    category: "Cloud",
  },
  {
    title: "Automatisation des processus RH : Un gain de productivité mesurable",
    excerpt: "L'automatisation RH fonctionne mieux lorsqu'elle retire des tâches répétitives sans rendre les exceptions plus difficiles à gérer. Nous détaillons les étapes pour repérer un processus adapté et mesurer son évolution.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    date: "02 Mai 2025",
    readTime: "6 min",
    category: "Automation",
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-24 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-muted-foreground">
              Expertise, tendances et retours d'expérience sur la transformation digitale sécurisée.
            </p>
          </div>

          {/* Featured Post */}
          <section className="mb-24">
            <Link href="#articles" className="group">
              <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                  alt="Featured Post"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-2xl">
                  <span className="px-3 py-1 bg-primary rounded-full text-xs font-bold mb-4 inline-block">
                    À LA UNE
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                    La révolution de l'IA générative dans le cloud privé
                  </h2>
                  <p className="text-gray-300 line-clamp-2">
                    Comment évaluer un assistant génératif hébergé dans un environnement contrôlé : cas d'usage, qualité
                    des sources, droits d'accès, validation humaine et critères d'un pilote utile.
                  </p>
                </div>
              </div>
            </Link>
          </section>

          {/* Grid */}
          <div id="articles" className="grid scroll-mt-28 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-xl transition-shadow group overflow-hidden border-primary/5">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="flex-1">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardContent className="px-0 pt-4">
                      <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    </CardContent>
                  </CardHeader>
                  <div className="p-6 pt-0 mt-auto">
                    <Button variant="link" className="px-0 text-primary group-hover:gap-2 transition-all">
                      Lire l'article <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <section className="mt-24 grid items-center gap-12 border-t border-primary/20 pt-16 lg:grid-cols-2">
            <div className="relative min-h-[300px] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
                alt="Professionnels étudiant des informations sur un écran"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-5">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Des décisions éclairées</p>
              <h2 className="text-3xl font-bold">Des repères concrets pour vos prochains choix numériques</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Nos sujets couvrent les questions qui reviennent au moment de lancer ou de faire évoluer un projet :
                comment réduire les risques d'intégration, quelles données préparer, comment définir un pilote, et
                comment prévoir l'exploitation une fois la solution utilisée au quotidien.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Vous avez une question liée à votre organisation ? Partagez votre contexte avec notre équipe pour
                transformer une piste technologique en prochaines étapes réalistes.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/consultation">Discuter d'un sujet <ChevronRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
