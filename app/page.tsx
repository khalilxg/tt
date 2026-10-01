"use client"

import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  ChevronDown,
  ArrowUpRight,
  Brain,
  Cloud,
  Code,
  LineChart,
  Zap,
  Mail,
  MessageSquare,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import "./styles/animations.css"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      title: "AI & Data",
      description: "Analyse avancée et automatisation intelligente pour des décisions rapides.",
      features: ["Machine Learning", "Computer Vision", "Chatbots intelligents"],
      icon: Brain,
      href: "/ai-solutions",
    },
    {
      title: "Cloud Privé",
      description: "Hébergement sécurisé garantissant confidentialité et contrôle total.",
      features: ["Infrastructure locale", "Sécurité renforcée", "Conformité totale"],
      icon: Cloud,
      href: "/cloud-solutions",
    },
    {
      title: "Solutions Web & Cloud",
      description: "Conception sur mesure de plateformes évolutives et performantes.",
      features: ["Apps sur mesure", "Architecture Cloud", "Performance maximale"],
      icon: Code,
      href: "/custom-software",
    },
    {
      title: "Consultation Digitale",
      description: "Conseils pour aligner vos objectifs avec les meilleures technologies.",
      icon: MessageSquare,
      href: "/consultation",
      features: ["Audit technologique", "Stratégie IT", "Suivi personnalisé"],
    },
    {
      title: "Automatisation",
      description: "Workflows automatisés pour augmenter la productivité.",
      features: ["RPA", "Workflows", "Réduction d'erreurs"],
      icon: Zap,
      href: "/custom-software",
    },
    {
      title: "Analyse Stratégique",
      description: "Exploitation stratégique de vos données business.",
      features: ["Data Analytics", "BI", "Prédictions"],
      icon: LineChart,
      href: "/ai-solutions",
    },
  ]

  const industries = [
    {
      name: "Services financiers",
      description: "Des plateformes et flux de données conçus autour de la confidentialité, de la traçabilité et de la continuité des services.",
      icon: () => <Cloud className="h-6 w-6" />,
    },
    {
      name: "Santé",
      description: "Des outils numériques qui soutiennent les équipes, protègent les informations sensibles et facilitent la circulation des données utiles.",
      icon: () => <Brain className="h-6 w-6" />,
    },
    {
      name: "E-commerce",
      description: "Des parcours d'achat et outils de gestion capables de suivre les opérations, les stocks et l'évolution de la demande.",
      icon: () => <Code className="h-6 w-6" />,
    },
  ]

  const caseStudies = [
    {
      title: "Cadrer un service client augmenté par l'IA",
      description:
        "Scénario de projet : structurer les connaissances, automatiser les demandes récurrentes et prévoir un transfert clair vers un conseiller lorsque la situation l'exige.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      tags: ["IA", "Finance", "Relation client"],
      href: "/case-studies",
    },
    {
      title: "Préparer une migration vers un cloud privé",
      description:
        "Scénario de projet : cartographier les dépendances, définir les exigences de résidence et de reprise, puis planifier une transition progressive des services prioritaires.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      tags: ["Cloud privé", "Infrastructure", "Continuité"],
      href: "/case-studies",
    },
  ]

  return (
    <div ref={containerRef}>
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
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
                            Conseils pour aligner vos objectifs avec les meilleures technologies.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/case-studies" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Case Studies
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" className="hidden sm:flex bg-transparent">
                <Link href="mailto:contact@aibc.tn">Contactez‑nous</Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/consultation">Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary via-background to-black">
        <motion.div style={{ opacity, scale }} className="container mx-auto px-4 pt-32 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Transformation Digitale Sécurisée & Innovante
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              AIBC vous accompagne avec une gamme complète de services hautement sécurisés : Cloud Privé, IA et
              Automatisation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
                <Link href="/ai-solutions">
                  Découvrez nos services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/case-studies">Consulter nos études de cas</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Technology Team Collaboration"
              width={1200}
              height={600}
              priority
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <ChevronDown className="w-6 h-6 text-white animate-bounce mx-auto" />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gradient-to-b from-background via-background/50 to-[#220b11]/50 relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-center text-lg font-medium text-muted-foreground mb-8 px-4">
            Des enjeux technologiques concrets, dans des secteurs exigeants
          </h2>
          <div className="container mx-auto flex flex-wrap justify-center gap-x-12 gap-y-4 px-4 text-sm font-semibold uppercase tracking-wide text-primary">
            {["Finance", "Industrie", "Santé", "Commerce", "Services"].map((sector) => (
              <span key={sector}>{sector}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-background via-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos services clés</h2>
            <p className="text-lg text-muted-foreground">
              Des solutions sur mesure pour aligner vos objectifs business avec les meilleures technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-lg bg-card hover:bg-card/80 transition-all border border-border/50 hover:border-primary/50 shadow-sm"
              >
                <div className="mb-6 p-3 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Zap className="w-4 h-4 mr-2 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="group-hover:translate-x-2 transition-transform" asChild>
                  <Link href={service.href}>
                    En savoir plus
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-b from-background via-[#220b11] to-[#16090c] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/screenshot-202025-02-18-20at-209.png')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white bg-clip-text">Secteurs d'activité que nous accompagnons</h2>
            <p className="text-lg text-gray-400">Nous apportons des solutions innovantes, adaptées à chaque secteur.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-[#0a101f]/40 border border-gray-800/50 backdrop-blur-sm hover:bg-[#0a101f]/60 transition-all duration-300">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-full bg-[#1a1f2e] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-300" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {industry.icon()}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-b from-[#16090c] via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exemples de projets</h2>
            <p className="text-lg text-muted-foreground">Des scénarios illustratifs pour montrer comment nous abordons des enjeux métier et technologiques.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-64 mb-6">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {study.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{study.description}</p>
                      <Button variant="ghost" className="group-hover:translate-x-2 transition-transform" asChild>
                        <Link href={study.href}>
                          Lire les études de cas
                          <ArrowUpRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background via-[#220b11] to-background">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Une collaboration lisible</p>
            <h2 className="text-3xl font-bold md:text-4xl">Un partenaire qui reste responsable après la mise en ligne</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Un projet numérique ne se résume pas à livrer du code. Il doit s'intégrer aux habitudes de vos équipes,
              protéger les données qu'il manipule et rester compréhensible à mesure que votre activité évolue. Nous
              cadrons ces sujets dès le départ, puis nous gardons un dialogue régulier avec vos interlocuteurs métier et IT.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Des objectifs, responsabilités et critères d'acceptation définis ensemble.</li>
              <li>• Des démonstrations régulières pour arbitrer tôt et éviter les mauvaises surprises.</li>
              <li>• Une passation documentée pour que vos équipes gardent la maîtrise de la solution.</li>
            </ul>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/consultation">Parler de votre contexte <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-primary/20">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Équipe projet échangeant autour d'un écran"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-md text-xl font-semibold text-white">
              La bonne technologie commence par une compréhension précise de votre métier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#16090c] text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-300">De l'idée à l'usage quotidien</p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">Un parcours de projet conçu pour réduire le risque</h2>
            <p className="text-lg leading-relaxed text-white/70">
              Vous gardez de la visibilité sur les décisions, le budget et les prochaines étapes. Le périmètre se
              construit autour de vos priorités réelles, pas autour d'une démonstration technologique sans débouché.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { number: "01", title: "Comprendre", text: "Nous cartographions vos processus, vos utilisateurs, vos contraintes de sécurité et les systèmes déjà en place." },
              { number: "02", title: "Construire", text: "Nous proposons une architecture proportionnée, puis avançons par étapes visibles avec validation de vos équipes." },
              { number: "03", title: "Faire évoluer", text: "Après le lancement, nous suivons l'adoption, traitons les retours et priorisons les améliorations utiles." },
            ].map((step) => (
              <div key={step.number} className="border-t border-red-400/50 pt-6">
                <span className="text-sm font-bold text-red-300">{step.number}</span>
                <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#16090c] via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à transformer votre entreprise ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discutons de la manière dont nos solutions technologiques peuvent vous permettre d'atteindre vos objectifs commerciaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                <Link href="/consultation">Prendre rendez‑vous</Link>
              </Button>
              <Button size="lg" variant="outline" className="hidden sm:flex bg-transparent" asChild>
                <Link href="/ai-solutions">Consulter nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image src="/aibc-logo.png" alt="AIBC Logo" width={100} height={40} className="h-8 w-auto" />
              <p className="text-sm text-muted-foreground">
                Nous accompagnons votre transformation digitale avec sécurité et innovation.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/company/aibcflow"
                  className="text-muted-foreground hover:text-primary transition-colors"
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
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/ai-solutions" className="text-sm text-muted-foreground hover:text-primary">
                      IA & données
                    </Link>
                </li>
                <li>
                  <Link href="/custom-software" className="text-sm text-muted-foreground hover:text-primary">
                    Solutions Web et Cloud
                  </Link>
                </li>
                <li>
                  <Link href="/cloud-solutions" className="text-sm text-muted-foreground hover:text-primary">
                    Cloud privé
                  </Link>
                </li>
                <li>
                  <Link href="/consultation" className="text-sm text-muted-foreground hover:text-primary">
                    Consultation digitale
                  </Link>
                </li>
                <li>
                  <Link href="/custom-software" className="text-sm text-muted-foreground hover:text-primary">
                    Automatisation
                  </Link>
                </li>
                <li>
                  <Link href="/ai-solutions" className="text-sm text-muted-foreground hover:text-primary">
                    Analyse stratégique
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary">
                    Études de cas
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Recrutement
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">France, Malte, Tunisie.</li>
                <li>
                  <Link href="mailto:contact@aibc.tn" className="text-sm text-muted-foreground hover:text-primary">
                    contact@aibc.tn
                  </Link>
                </li>
                <li>
                  <Link href="tel:0021628888612" className="text-sm text-muted-foreground hover:text-primary">
                  0021628888612
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} AIBC. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
