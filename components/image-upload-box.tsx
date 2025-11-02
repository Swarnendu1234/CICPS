"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Camera, Upload, X } from "lucide-react"

interface ImageUploadBoxProps {
  onImageUpload: (file: File) => void
  uploadedImage: string | null
  isAnalyzing: boolean
}

export default function ImageUploadBox({ onImageUpload, uploadedImage, isAnalyzing }: ImageUploadBoxProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [showCamera, setShowCamera] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type.startsWith("image/")) {
        onImageUpload(file)
      }
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files && files.length > 0) {
      onImageUpload(files[0])
    }
  }

  const startCamera = async () => {
    setShowCamera(true)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (err) {
      console.error("Error accessing camera:", err)
    }
  }

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d")
      if (context) {
        context.drawImage(videoRef.current, 0, 0)
        canvasRef.current.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], "camera-capture.jpg", { type: "image/jpeg" })
            onImageUpload(file)
            setShowCamera(false)
            if (videoRef.current?.srcObject) {
              const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
              tracks.forEach((track) => track.stop())
            }
          }
        })
      }
    }
  }

  if (showCamera) {
    return (
      <div className="p-6 rounded-2xl bg-card border border-border">
        <div className="space-y-4">
          <video ref={videoRef} autoPlay playsInline className="w-full rounded-lg bg-black aspect-video object-cover" />
          <canvas ref={canvasRef} className="hidden" width={640} height={480} />
          <div className="flex gap-3">
            <button
              onClick={capturePhoto}
              className="flex-1 py-3 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition"
            >
              Capture Photo
            </button>
            <button
              onClick={() => {
                setShowCamera(false)
                if (videoRef.current?.srcObject) {
                  const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
                  tracks.forEach((track) => track.stop())
                }
              }}
              className="flex-1 py-3 rounded-lg border border-border hover:bg-muted text-foreground font-semibold transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (uploadedImage) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 rounded-2xl bg-card border border-border relative group overflow-hidden"
      >
        <div className="relative">
          <img
            src={uploadedImage || "/placeholder.svg"}
            alt="Uploaded skin image"
            className="w-full rounded-lg object-cover aspect-square"
          />
          <button
            onClick={() => {}}
            disabled={isAnalyzing}
            className="absolute top-3 right-3 p-2 rounded-lg bg-destructive/20 hover:bg-destructive/30 disabled:opacity-50 transition"
          >
            <X className="w-5 h-5 text-destructive" />
          </button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground text-center">Image ready for analysis</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      animate={{ scale: isDragging ? 1.02 : 1 }}
      className={`p-8 rounded-2xl border-2 border-dashed transition-all cursor-pointer ${
        isDragging ? "border-primary bg-primary/5" : "border-border bg-muted/30 hover:border-primary/50"
      }`}
      onClick={() => fileInputRef.current?.click()}
    >
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />

      <div className="flex flex-col items-center justify-center py-12">
        <div className="mb-4 p-4 rounded-full bg-primary/10">
          <Upload className="w-8 h-8 text-primary" />
        </div>
        <p className="text-lg font-semibold text-foreground mb-2">Drag & drop your image here</p>
        <p className="text-muted-foreground text-sm mb-6">or click to select a file from your device</p>

        <div className="flex gap-3 w-full">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition"
          >
            Choose File
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              startCamera()
            }}
            className="flex-1 py-3 rounded-lg border border-border hover:bg-muted text-foreground font-semibold transition flex items-center justify-center gap-2"
          >
            <Camera className="w-4 h-4" />
            <span>Use Camera</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}
