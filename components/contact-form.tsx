"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Contact us anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Mail, title: "Email", value: "support@skindetect.com" },
            { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
            { icon: MapPin, title: "Location", value: "San Francisco, CA" },
          ].map((contact, idx) => {
            const Icon = contact.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{contact.title}</h3>
                <p className="text-muted-foreground">{contact.value}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto p-8 rounded-2xl bg-card border border-border"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition disabled:opacity-50"
              disabled={submitted}
            >
              {submitted ? "Thank you for your message!" : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 pt-24 border-t border-border"
        >
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Is SkinDetect a replacement for professional medical diagnosis?",
                a: "No, SkinDetect is a diagnostic support tool. Always consult with a qualified dermatologist for proper diagnosis and treatment.",
              },
              {
                q: "How accurate is the AI model?",
                a: "Our model achieves 94.2% accuracy on average. However, accuracy varies based on image quality and skin condition complexity.",
              },
              {
                q: "Is my medical data secure?",
                a: "Yes, all data is encrypted and handled according to HIPAA standards. We never share your personal information.",
              },
              {
                q: "How long does analysis take?",
                a: "Most analyses complete within 5 seconds. Results are instant for high-quality images.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="p-6 rounded-lg bg-muted/50 border border-border"
              >
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
