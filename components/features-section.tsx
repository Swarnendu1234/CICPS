"use client"

import { motion } from "framer-motion"
import { Shield, Zap, BarChart3, Lock, Globe, Smartphone } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Clinical Grade Accuracy",
    description: "Backed by dermatological research and trained on thousands of verified cases.",
  },
  {
    icon: Zap,
    title: "Real-time Analysis",
    description: "Get instant predictions within seconds of uploading your image.",
  },
  {
    icon: BarChart3,
    title: "Detailed Reports",
    description: "Comprehensive insights with confidence scores and condition information.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your medical data is encrypted and never stored without permission.",
  },
  {
    icon: Globe,
    title: "Multi-Condition Detection",
    description: "Identifies over 10 different skin conditions with high accuracy.",
  },
  {
    icon: Smartphone,
    title: "Works Anywhere",
    description: "Access from your phone, tablet, or desktop browser anytime.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Why Choose SkinDetect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cutting-edge AI technology combined with medical expertise for reliable skin health assessment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
