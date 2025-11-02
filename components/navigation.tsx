"use client"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function Navigation() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">AD</span>
            </div>
            <span className="font-bold text-lg text-foreground">SkinDetect</span>
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition">
              How It Works
            </Link>
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition">
              Analytics
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition">
              About
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Link href="/upload">
              <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
