"use client"

import { Play, Info, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const [isMuted, setIsMuted] = useState(true)
  const router = useRouter()

  const handlePlay = () => {
    router.push("/watch/1") // Navigate to Click Click Bang
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/placeholder-w6bh0.png" alt="Featured Movie" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Movie Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">Click Click Bang</h1>

          {/* Movie Info */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-semibold">2024</span>
            <span className="text-white/80">2h 15m</span>
            <span className="text-white/80">Action • Drama</span>
            <div className="flex items-center space-x-1">
              <span className="text-primary">★</span>
              <span className="text-white/80">8.5</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-white/90 mb-8 leading-relaxed text-pretty">
            A gripping tale of survival and redemption set in the bustling streets of Nairobi. When a young photographer
            witnesses a crime, he must navigate the dangerous underworld to protect his family and expose the truth.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold" onClick={handlePlay}>
              <Play className="w-5 h-5 mr-2" />
              Play Now
            </Button>
            <Button size="lg" variant="secondary" className="bg-secondary/80 hover:bg-secondary">
              <Info className="w-5 h-5 mr-2" />
              More Info
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-sm text-white/70">
            <p className="mb-2">
              <span className="text-white">Starring:</span> John Sibi-Okumu, Lupita Nyong'o, Edi Gathegi
            </p>
            <p>
              <span className="text-white">Director:</span> Wanuri Kahiu
            </p>
          </div>
        </div>
      </div>

      {/* Audio Control */}
      <div className="absolute bottom-8 right-8 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMuted(!isMuted)}
          className="bg-black/50 hover:bg-black/70 text-white border border-white/20"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </Button>
      </div>

      {/* Age Rating */}
      <div className="absolute bottom-8 left-8 z-10">
        <div className="bg-black/70 text-white px-3 py-1 rounded border border-white/20">
          <span className="text-sm font-semibold">16+</span>
        </div>
      </div>
    </section>
  )
}
