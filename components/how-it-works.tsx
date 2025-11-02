"use client"

import { motion } from "framer-motion"
import { Upload, Zap, BarChart3, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload Image",
    description: "Capture or upload a clear image of the skin area",
  },
  {
    icon: Zap,
    title: "AI Analysis",
    description: "Our advanced model analyzes the image instantly",
  },
  {
    icon: BarChart3,
    title: "Get Insights",
    description: "Receive detailed predictions and confidence scores",
  },
  {
    icon: CheckCircle,
    title: "Track Progress",
    description: "Monitor your results over time with our dashboard",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Simple, fast, and accurate. Get skin disease predictions in just a few steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
