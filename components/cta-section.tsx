"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Take Control of Your Skin Health?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of users who have made informed decisions about their skin care with SkinDetect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/upload">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 gap-2">
                Start Free Detection
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Learn More About Us
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No credit card required. Completely free and confidential.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
