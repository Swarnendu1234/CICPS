"use client"

import { motion } from "framer-motion"
import { AlertCircle, CheckCircle, AlertTriangle, Download } from "lucide-react"

interface DiagnosisResultsProps {
  results: {
    disease: string
    confidence: number
    severity: string
    description: string
    recommendations: string[]
  }
  onNewAnalysis: () => void
}

export default function DiagnosisResults({ results, onNewAnalysis }: DiagnosisResultsProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "mild":
        return "from-green-500/20 to-green-600/10 border-green-500/30"
      case "moderate":
        return "from-orange-500/20 to-orange-600/10 border-orange-500/30"
      case "severe":
        return "from-red-500/20 to-red-600/10 border-red-500/30"
      default:
        return "from-blue-500/20 to-blue-600/10 border-blue-500/30"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "mild":
        return <CheckCircle className="w-8 h-8 text-green-600" />
      case "moderate":
        return <AlertTriangle className="w-8 h-8 text-orange-600" />
      case "severe":
        return <AlertCircle className="w-8 h-8 text-red-600" />
      default:
        return <AlertCircle className="w-8 h-8 text-blue-600" />
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      {/* Main Result Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`p-8 rounded-2xl bg-gradient-to-br border ${getSeverityColor(results.severity)}`}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-white/10">{getSeverityIcon(results.severity)}</div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Detected Condition</p>
              <h3 className="text-3xl font-bold text-foreground">{results.disease}</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
            <p className="text-sm text-muted-foreground mb-1">Confidence Score</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-foreground">{results.confidence}%</span>
            </div>
            <div className="mt-2 w-full bg-background/30 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-accent to-primary h-2 rounded-full transition-all"
                style={{ width: `${results.confidence}%` }}
              />
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
            <p className="text-sm text-muted-foreground mb-1">Severity Level</p>
            <p className="text-2xl font-bold text-foreground">{results.severity}</p>
          </div>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="p-6 rounded-2xl bg-card border border-border"
      >
        <h4 className="font-semibold text-foreground mb-3">Analysis</h4>
        <p className="text-muted-foreground leading-relaxed">{results.description}</p>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-6 rounded-2xl bg-card border border-border"
      >
        <h4 className="font-semibold text-foreground mb-4">Recommendations</h4>
        <ul className="space-y-3">
          {results.recommendations.map((rec, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.05 }}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <span>{rec}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => {}}
          className="flex-1 py-3 px-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download Report
        </button>
        <button
          onClick={onNewAnalysis}
          className="flex-1 py-3 px-4 rounded-lg border border-border hover:bg-muted text-foreground font-semibold transition"
        >
          New Analysis
        </button>
      </div>

      {/* Disclaimer */}
      <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20 text-sm text-muted-foreground">
        <p>
          <strong>Disclaimer:</strong> This analysis is for informational purposes only and should not replace
          professional medical advice. Please consult with a qualified healthcare professional for diagnosis and
          treatment.
        </p>
      </div>
    </motion.div>
  )
}
