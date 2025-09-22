"use client"

import type React from "react"

import { Play, Plus, Info, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Movie {
  id: string
  title: string
  image: string
  year: number
  rating: number
  genre: string
  subGenre: string
  duration: string
  description: string
  director: string
  cast: string[]
  language: string
  country: string
}

interface MovieGridProps {
  movies: Movie[]
}

export function MovieGrid({ movies }: MovieGridProps) {
  const router = useRouter()

  const handlePlay = (movieId: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/watch/${movieId}`)
  }

  if (movies.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground text-lg mb-4">No movies found</div>
        <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <Card key={movie.id} className="bg-card border-border movie-card-hover cursor-pointer group overflow-hidden">
          <div className="relative">
            <img src={movie.image || "/placeholder.svg"} alt={movie.title} className="w-full h-64 object-cover" />

            {/* Rating badge */}
            <div className="absolute top-3 left-3">
              <Badge variant="secondary" className="bg-black/70 text-white border-none">
                <Star className="w-3 h-3 mr-1 fill-primary text-primary" />
                {movie.rating}
              </Badge>
            </div>

            {/* Language badge */}
            <div className="absolute top-3 right-3">
              <Badge variant="outline" className="bg-black/70 text-white border-white/20">
                {movie.language}
              </Badge>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="flex justify-center space-x-2">
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
                  <Link href={`/movie/${movie.id}`}>
                    <Button size="sm" variant="secondary">
                      <Info className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <p className="text-white text-sm px-4 line-clamp-3">{movie.description}</p>
              </div>
            </div>
          </div>

          <Link href={`/movie/${movie.id}`}>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-card-foreground text-balance leading-tight">{movie.title}</h3>
                <span className="text-sm text-muted-foreground ml-2 flex-shrink-0">{movie.year}</span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs">
                  {movie.genre}
                </Badge>
                {movie.subGenre && (
                  <Badge variant="outline" className="text-xs">
                    {movie.subGenre}
                  </Badge>
                )}
              </div>

              <div className="text-sm text-muted-foreground space-y-1">
                <p>{movie.duration}</p>
                <p className="line-clamp-1">Dir: {movie.director}</p>
                <p className="line-clamp-1">
                  Cast: {movie.cast.slice(0, 2).join(", ")}
                  {movie.cast.length > 2 && "..."}
                </p>
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  )
}
