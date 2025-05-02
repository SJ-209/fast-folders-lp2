"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import review1 from "../assets/review-1.png"
import review2 from "../assets/review-2.png"
import review3 from "../assets/review-3.png"
import review4 from "../assets/review-4.png"

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
  // {
  //   id: 1,
  //   name: "Helen",
  //   avatar:
  //     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20at%2022.26.45-lcrlQ0d74qIg2yfFp0zZo2UUJyzL1t.png",
  //   content: "A great tool for ChatGPT power users.",
  //   rating: 5,
  // },
  // ... (other reviews)
]

const ReviewCard = ({ name, avatar, content, rating }) => (
  <div className="p-6 rounded-lg shadow-lg max-w-sm mb-4 featureBox">
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
  // Comment out the scrolling logic
  // const [scrollPosition, setScrollPosition] = useState(0)

  // useEffect(() => {
  //   console.log("ScrollingReviews component mounted")
  //   const intervalId = setInterval(() => {
  //     setScrollPosition((prevPosition) => (prevPosition + 1) % (reviews.length * 100))
  //   }, 50)

  //   return () => clearInterval(intervalId)
  // }, [])

  // console.log("Rendering ScrollingReviews, scrollPosition:", scrollPosition)

  return (
    <div className=" overflow-hidden py-12 rounded-lg">
      {/* Comment out the scrolling container */}
      {/* <div
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
      </div> */}
      {/* Display the reviews in a static grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reviews.map((review) => (
          <div key={review.id} className="px-4">
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollingReviews

