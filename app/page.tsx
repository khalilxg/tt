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

  const companies = [
    { name: "Eurova", logo: "/logos/a.svg" },
    { name: "Brtbank", logo: "/logos/a.svg" },
    { name: "Access Banks", logo: "/logos/a.svg" },
    { name: "Targote", logo: "/logos/a.svg" },
    { name: "Paystock", logo: "/logos/a.svg" },
    { name: "Tradevest", logo: "/logos/a.svg" },
  ]

  const industries = [
    {
      name: "Financial Services",
      description: "Empowering banks, fintech, and insurance companies with secure, scalable solutions",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M2 17a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V8.32a5 5 0 0 0-2.64-4.4L12 0 4.64 3.92A5 5 0 0 0 2 8.32Z" />
          <path d="m6 12 6-3 6 3" />
          <path d="M12 9v8" />
        </svg>
      ),
    },
    {
      name: "Santé",
      description: "Avancée des soins aux patients avec des diagnostics alimentés par l'IA et des systèmes d'information de monitoring sécurisés",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      name: "E-commerce",
      description: "Créer des expériences d'achat fluides grâce à des plateformes évolutives et des systèmes de gestion des stocks intelligents",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      ),
    },
  ]

  const caseStudies = [
    {
      title: "Transformation du service client alimenté par l'IA",
      description:
        "Comment nous avons aidé une banque française de premier plan à réduire le temps de réponse de 70 % et à améliorer les scores de satisfaction client de 35 % grâce à des chatbots IA.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      tags: ["AI", "Banking", "Customer Service"],
      href: "/case-studies",
    },
    {
      title: "Succès de migration vers le Cloud privé",
      description:
        "Modernisation des systèmes d'un grand opérateur télécom, réduisant les coûts de 40 % et assurant une disponibilité de 99,99 %.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      tags: ["Cloud", "Télécoms", "Transformation digitale"],
      href: "/case-studies",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Small Business Owner",
      quote:
        "Depuis l'intégration de cette solution à notre flux de travail, nous constatons une nette amélioration de l'efficacité et de la collaboration.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      href: "/testimonials/sarah-johnson",
    },
    {
      name: "David Patel",
      title: "Project Manager",
      quote:
        "J'ai évalué de nombreuses solutions dans ce domaine ; celle-ci se distingue par son design intuitif et sa fonctionnalité complète.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      href: "/testimonials/david-patel",
    },
    {
      name: "Emily Carter",
      title: "Operations Manager",
      quote:
        "L'outil que nous avons adopté a dépassé nos attentes, apportant des insights précieux et un soutien essentiel à la croissance de notre activité.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q80",
      href: "/testimonials/emily-carter",
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
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <ChevronDown className="w-6 h-6 text-white animate-bounce mx-auto" />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gradient-to-b from-background via-background/50 to-[#020817]/50 relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-center text-lg font-medium text-muted-foreground mb-12 px-4">
            Approuvée par des entreprises de premier plan
          </h2>
          <div className="relative w-full overflow-hidden gradient-mask">
            <div className="flex space-x-16 animate-scroll">
              {/* First set of logos */}
              {[...companies, ...companies].map((company, index) => (
                <div key={`${company.name}-${index}`} className="flex items-center justify-center min-w-[160px] group">
                  <div className="relative w-32 h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
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
      <section className="py-20 bg-gradient-to-b from-background via-[#020817] to-[#020817] relative overflow-hidden">
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
      <section className="py-20 bg-gradient-to-b from-[#020817] via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Études de cas</h2>
            <p className="text-lg text-muted-foreground">Voir comment nous avons aidé les entreprises dans leur transformation digitale</p>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-background via-[#020817] to-[#020817] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/screenshot-202025-02-18-20at-209.png')] opacity-5 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Ce que disent nos clients</h2>
            <p className="text-lg text-gray-400">
              Découvrez ce que nos clients satisfaits ont à dire sur leurs expériences avec nos solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-[#0a101f]/40 border border-gray-800/50 backdrop-blur-sm hover:bg-[#0a101f]/60 transition-all duration-300">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-800/50">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 leading-relaxed">"{testimonial.quote}"</blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#020817] via-background to-background">
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
