"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface Region {
  name: string
  prevalence: number
  cases: number
  trend: "up" | "down" | "stable"
}

const regions: Region[] = [
  { name: "North America", prevalence: 85, cases: 12450, trend: "up" },
  { name: "South America", prevalence: 72, cases: 8320, trend: "stable" },
  { name: "Europe", prevalence: 90, cases: 15670, trend: "down" },
  { name: "Africa", prevalence: 68, cases: 9840, trend: "up" },
  { name: "Middle East", prevalence: 78, cases: 11200, trend: "stable" },
  { name: "India", prevalence: 82, cases: 18560, trend: "up" },
  { name: "Southeast Asia", prevalence: 75, cases: 13450, trend: "stable" },
  { name: "East Asia", prevalence: 88, cases: 19200, trend: "down" },
  { name: "Oceania", prevalence: 92, cases: 4320, trend: "stable" },
]

interface DiseaseHeatmapProps {
  onDiseaseSelect?: (disease: string) => void
}

export default function DiseaseHeatmap({ onDiseaseSelect }: DiseaseHeatmapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  const getColor = (prevalence: number) => {
    if (prevalence >= 85) return "from-red-500/80 to-red-600/60"
    if (prevalence >= 70) return "from-orange-500/80 to-orange-600/60"
    if (prevalence >= 55) return "from-yellow-500/80 to-yellow-600/60"
    return "from-green-500/80 to-green-600/60"
  }

  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return "📈"
      case "down":
        return "📉"
      default:
        return "➡️"
    }
  }

  return (
    <div className="p-8 rounded-2xl bg-card border border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">Regional Prevalence Map</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {regions.map((region, idx) => (
          <motion.div
            key={region.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            onMouseEnter={() => setHoveredRegion(region.name)}
            onMouseLeave={() => setHoveredRegion(null)}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
          >
            {/* Background bar */}
            <div
              className="absolute inset-0 bg-gradient-to-r opacity-20 transition-opacity group-hover:opacity-30"
              style={{
                backgroundImage: `linear-gradient(to right, var(--accent), var(--primary))`,
              }}
            />

            {/* Heatmap color overlay */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${getColor(region.prevalence)} opacity-0 transition-opacity group-hover:opacity-100`}
            />

            {/* Content */}
            <div className="relative p-4 z-10">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-foreground">{region.name}</h3>
                <span className="text-lg">{getTrendIcon(region.trend)}</span>
              </div>

              <motion.div animate={{ opacity: hoveredRegion === region.name ? 1 : 0.7 }} transition={{ duration: 0.2 }}>
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">Prevalence</span>
                    <span className="text-sm font-semibold text-foreground">{region.prevalence}%</span>
                  </div>
                  <div className="w-full bg-background/30 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-accent to-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${region.prevalence}%` }}
                      transition={{ delay: 0.1, duration: 0.8 }}
                    />
                  </div>
                </div>

                {hoveredRegion === region.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-muted-foreground pt-2 border-t border-foreground/10"
                  >
                    <p>Cases: {region.cases.toLocaleString()}</p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-sm pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-r from-green-500 to-green-600" />
          <span className="text-muted-foreground">Low (≤55%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-r from-yellow-500 to-yellow-600" />
          <span className="text-muted-foreground">Moderate (55-70%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-r from-orange-500 to-orange-600" />
          <span className="text-muted-foreground">High (70-85%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-r from-red-500 to-red-600" />
          <span className="text-muted-foreground">Very High (≥85%)</span>
        </div>
      </div>
    </div>
  )
}
