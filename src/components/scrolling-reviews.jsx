"use client"

import { Star } from "lucide-react"
import review1 from "../assets/review-1.png"
import review2 from "../assets/review-2.png"
import review3 from "../assets/review-3.png"
import review4 from "../assets/review-4.png"
import review5 from "../assets/review-5.png"
import review6 from "../assets/reveiw-6.png"
import review7 from "../assets/review-7.png"
import review8 from "../assets/review-8.png"
import review9 from "../assets/review-9.png"
import review10 from "../assets/review-10.png"


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
  {
    id: 7,
    name: "Dermot Mulholland",
    avatar: review7,
    content: "Works very well - I had a small issue when I changed machine and the licence was stuck on the older machine - sent them a quick email with my original purchase details - and had a reply with the solution within a couple of hours - fair play considering it was the weekend - great service and great little extension.",
    rating: 5,
  },
  {
    id: 8,
    name: "Andy Bent",
    avatar: review8,
    content: "The prompt manager is underrated. I store my best prompts and reuse them instead of rewriting from scratch every time.",
    rating: 5,
  },
  {
    id: 9,
    name: "Benjamin Hutch",
    avatar: review9,
    content: "This extension genuinely made me more productive. Before, I'd waste time scrolling through Gemini chats, but now I just jump into the exact folder I need. Huge time saver",
    rating: 5,
  },
  {
    id: 10,
    name: "Leonard Luca",
    avatar: review10,
    content: "The one true feature that stopped me from migrating from ChatGPT to Gemini was the lack of ergonomics. this addon solved all my problems. Its intuitive and esthetically non-intrusive. If only I had this for the phone app...",
    rating: 5,
  },
]

const SLIDE_CLASS =
  "shrink-0 px-4 box-border w-[min(100vw-2rem,400px)] max-w-[400px]"

const ReviewCard = ({ name, avatar, content, rating }) => (
  <div className="p-6 rounded-lg shadow-lg w-full max-w-sm mb-4 featureBox">
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
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section id="reviews" className="overflow-hidden py-12 rounded-lg">
      <div
        className="reviews-marquee-track"
        style={{
          WebkitMask: "linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)",
          mask: "linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)",
        }}
      >
        {duplicatedReviews.map((review, index) => (
          <div key={`${review.id}-${index}`} className={SLIDE_CLASS}>
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ScrollingReviews

