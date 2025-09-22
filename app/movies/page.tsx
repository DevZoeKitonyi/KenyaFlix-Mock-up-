"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { MovieGrid } from "@/components/movie-grid"
import { FilterBar } from "@/components/filter-bar"

// Extended movie data for catalog
const allMovies = [
  {
    id: "1",
    title: "Click Click Bang",
    image: "/placeholder.svg?key=0v66f",
    year: 2024,
    rating: 8.5,
    genre: "Action",
    subGenre: "Drama",
    duration: "2h 15m",
    description: "A gripping tale of survival and redemption set in the bustling streets of Nairobi.",
    director: "Wanuri Kahiu",
    cast: ["John Sibi-Okumu", "Lupita Nyong'o", "Edi Gathegi"],
    language: "Swahili",
    country: "Kenya",
  },
  {
    id: "2",
    title: "Kampuni",
    image: "/placeholder.svg?key=2zhp4",
    year: 2023,
    rating: 7.8,
    genre: "Comedy",
    subGenre: "Drama",
    duration: "1h 45m",
    description: "A hilarious workplace comedy about office politics in modern Nairobi.",
    director: "Philbert Ochieng",
    cast: ["Catherine Kamau", "Nick Mutuma", "Brenda Wairimu"],
    language: "English",
    country: "Kenya",
  },
  {
    id: "3",
    title: "Nairobi Half Life",
    image: "/placeholder.svg?key=j8fyl",
    year: 2012,
    rating: 8.2,
    genre: "Drama",
    subGenre: "Crime",
    duration: "1h 36m",
    description: "A young man from rural Kenya dreams of becoming an actor in Nairobi.",
    director: "David Tosh Gitonga",
    cast: ["Joseph Wairimu", "Olwenya Maina", "Nancy Wanjiku"],
    language: "Swahili",
    country: "Kenya",
  },
  {
    id: "4",
    title: "Rafiki",
    image: "/placeholder.svg?key=mcdp3",
    year: 2018,
    rating: 7.5,
    genre: "Romance",
    subGenre: "Drama",
    duration: "1h 23m",
    description: "A tender love story between two young women in conservative Kenya.",
    director: "Wanuri Kahiu",
    cast: ["Samantha Mugatsia", "Sheila Munyiva", "Jimmi Gathu"],
    language: "Swahili",
    country: "Kenya",
  },
  {
    id: "5",
    title: "Pumzi",
    image: "/placeholder.svg?key=ba15t",
    year: 2009,
    rating: 7.9,
    genre: "Sci-Fi",
    subGenre: "Drama",
    duration: "21m",
    description: "A futuristic short film about environmental restoration in post-apocalyptic Africa.",
    director: "Wanuri Kahiu",
    cast: ["Kudzani Moswela", "Ok Ukoh"],
    language: "English",
    country: "Kenya",
  },
  {
    id: "6",
    title: "The First Grader",
    image: "/placeholder.svg?key=3p5kf",
    year: 2010,
    rating: 7.4,
    genre: "Biography",
    subGenre: "Drama",
    duration: "1h 43m",
    description: "The true story of an 84-year-old Kenyan who enrolls in elementary school.",
    director: "Justin Chadwick",
    cast: ["Oliver Litondo", "Naomie Harris", "Tony Kgoroge"],
    language: "English",
    country: "Kenya",
  },
  {
    id: "7",
    title: "Something Necessary",
    image: "/placeholder.svg?key=fplrv",
    year: 2013,
    rating: 7.1,
    genre: "Drama",
    subGenre: "Thriller",
    duration: "1h 25m",
    description: "A widow seeks justice for her husband's death during post-election violence.",
    director: "Judy Kibinge",
    cast: ["Asha Kingsley", "Auudi Rowa", "Kobna Holdbrook-Smith"],
    language: "English",
    country: "Kenya",
  },
  {
    id: "8",
    title: "Kati Kati",
    image: "/placeholder.svg?key=qs9vq",
    year: 2016,
    rating: 6.8,
    genre: "Drama",
    subGenre: "Fantasy",
    duration: "1h 15m",
    description: "A woman wakes up in a mysterious place between life and death.",
    director: "Mbithi Masya",
    cast: ["Nyokabi Gethaiga", "Eka Darville", "Brian Ogola"],
    language: "Swahili",
    country: "Kenya",
  },
  {
    id: "9",
    title: "Supa Modo",
    image: "/placeholder.svg?key=st3na",
    year: 2018,
    rating: 7.6,
    genre: "Family",
    subGenre: "Drama",
    duration: "1h 14m",
    description: "A terminally ill girl dreams of becoming a superhero.",
    director: "Likarion Wainaina",
    cast: ["Stycie Waweru", "Nyawira Ndambia", "Marrianne Nungo"],
    language: "Swahili",
    country: "Kenya",
  },
  {
    id: "10",
    title: "Watu Wote",
    image: "/placeholder.svg?key=i9254",
    year: 2017,
    rating: 8.1,
    genre: "Drama",
    subGenre: "Short",
    duration: "22m",
    description: "Based on true events of religious unity during a terrorist attack.",
    director: "Katja Benrath",
    cast: ["Adelyne Wairimu", "Abdiwali Farrah", "Faysal Ahmed"],
    language: "Swahili",
    country: "Kenya",
  },
  {
    id: "11",
    title: "I Am Samuel",
    image: "/placeholder.svg?key=i7mq1",
    year: 2020,
    rating: 7.3,
    genre: "Documentary",
    subGenre: "Biography",
    duration: "1h 22m",
    description: "A documentary following a young gay man in rural Kenya.",
    director: "Peter Murimi",
    cast: ["Samuel Asiema"],
    language: "Swahili",
    country: "Kenya",
  },
  {
    id: "12",
    title: "Softie",
    image: "/placeholder.svg?key=d3teb",
    year: 2020,
    rating: 7.8,
    genre: "Documentary",
    subGenre: "Political",
    duration: "1h 36m",
    description: "Following activist Boniface Mwangi's political campaign in Kenya.",
    director: "Sam Soko",
    cast: ["Boniface Mwangi", "Njeri Mwangi"],
    language: "English",
    country: "Kenya",
  },
]

export default function MoviesPage() {
  const [filteredMovies, setFilteredMovies] = useState(allMovies)
  const [currentFilters, setCurrentFilters] = useState({
    genre: "All",
    year: "All",
    language: "All",
    rating: "All",
  })

  const handleFilterChange = (filters: typeof currentFilters) => {
    setCurrentFilters(filters)

    const filtered = allMovies.filter((movie) => {
      if (filters.genre !== "All" && movie.genre !== filters.genre) return false
      if (filters.year !== "All" && movie.year.toString() !== filters.year) return false
      if (filters.language !== "All" && movie.language !== filters.language) return false
      if (filters.rating !== "All") {
        const minRating = Number.parseFloat(filters.rating)
        if (movie.rating < minRating) return false
      }
      return true
    })

    setFilteredMovies(filtered)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Kenyan Movies</h1>
            <p className="text-muted-foreground">
              Discover the best of Kenyan cinema - {filteredMovies.length} movies available
            </p>
          </div>
        </div>

        <FilterBar onFilterChange={handleFilterChange} currentFilters={currentFilters} />
      </div>

      {/* Movies Grid */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12">
        <MovieGrid movies={filteredMovies} />
      </div>
    </main>
  )
}
