"use client"

import type React from "react"

import { ChevronLeft, ChevronRight, Play, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Movie {
  id: string
  title: string
  image: string
  year: number
  rating: number
  genre: string
  duration: string
}

interface MovieRowProps {
  title: string
  movies: Movie[]
}

export function MovieRow({ title, movies }: MovieRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const router = useRouter()

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })

      // Update scroll button states
      setTimeout(() => {
        if (scrollRef.current) {
          setCanScrollLeft(scrollRef.current.scrollLeft > 0)
          setCanScrollRight(
            scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth,
          )
        }
      }, 300)
    }
  }

  const handlePlay = (movieId: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/watch/${movieId}`)
  }

  return (
    <div className="relative group mb-8">
      <h2 className="text-xl font-semibold text-foreground mb-4 px-4 sm:px-6 lg:px-8">{title}</h2>

      <div className="relative">
        {/* Left scroll button */}
        {canScrollLeft && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        )}

        {/* Right scroll button */}
        {canScrollRight && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        )}

        {/* Movies container */}
        <div ref={scrollRef} className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              className="flex-shrink-0 w-72 bg-card border-border movie-card-hover cursor-pointer group/card"
            >
              <Link href={`/movie/${movie.id}`}>
                <div className="relative">
                  <img
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity rounded-t-lg flex items-center justify-center">
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-white text-black hover:bg-white/90"
                        onClick={(e) => handlePlay(movie.id, e)}
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Play
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-card-foreground mb-2 text-balance">{movie.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{movie.year}</span>
                    <span>{movie.duration}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-primary">★</span>
                      <span>{movie.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{movie.genre}</p>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
