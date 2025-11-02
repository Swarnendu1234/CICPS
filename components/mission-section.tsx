"use client"

import { motion } from "framer-motion"
import { Heart, Globe, Zap } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Patient-Centric",
    description: "We prioritize patient health outcomes and accessibility over everything else.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Cutting-edge AI technology meets dermatological expertise for better results.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Making advanced skin disease detection available to everyone, everywhere.",
  },
]

export default function MissionSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
            Democratizing Dermatology{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Through AI
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SkinDetect is on a mission to make advanced skin disease detection accessible to healthcare professionals
            and patients worldwide. We combine artificial intelligence with medical expertise to provide accurate, fast,
            and affordable diagnostic support.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="p-4 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1.2M+</div>
              <p className="text-muted-foreground">Skin Images Analyzed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">450K</div>
              <p className="text-muted-foreground">Healthcare Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">94.2%</div>
              <p className="text-muted-foreground">Average Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <p className="text-muted-foreground">Countries Reached</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
