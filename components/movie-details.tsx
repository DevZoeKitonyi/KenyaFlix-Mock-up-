"use client"

import { useState } from "react"
import { Play, Plus, Share, Star, Calendar, Clock, Globe, Award, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface MovieDetailsProps {
  movie: {
    id: string
    title: string
    image: string
    backdropImage: string
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
    ageRating: string
    releaseDate: string
    awards: string[]
    plot: string
    trivia: string[]
  }
}

export function MovieDetails({ movie }: MovieDetailsProps) {
  const [showFullPlot, setShowFullPlot] = useState(false)
  const [isInWatchlist, setIsInWatchlist] = useState(false)

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={movie.backdropImage || movie.image} alt={movie.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Movie Poster */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={movie.image || "/placeholder.svg"}
                alt={movie.title}
                className="w-80 h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-black/70 text-white border-none">
                  <Star className="w-3 h-3 mr-1 fill-primary text-primary" />
                  {movie.rating}
                </Badge>
              </div>
            </div>
          </div>

          {/* Movie Info */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">{movie.title}</h1>

            {/* Movie Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6">
              <Badge variant="outline" className="bg-accent text-accent-foreground border-accent">
                {movie.ageRating}
              </Badge>
              <div className="flex items-center text-white/80">
                <Calendar className="w-4 h-4 mr-1" />
                {movie.year}
              </div>
              <div className="flex items-center text-white/80">
                <Clock className="w-4 h-4 mr-1" />
                {movie.duration}
              </div>
              <div className="flex items-center text-white/80">
                <Globe className="w-4 h-4 mr-1" />
                {movie.language}
              </div>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              <Badge variant="outline" className="bg-primary/20 text-primary border-primary">
                {movie.genre}
              </Badge>
              <Badge variant="outline" className="bg-secondary/20 text-secondary-foreground border-secondary">
                {movie.subGenre}
              </Badge>
            </div>

            {/* Description */}
            <p className="text-lg text-white/90 mb-8 leading-relaxed text-pretty max-w-2xl">{movie.description}</p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Watch Now
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary/80 hover:bg-secondary"
                onClick={() => setIsInWatchlist(!isInWatchlist)}
              >
                <Plus className="w-5 h-5 mr-2" />
                {isInWatchlist ? "Remove from List" : "Add to List"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Share className="w-5 h-5 mr-2" />
                Share
              </Button>
            </div>

            {/* Credits */}
            <div className="text-sm text-white/70 space-y-2">
              <p>
                <span className="text-white font-medium">Director:</span> {movie.director}
              </p>
              <p>
                <span className="text-white font-medium">Starring:</span> {movie.cast.slice(0, 3).join(", ")}
                {movie.cast.length > 3 && ` and ${movie.cast.length - 3} more`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="cast">Cast & Crew</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Plot</h3>
              <div className="text-muted-foreground leading-relaxed">
                <p className={showFullPlot ? "" : "line-clamp-4"}>{movie.plot}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFullPlot(!showFullPlot)}
                  className="mt-2 p-0 h-auto text-primary hover:text-primary/80"
                >
                  {showFullPlot ? (
                    <>
                      Show Less <ChevronUp className="w-4 h-4 ml-1" />
                    </>
                  ) : (
                    <>
                      Show More <ChevronDown className="w-4 h-4 ml-1" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            {movie.awards.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Awards & Recognition
                </h3>
                <ul className="space-y-2">
                  {movie.awards.map((award, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {movie.trivia.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Trivia</h3>
                <ul className="space-y-2">
                  {movie.trivia.map((fact, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>

          <TabsContent value="cast" className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Director</h3>
              <p className="text-muted-foreground">{movie.director}</p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold mb-4">Cast</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {movie.cast.map((actor, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-card border border-border">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">{actor.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium">{actor}</p>
                      <p className="text-sm text-muted-foreground">Actor</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="details" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Release Date</h4>
                  <p className="text-muted-foreground">{movie.releaseDate}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Runtime</h4>
                  <p className="text-muted-foreground">{movie.duration}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Language</h4>
                  <p className="text-muted-foreground">{movie.language}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Country</h4>
                  <p className="text-muted-foreground">{movie.country}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Age Rating</h4>
                  <p className="text-muted-foreground">{movie.ageRating}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">IMDb Rating</h4>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-primary text-primary" />
                    <span className="text-muted-foreground">{movie.rating}/10</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Reviews coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
