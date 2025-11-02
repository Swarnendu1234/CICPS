"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Dermatologist",
    content: "An impressive tool that complements clinical diagnosis. The accuracy is remarkable.",
    avatar: "👨‍⚕️",
  },
  {
    name: "Alex Johnson",
    role: "Patient",
    content: "Quick, easy to use, and very informative. I got results in seconds!",
    avatar: "😊",
  },
  {
    name: "Dr. James Wilson",
    role: "Healthcare Provider",
    content: "Great for initial screening and patient education. Highly recommended.",
    avatar: "👨‍⚕️",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Trusted by Professionals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Healthcare professionals and patients worldwide rely on SkinDetect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="text-2xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
