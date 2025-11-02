"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import DiseaseHeatmap from "@/components/disease-heatmap"
import AnalyticsCharts from "@/components/analytics-charts"
import DiseaseStats from "@/components/disease-stats"
import InsightsPanel from "@/components/insights-panel"

export default function DashboardPage() {
  const [selectedDisease, setSelectedDisease] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Global Disease Analytics</h1>
          <p className="text-muted-foreground">Track skin disease patterns and detection trends worldwide</p>
        </div>

        {/* Key Stats */}
        <DiseaseStats />

        {/* Insights Panel */}
        <div className="mb-12">
          <InsightsPanel />
        </div>

        {/* Heatmap Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <DiseaseHeatmap onDiseaseSelect={setSelectedDisease} />
          </div>

          {/* Disease Filter */}
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-4">Filter by Disease</h3>
            <div className="space-y-2">
              {["All", "Melanoma", "Psoriasis", "Eczema", "Acne", "Dermatitis", "Ringworm"].map((disease) => (
                <button
                  key={disease}
                  onClick={() => setSelectedDisease(disease === "All" ? null : disease)}
                  className={`w-full px-4 py-3 rounded-lg text-left font-medium transition ${
                    (disease === "All" && !selectedDisease) || selectedDisease === disease
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {disease}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Charts */}
        <AnalyticsCharts selectedDisease={selectedDisease} />
      </div>
    </main>
  )
}
