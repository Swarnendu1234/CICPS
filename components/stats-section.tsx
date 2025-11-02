"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "95%", description: "Detection Accuracy" },
  { label: "10+", description: "Skin Conditions" },
  { label: "<5s", description: "Analysis Time" },
  { label: "Global", description: "Coverage" },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-primary/5 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.label}</div>
              <div className="text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
