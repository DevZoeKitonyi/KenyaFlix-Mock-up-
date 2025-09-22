"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface FilterBarProps {
  onFilterChange: (filters: {
    genre: string
    year: string
    language: string
    rating: string
  }) => void
  currentFilters: {
    genre: string
    year: string
    language: string
    rating: string
  }
}

export function FilterBar({ onFilterChange, currentFilters }: FilterBarProps) {
  const genres = ["All", "Action", "Comedy", "Drama", "Romance", "Sci-Fi", "Biography", "Documentary", "Family"]
  const years = ["All", "2024", "2023", "2020", "2018", "2017", "2016", "2013", "2012", "2010", "2009"]
  const languages = ["All", "English", "Swahili"]
  const ratings = ["All", "8.0", "7.5", "7.0", "6.5"]

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...currentFilters, [key]: value }
    onFilterChange(newFilters)
  }

  const clearAllFilters = () => {
    const resetFilters = {
      genre: "All",
      year: "All",
      language: "All",
      rating: "All",
    }
    onFilterChange(resetFilters)
  }

  const hasActiveFilters = Object.values(currentFilters).some((filter) => filter !== "All")

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-3">
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-muted-foreground">Genre</label>
            <Select value={currentFilters.genre} onValueChange={(value) => handleFilterChange("genre", value)}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-muted-foreground">Year</label>
            <Select value={currentFilters.year} onValueChange={(value) => handleFilterChange("year", value)}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-muted-foreground">Language</label>
            <Select value={currentFilters.language} onValueChange={(value) => handleFilterChange("language", value)}>
              <SelectTrigger className="w-28">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language} value={language}>
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-muted-foreground">Min Rating</label>
            <Select value={currentFilters.rating} onValueChange={(value) => handleFilterChange("rating", value)}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ratings.map((rating) => (
                  <SelectItem key={rating} value={rating}>
                    {rating === "All" ? "All" : `${rating}+`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearAllFilters}
            className="flex items-center space-x-2 bg-transparent"
          >
            <X className="w-4 h-4" />
            <span>Clear Filters</span>
          </Button>
        )}
      </div>
    </div>
  )
}
