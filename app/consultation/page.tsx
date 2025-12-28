"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function Consultation() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useState(() => {
    setMounted(true)
  })

  const handleSubmit = (e: React.FormEvent) => {
    try {
      console.log("[v0] Handling form submission...")
      e.preventDefault()

      const subject = encodeURIComponent(formData.subject || "Demande de Consultation")
      const body = encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )
      const mailtoLink = `mailto:contact@aibc.tn?subject=${subject}&body=${body}`

      console.log("[v0] Creating secure mailto link...")
      // Using a temporary hidden anchor to trigger the mail client securely
      const link = document.createElement("a")
      link.href = mailtoLink

      document.body.appendChild(link)
      link.click()

      requestAnimationFrame(() => {
        if (document.body.contains(link)) {
          document.body.removeChild(link)
        }
        console.log("[v0] Form submission completed successfully.")
      })

      setIsSubmitted(true)
    } catch (error) {
      console.log("[v0] Error in form submission:", error)
    }
  }

  if (!mounted) return <div className="min-h-screen bg-background" />

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-24 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Planifiez votre <span className="text-primary">Consultation Digitale</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground">
              Discutons de vos projets d'IA, de Cloud ou d'Automatisation. Notre équipe d'experts est à votre écoute
              pour concevoir la solution idéale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <Card className="border-none shadow-xl bg-primary text-primary-foreground overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">Contactez-nous directement</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Nous répondons généralement en moins de 24 heures.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Email</div>
                      <div className="font-bold">contact@aibc.tn</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Téléphone</div>
                      <div className="font-bold">+216 12 345 678</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Siège Social</div>
                      <div className="font-bold">Tunis, Tunisie</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-background">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Card className="border-none shadow-2xl p-4 md:p-8">
                <CardHeader>
                  <CardTitle>Envoyez-nous un message</CardTitle>
                  <CardDescription>Remplissez le formulaire ci-dessous et nous vous recontacterons.</CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold">Message Envoyé !</h3>
                      <p className="text-muted-foreground">
                        Votre client de messagerie a été ouvert avec les informations de votre demande. Merci de nous
                        avoir contactés !
                      </p>
                      <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                        Envoyer un autre message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nom Complet
                        </label>
                        <Input
                          id="name"
                          placeholder="Votre nom"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Professionnel
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Sujet d'Intérêt
                        </label>
                        <Input
                          id="subject"
                          placeholder="Ex: Solution Cloud Privé"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Votre Projet / Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Décrivez brièvement vos besoins..."
                          className="min-h-[150px]"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
                        Envoyer ma demande <Send className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
