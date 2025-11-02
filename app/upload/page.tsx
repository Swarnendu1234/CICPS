"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import ImageUploadBox from "@/components/image-upload-box"
import DiagnosisResults from "@/components/diagnosis-results"

export default function UploadPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [metadata, setMetadata] = useState({ age: "", gender: "", location: "" })
  const [results, setResults] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleImageUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleAnalyze = async () => {
    if (!uploadedImage) return

    setIsAnalyzing(true)
    // Simulate API call to AI model
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock results
    const mockResults = {
      disease: "Melanoma",
      confidence: 87,
      severity: "Moderate",
      description:
        "Detected pigmented lesion with features suggestive of melanoma. Recommend urgent dermatological evaluation.",
      recommendations: [
        "Consult a dermatologist immediately",
        "Avoid sun exposure to the affected area",
        "Monitor for any changes in size, color, or shape",
        "Consider protective clothing when outdoors",
      ],
    }

    setResults(mockResults)
    setIsAnalyzing(false)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Skin Disease Detection</h1>
          <p className="text-muted-foreground">Upload an image and our AI will provide instant analysis</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <ImageUploadBox onImageUpload={handleImageUpload} uploadedImage={uploadedImage} isAnalyzing={isAnalyzing} />

            {uploadedImage && !results && (
              <div className="space-y-4 p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold text-foreground">Optional Information</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Age</label>
                    <input
                      type="number"
                      className="w-full mt-1 px-4 py-2 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your age"
                      value={metadata.age}
                      onChange={(e) => setMetadata({ ...metadata, age: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Gender</label>
                    <select
                      className="w-full mt-1 px-4 py-2 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      value={metadata.gender}
                      onChange={(e) => setMetadata({ ...metadata, gender: e.target.value })}
                    >
                      <option value="">Select...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Location</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-4 py-2 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Body part or location"
                      value={metadata.location}
                      onChange={(e) => setMetadata({ ...metadata, location: e.target.value })}
                    />
                  </div>
                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="w-full py-3 rounded-lg bg-primary hover:bg-primary/90 disabled:opacity-50 text-primary-foreground font-semibold transition disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Image"}
                </button>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div>
            {results ? (
              <DiagnosisResults
                results={results}
                onNewAnalysis={() => {
                  setUploadedImage(null)
                  setResults(null)
                  setMetadata({ age: "", gender: "", location: "" })
                }}
              />
            ) : isAnalyzing ? (
              <div className="p-8 rounded-2xl bg-card border border-border flex flex-col items-center justify-center h-96">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                </div>
                <p className="text-foreground font-semibold mb-2">Analyzing Image</p>
                <p className="text-muted-foreground text-sm text-center">
                  Our AI model is examining the image. This typically takes a few seconds.
                </p>
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-muted/30 border border-border border-dashed flex flex-col items-center justify-center h-96">
                <div className="text-5xl mb-4">📊</div>
                <p className="text-foreground font-semibold mb-2">Results will appear here</p>
                <p className="text-muted-foreground text-center text-sm">
                  Upload an image and click "Analyze" to see diagnosis results including disease type, confidence score,
                  severity level, and recommendations.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
