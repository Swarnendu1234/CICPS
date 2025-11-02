"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Activity, Target } from "lucide-react"

const stats = [
  {
    icon: Activity,
    label: "Total Detections",
    value: "1.2M+",
    change: "+12.5%",
    changePositive: true,
  },
  {
    icon: Users,
    label: "Active Users",
    value: "450K",
    change: "+8.2%",
    changePositive: true,
  },
  {
    icon: Target,
    label: "Avg Accuracy",
    value: "94.2%",
    change: "+2.1%",
    changePositive: true,
  },
  {
    icon: TrendingUp,
    label: "Confirmed Cases",
    value: "980K",
    change: "+15.3%",
    changePositive: true,
  },
]

export default function DiseaseStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, idx) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className={`text-sm font-semibold ${stat.changePositive ? "text-accent" : "text-destructive"}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-foreground">{stat.value}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
