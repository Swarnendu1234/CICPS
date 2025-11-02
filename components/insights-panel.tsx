"use client"

import { motion } from "framer-motion"
import { TrendingUp, AlertCircle, CheckCircle, Eye } from "lucide-react"

const insights = [
  {
    icon: TrendingUp,
    title: "Rising Melanoma Cases",
    description:
      "A 23% increase in melanoma detections observed over the past quarter, particularly in sunnier regions.",
    severity: "high",
    action: "View Report",
  },
  {
    icon: CheckCircle,
    title: "Improved Model Accuracy",
    description: "Our latest AI model update has achieved 96.2% accuracy, up from 93.8% in the previous version.",
    severity: "positive",
    action: "Learn More",
  },
  {
    icon: AlertCircle,
    title: "Age Group Alert",
    description: "18-30 age group shows highest detection rate. Early intervention programs recommended.",
    severity: "medium",
    action: "View Strategy",
  },
  {
    icon: Eye,
    title: "Geographic Insight",
    description: "East Asia region leads in early detection adoption, showing 40% improvement in case outcomes.",
    severity: "positive",
    action: "Explore Data",
  },
]

export default function InsightsPanel() {
  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "high":
        return "border-l-4 border-red-500 bg-red-500/5"
      case "medium":
        return "border-l-4 border-orange-500 bg-orange-500/5"
      case "positive":
        return "border-l-4 border-green-500 bg-green-500/5"
      default:
        return "border-l-4 border-blue-500 bg-blue-500/5"
    }
  }

  const getSeverityIconColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-600"
      case "medium":
        return "text-orange-600"
      case "positive":
        return "text-green-600"
      default:
        return "text-blue-600"
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Key Insights & Alerts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl bg-card border border-border ${getSeverityStyles(insight.severity)} hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-background ${getSeverityIconColor(insight.severity)}`}>
                  <Icon className={`w-6 h-6 ${getSeverityIconColor(insight.severity)}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                  <button className="text-sm font-medium text-primary hover:text-primary/80 transition">
                    {insight.action} →
                  </button>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
