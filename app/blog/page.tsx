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
      "Découvrez comment les algorithmes de computer vision transforment la sécurité des infrastructures critiques.",
    image: "cvv.png",
    date: "15 Mai 2025",
    readTime: "8 min",
    category: "AI & Security",
  },
  {
    title: "Pourquoi le Cloud Privé devient un standard pour les banques",
    excerpt: "Analyse des enjeux de souveraineté numérique et de conformité pour le secteur financier.",
    image: "https://cdn-icons-png.flaticon.com/512/458/458865.png",
    date: "10 Mai 2025",
    readTime: "12 min",
    category: "Cloud",
  },
  {
    title: "Automatisation des processus RH : Un gain de productivité mesurable",
    excerpt: "Comment nos solutions web personnalisées ont réduit les erreurs administratives de 45% chez nos clients.",
    image: "https://www.redhat.com/rhdc/managed-files/ma-innovate-with-automation-2528172O_image2.png",
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
            <Link href="/blog/featured-post" className="group">
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
                    FEATURED
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                    La révolution de l'IA générative dans le cloud privé
                  </h2>
                  <p className="text-gray-300 line-clamp-2">
                    Comment intégrer les LLM au sein de votre infrastructure locale sans compromettre la sécurité de vos
                    données sensibles.
                  </p>
                </div>
              </div>
            </Link>
          </section>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
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
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
