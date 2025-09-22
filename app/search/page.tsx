"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { MovieGrid } from "@/components/movie-grid"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// All movies data for search
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

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [searchResults, setSearchResults] = useState(allMovies)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const performSearch = async () => {
      if (!searchQuery.trim()) {
        setSearchResults(allMovies)
        return
      }

      setIsSearching(true)

      // Simulate search delay
      await new Promise((resolve) => setTimeout(resolve, 300))

      const query = searchQuery.toLowerCase().trim()
      const filtered = allMovies.filter((movie) => {
        return (
          movie.title.toLowerCase().includes(query) ||
          movie.description.toLowerCase().includes(query) ||
          movie.director.toLowerCase().includes(query) ||
          movie.cast.some((actor) => actor.toLowerCase().includes(query)) ||
          movie.genre.toLowerCase().includes(query) ||
          movie.subGenre.toLowerCase().includes(query) ||
          movie.language.toLowerCase().includes(query) ||
          movie.year.toString().includes(query)
        )
      })

      setSearchResults(filtered)
      setIsSearching(false)
    }

    performSearch()
  }, [searchQuery])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Search Header */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-6 text-center">Search Movies</h1>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for movies, actors, directors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-lg bg-card border-border"
              autoFocus
            />
          </div>
        </div>

        {/* Search Results Info */}
        <div className="flex items-center justify-between mb-6">
          <div>
            {searchQuery ? (
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {isSearching ? "Searching..." : `Search Results for "${searchQuery}"`}
                </h2>
                <p className="text-muted-foreground">
                  {isSearching ? "Please wait..." : `${searchResults.length} movies found`}
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold text-foreground">All Movies</h2>
                <p className="text-muted-foreground">{searchResults.length} movies available</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12">
        {isSearching ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg mb-4">No movies found</div>
            <p className="text-muted-foreground">Try searching with different keywords or check your spelling.</p>
          </div>
        ) : (
          <MovieGrid movies={searchResults} />
        )}
      </div>
    </main>
  )
}
