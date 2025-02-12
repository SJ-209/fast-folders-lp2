import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-7xl md:text-7xl font-bold mb-6">
          Organize Your Chats<br />Like Never Before
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Quickly create, organize and access chat folders for Google Gemini.<br/>
        Fast Folders: The Ultimate Google Gemini Chat Organizer!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
            Add to Chrome <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 border border-gray-300 rounded-lg hover:border-gray-400 flex items-center justify-center gap-2">
            <Github className="w-5 h-5" /> View on GitHub
          </button>
        </div>
        <div className="flex justify-center">
          <video
            controls
            type="video/mp4"
            src="src/assets/FF Demo.mov"
            alt="Dashboard Preview"
            className="rounded-lg shadow-2xl w-1/2 h-auto border-0"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;