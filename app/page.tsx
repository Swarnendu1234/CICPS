"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import FeaturesSection from "@/components/features-section"
import StatsSection from "@/components/stats-section"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <HowItWorks />
      <FeaturesSection />
      <StatsSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
