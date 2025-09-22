"use client"

import { useParams, useRouter } from "next/navigation"
import { VideoPlayer } from "@/components/video-player"
import { notFound } from "next/navigation"

// Sample video data (in a real app, this would come from an API)
const videoData = {
  "1": {
    id: "1",
    title: "Click Click Bang",
    src: "/placeholder.mp4", // In a real app, this would be a proper video URL
    poster: "/placeholder.svg?key=0v66f",
    description: "A gripping tale of survival and redemption set in the bustling streets of Nairobi.",
  },
  "2": {
    id: "2",
    title: "Kampuni",
    src: "/placeholder.mp4",
    poster: "/placeholder.svg?key=2zhp4",
    description: "A hilarious workplace comedy about office politics in modern Nairobi.",
  },
}

export default function WatchPage() {
  const params = useParams()
  const router = useRouter()
  const movieId = params.id as string

  const video = videoData[movieId as keyof typeof videoData]

  if (!video) {
    notFound()
  }

  const handleClose = () => {
    router.back()
  }

  return (
    <div className="fixed inset-0 bg-black z-50">
      <VideoPlayer src={video.src} poster={video.poster} title={video.title} onClose={handleClose} autoPlay={true} />
    </div>
  )
}
