"use client"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { MovieDetails } from "@/components/movie-details"
import { MovieRow } from "@/components/movie-row"
import { notFound } from "next/navigation"

// Movie data (in a real app, this would come from an API)
const movieData = {
  "1": {
    id: "1",
    title: "Click Click Bang",
    image: "/placeholder.svg?key=0v66f",
    backdropImage: "/placeholder.svg?key=hero1",
    year: 2024,
    rating: 8.5,
    genre: "Action",
    subGenre: "Drama",
    duration: "2h 15m",
    description:
      "A gripping tale of survival and redemption set in the bustling streets of Nairobi. When a young photographer witnesses a crime, he must navigate the dangerous underworld to protect his family and expose the truth. This intense thriller explores themes of corruption, family loyalty, and the price of justice in modern Kenya.",
    director: "Wanuri Kahiu",
    cast: ["John Sibi-Okumu", "Lupita Nyong'o", "Edi Gathegi", "Catherine Kamau", "Nick Mutuma"],
    language: "Swahili",
    country: "Kenya",
    ageRating: "16+",
    releaseDate: "March 15, 2024",
    awards: ["Best Cinematography - Kenya Film Festival 2024", "Audience Choice Award - Nairobi Film Festival"],
    plot: "Mwangi, a talented street photographer in Nairobi, accidentally captures evidence of a high-profile murder involving corrupt government officials. As he tries to do the right thing and expose the truth, he finds himself and his family targeted by dangerous forces. With the help of an investigative journalist and a reformed gang member, Mwangi must stay one step ahead of his pursuers while gathering enough evidence to bring the perpetrators to justice. The film showcases the vibrant culture of Nairobi while exploring the complex social and political challenges facing modern Kenya.",
    trivia: [
      "Filmed entirely on location in Nairobi over 45 days",
      "Features authentic Kenyan street photography techniques",
      "The lead actor spent 3 months learning photography for the role",
    ],
  },
  "2": {
    id: "2",
    title: "Kampuni",
    image: "/placeholder.svg?key=2zhp4",
    backdropImage: "/placeholder.svg?key=hero2",
    year: 2023,
    rating: 7.8,
    genre: "Comedy",
    subGenre: "Drama",
    duration: "1h 45m",
    description:
      "A hilarious workplace comedy about office politics in modern Nairobi. Follow the misadventures of employees at a struggling tech startup as they navigate corporate culture, romantic entanglements, and the challenge of keeping their company afloat.",
    director: "Philbert Ochieng",
    cast: ["Catherine Kamau", "Nick Mutuma", "Brenda Wairimu", "Pascal Tokodi", "Nini Wacera"],
    language: "English",
    country: "Kenya",
    ageRating: "13+",
    releaseDate: "August 22, 2023",
    awards: ["Best Comedy - African Movie Academy Awards 2024"],
    plot: "At Innovate Kenya, a small tech startup in Nairobi, chaos is the norm. CEO Sarah struggles to secure funding while dealing with her eccentric team of developers, marketers, and interns. When a major investor shows interest, the team must pull together to present their revolutionary app idea. But between romantic complications, technical disasters, and a rival company trying to steal their concept, success seems impossible. This heartwarming comedy celebrates the entrepreneurial spirit of young Kenyans while poking fun at startup culture.",
    trivia: [
      "Based on real experiences of Kenyan tech entrepreneurs",
      "Many scenes were improvised by the cast",
      "Features cameos from actual Kenyan tech industry leaders",
    ],
  },
}

// Related movies for recommendations
const relatedMovies = [
  {
    id: "3",
    title: "Nairobi Half Life",
    image: "/placeholder.svg?key=j8fyl",
    year: 2012,
    rating: 8.2,
    genre: "Drama • Crime",
    duration: "1h 36m",
  },
  {
    id: "4",
    title: "Rafiki",
    image: "/placeholder.svg?key=mcdp3",
    year: 2018,
    rating: 7.5,
    genre: "Romance • Drama",
    duration: "1h 23m",
  },
  {
    id: "5",
    title: "Pumzi",
    image: "/placeholder.svg?key=ba15t",
    year: 2009,
    rating: 7.9,
    genre: "Sci-Fi • Drama",
    duration: "21m",
  },
  {
    id: "6",
    title: "The First Grader",
    image: "/placeholder.svg?key=3p5kf",
    year: 2010,
    rating: 7.4,
    genre: "Biography • Drama",
    duration: "1h 43m",
  },
]

export default function MoviePage() {
  const params = useParams()
  const movieId = params.id as string

  const movie = movieData[movieId as keyof typeof movieData]

  if (!movie) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <MovieDetails movie={movie} />

      <div className="py-8">
        <MovieRow title="More Like This" movies={relatedMovies} />
      </div>
    </main>
  )
}
