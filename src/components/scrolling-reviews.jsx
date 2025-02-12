"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Helen",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20at%2022.26.45-lcrlQ0d74qIg2yfFp0zZo2UUJyzL1t.png",
    content: "A great tool for ChatGPT power users.",
    rating: 5,
  },
  {
    id: 1,
    name: "Helen",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20at%2022.26.45-lcrlQ0d74qIg2yfFp0zZo2UUJyzL1t.png",
    content: "A great tool for ChatGPT power users.",
    rating: 5,
  },
  {
    id: 1,
    name: "Helen",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20at%2022.26.45-lcrlQ0d74qIg2yfFp0zZo2UUJyzL1t.png",
    content: "A great tool for ChatGPT power users.",
    rating: 5,
  },
  {
    id: 1,
    name: "Helen",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20at%2022.26.45-lcrlQ0d74qIg2yfFp0zZo2UUJyzL1t.png",
    content: "A great tool for ChatGPT power users.",
    rating: 5,
  },
  // ... (other reviews)
]

const ReviewCard = ({ name, avatar, content, rating }) => (
  <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mb-4">
    <div className="flex items-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-700 mb-4">{content}</p>
    <div className="flex items-center">
      <img src={avatar || "/placeholder.svg"} alt={name} className="w-10 h-10 rounded-full mr-4" />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500 flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Verified review
        </p>
      </div>
    </div>
  </div>
)

const ScrollingReviews = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    console.log("ScrollingReviews component mounted")
    const intervalId = setInterval(() => {
      setScrollPosition((prevPosition) => (prevPosition + 1) % (reviews.length * 100))
    }, 50)

    return () => clearInterval(intervalId)
  }, [])

  console.log("Rendering ScrollingReviews, scrollPosition:", scrollPosition)

  return (
    <div className="w-full overflow-hidden bg-gray-80 py-12 rounded-lg">
      <div
        className="flex"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          width: `${reviews.length * 400}px`,
        }}
      >
        {reviews.map((review) => (
          <div key={review.id} className="px-4" style={{ flex: "0 0 400px" }}>
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollingReviews

