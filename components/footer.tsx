"use client"

import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/upload" className="hover:text-foreground transition">
                  Detection
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-foreground transition">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>for better skin health</span>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 SkinDetect. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
