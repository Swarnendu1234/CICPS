"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-medical opacity-30 -z-10" />

      <div
        className="absolute inset-0 opacity-10 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 80% 80%, #0891b2 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium">
              ✨ AI-Powered Dermatology
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight"
          >
            Diagnose Skin Conditions{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Anywhere, Anytime
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            Advanced AI technology meets dermatological expertise. Upload a skin image and receive instant,
            evidence-based predictions to help guide your health decisions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/upload">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 gap-2">
                <Camera className="w-5 h-5" />
                Upload Image
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
