import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MovieRow } from "@/components/movie-row"

// Sample Kenyan movies data
const featuredMovies = [
  {
    id: "1",
    title: "Click Click Bang",
    image: "/placeholder-dpoz1.png",
    year: 2024,
    rating: 8.5,
    genre: "Action • Drama",
    duration: "2h 15m",
  },
  {
    id: "2",
    title: "Kampuni",
    image: "/placeholder-jffwo.png",
    year: 2023,
    rating: 7.8,
    genre: "Comedy • Drama",
    duration: "1h 45m",
  },
  {
    id: "3",
    title: "Nairobi Half Life",
    image: "/placeholder-tdc19.png",
    year: 2012,
    rating: 8.2,
    genre: "Drama • Crime",
    duration: "1h 36m",
  },
  {
    id: "4",
    title: "Rafiki",
    image: "/placeholder-s5bt7.png",
    year: 2018,
    rating: 7.5,
    genre: "Romance • Drama",
    duration: "1h 23m",
  },
  {
    id: "5",
    title: "Pumzi",
    image: "/placeholder-4n8cs.png",
    year: 2009,
    rating: 7.9,
    genre: "Sci-Fi • Drama",
    duration: "21m",
  },
]

const actionMovies = [
  {
    id: "6",
    title: "The First Grader",
    image: "/placeholder-8q44n.png",
    year: 2010,
    rating: 7.4,
    genre: "Biography • Drama",
    duration: "1h 43m",
  },
  {
    id: "7",
    title: "Something Necessary",
    image: "/placeholder-1tmay.png",
    year: 2013,
    rating: 7.1,
    genre: "Drama",
    duration: "1h 25m",
  },
  {
    id: "8",
    title: "Kati Kati",
    image: "/placeholder-9w3un.png",
    year: 2016,
    rating: 6.8,
    genre: "Drama • Fantasy",
    duration: "1h 15m",
  },
  {
    id: "9",
    title: "Supa Modo",
    image: "/placeholder-1asy1.png",
    year: 2018,
    rating: 7.6,
    genre: "Family • Drama",
    duration: "1h 14m",
  },
  {
    id: "10",
    title: "Watu Wote",
    image: "/placeholder-i2h3r.png",
    year: 2017,
    rating: 8.1,
    genre: "Drama • Short",
    duration: "22m",
  },
]

const documentaries = [
  {
    id: "11",
    title: "I Am Samuel",
    image: "/placeholder-4g9jr.png",
    year: 2020,
    rating: 7.3,
    genre: "Documentary",
    duration: "1h 22m",
  },
  {
    id: "12",
    title: "Softie",
    image: "/placeholder-d5gel.png",
    year: 2020,
    rating: 7.8,
    genre: "Documentary",
    duration: "1h 36m",
  },
  {
    id: "13",
    title: "The Letter",
    image: "/placeholder-irayt.png",
    year: 2019,
    rating: 7.2,
    genre: "Documentary",
    duration: "1h 15m",
  },
  {
    id: "14",
    title: "Mama Colonel",
    image: "/placeholder-x6230.png",
    year: 2017,
    rating: 7.5,
    genre: "Documentary",
    duration: "1h 10m",
  },
  {
    id: "15",
    title: "Silas",
    image: "/placeholder.svg?height=160&width=288",
    year: 2017,
    rating: 7.0,
    genre: "Documentary",
    duration: "1h 28m",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      <div className="py-8 space-y-8">
        <MovieRow title="Featured Kenyan Cinema" movies={featuredMovies} />
        <MovieRow title="Action & Drama" movies={actionMovies} />
        <MovieRow title="Documentaries" movies={documentaries} />
      </div>
    </main>
  )
}
