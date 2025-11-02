"use client"

import { motion } from "framer-motion"
import { Shield, Users, Lightbulb, TrendingUp } from "lucide-react"

const principles = [
  {
    icon: Shield,
    title: "Trustworthy",
    description: "Built on transparent AI models and rigorous medical validation to ensure reliability.",
  },
  {
    icon: Users,
    title: "Inclusive",
    description: "Designed to serve all demographics and skin tones with equal accuracy and accessibility.",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description: "Continuously improving through research, feedback, and the latest AI advancements.",
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    description: "Ready to serve millions of patients and healthcare providers globally.",
  },
]

export default function ValuesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Principles</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every decision we make is guided by these core principles that shape our product and company culture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, idx) => {
            const Icon = principle.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="p-4 rounded-lg bg-primary/10 w-fit mb-6 group-hover:bg-primary/20 transition">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
