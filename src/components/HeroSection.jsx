import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import '../styles/HeroSection.css'

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gray-80">
      <div className="container mx-auto text-center">
        <h1 className="organizeChats  font-bold mb-6 text-black">
          Organize Your Chats<br />Like <span className='text-[#4796e3]'>Never</span> Before
        </h1>
        <p className="middleText text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Quickly create, organize and access chat folders for Google Gemini.<br/>
        Fast Folders: The Ultimate Google Gemini Chat Organizer! Available now in the Google Chrome store and Microsoft Edge addons.
        </p>
        <div className="flex flex-col sm:flex-row gap-12 justify-center mb-12">
          <a
            href="https://chromewebstore.google.com/detail/fast-folders-the-ultimate/dgmakhnmibfdnkhopleclbfmfncdmfhf"
            className="px-8 py-4 bg-[linear-gradient(45deg,_#4796e3_20%,_#9177c7_50%,_#ca6673_85%)] text-white rounded-lg hover:scale-110 transform transition duration-500 flex items-center justify-center gap-2 pulsingButton"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            Add to Chrome
          </a>
          <a
            href="https://microsoftedge.microsoft.com/addons/detail/google-gemini-folders-c/cgligfihhfhhcjbjadfnlgjcejgjjmlp"
            className="px-8 py-4 bg-[linear-gradient(45deg,_#4796e3_20%,_#9177c7_50%,_#ca6673_85%)] text-white rounded-lg hover:scale-110 transform transition duration-500 flex items-center justify-center gap-2 pulsingButton"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            Add to Edge
          </a>
        </div>
        <div id="video" className="flex justify-center">
          <iframe
            width="960"
            height="540"
            src="https://www.youtube.com/embed/pX3Lep7Os18"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;