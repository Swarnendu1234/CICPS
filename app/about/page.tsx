"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import MissionSection from "@/components/mission-section"
import ValuesSection from "@/components/values-section"

import ContactForm from "@/components/contact-form"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <MissionSection />
      <ValuesSection />

      <ContactForm />
      <Footer />
    </main>
  )
}
