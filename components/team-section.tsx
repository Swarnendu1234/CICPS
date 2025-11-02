"use client"

import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    bio: "Dermatologist with 15+ years of experience",
    emoji: "👩‍⚕️",
  },
  {
    name: "Alex Johnson",
    role: "Lead AI Engineer",
    bio: "ML expert specializing in medical imaging",
    emoji: "👨‍💻",
  },
  {
    name: "Dr. James Wilson",
    role: "CTO",
    bio: "Healthcare tech innovator and researcher",
    emoji: "👨‍🔬",
  },
  {
    name: "Maya Patel",
    role: "Head of Product",
    bio: "Product strategist focused on healthcare",
    emoji: "👩‍💼",
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse group of medical professionals, engineers, and healthcare innovators working together to
            revolutionize dermatological diagnostics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group text-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{member.emoji}</div>
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-semibold mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Collaborations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 pt-24 border-t border-border"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Strategic Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Medical Institute", "Tech University", "Health Network", "Research Lab"].map((partner, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-muted/50 border border-border text-center hover:border-primary/50 transition"
              >
                <p className="font-semibold text-foreground">{partner}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
