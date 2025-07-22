"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import review1 from "../assets/review-1.png"
import review2 from "../assets/review-2.png"
import review3 from "../assets/review-3.png"
import review4 from "../assets/review-4.png"
import review5 from "../assets/review-5.png"
import review6 from "../assets/reveiw-6.png"

const reviews = [
  {
    id: 1,
    name: "לירן בלומנברג",
    avatar: review1,
    content: "Fast Folders is a must-have for Google Gemini users! 🗂 Quickly organize chats, access them easily, and save time. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Alexander Gerber",
    avatar: review2,
    content: "Great organizational tool, recommend to all!",
    rating: 5,
  },
  {
    id: 3,
    name: "Nicolas Caplat",
    avatar: review3,
    content: "Ahhhhhh finally ! exactly what I was looking for. For now it's perfect for my needs. Thanks !However, it would be great to be able to move a discussion from a folder to another. I hope the author will continue developping it.",
    rating: 4,
  },
  {
    id: 4,
    name: "Luis Li",
    avatar: review4,
    content: "Great idea, this is something missing in Gemini, and this extension allows you to do it flawlessly.",
    rating: 4,
  },
  {
    id: 5,
    name: "Fabian Pfeiffer",
    avatar: review5,
    content: "First of all, thank you very much for creating Fast Folders! I find it incredibly helpful for organizing my Google Gemini chats and really appreciate the functionality you've provided, I think Fast Folders is fantastic.",
    rating: 5,
  },
  {
    id: 6,
    name: "Jude Zambarakji",
    avatar: review6,
    content: "Excellent layout and design. I use another Chrome extension for creating folders for ChatGPT, but this Gemini folder creator is much more beautiful, and it has the additional functionality of creating subfolders and giving folders colors. This app's designer has a keen eye for detail.",
    rating: 5,
  },
  
]

const ReviewCard = ({ name, avatar, content, rating }) => (
  <div id="reviews" className="p-6 rounded-lg shadow-lg max-w-sm mb-4 featureBox">
    <div className="flex items-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className=" mb-4">{content}</p>
    <div className="flex items-center">
      <img src={avatar || "/placeholder.svg"} alt={name} className="w-10 h-10 rounded-full mr-4" />
      <div>
        <p className="font-semibold ">{name}</p>
        <p className="text-sm flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Verified review Chrome Webstore
        </p>
      </div>
    </div>
  </div>
)

const ScrollingReviews = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  
  // Duplicate the reviews array to create a seamless loop
  const duplicatedReviews = [...reviews, ...reviews]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScrollPosition((prevPosition) => {
        // Reset position when we reach the end of the original reviews
        if (prevPosition >= reviews.length * 400) {
          return 0
        }
        return prevPosition + 1
      })
    }, 50)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="overflow-hidden py-12 rounded-lg">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          width: `${duplicatedReviews.length * 400}px`,
          WebkitMask: "linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)",
          mask: "linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)"
        }}
      >
        {duplicatedReviews.map((review, index) => (
          <div key={`${review.id}-${index}`} className="px-4" style={{ flex: "0 0 400px" }}>
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollingReviews

