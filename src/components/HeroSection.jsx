import React from 'react';
// import { ArrowRight, Github } from 'lucide-react';

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="organizeChats  font-bold mb-6">
        The Folders Google Gemini <br /> <span className='text-[#4796e3]'>Forgot</span> to build
        </h1>
        <p className="middleText text-xl mb-8 max-w-2xl mx-auto">
        Stop scrolling through hundreds of Gemini chats<br/>
        Join 8,000+ users who organise their AI workspace with Fast Folders free to install.
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
            src="https://www.youtube.com/embed/ni1nDaHCFJg?si=xLyo9nL8wQh694Bs"
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
