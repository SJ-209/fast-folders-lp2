import React from 'react';
import logo from '../assets/ff3-main.jpg';
import ThemeSwitch from './ThemeSwitch';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <img
            src={logo}
            alt="Fast Folders Logo"
            className="rounded-lg shadow-2xl w-10, h-10"
            />
          <span className="font-bold text-xl">Fast Folders</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className=" hover:text-blue-900">Features</a>
          <a href="#video" className=" hover:text-blue-900">Video</a>
          <a href="#pricing" className=" hover:text-blue-900">Pricing</a>
          <a href="#faq" className=" hover:text-blue-900">FAQ</a>
          <ThemeSwitch />
        </nav>
        <div className="flex items-center gap-4">
          {/* <button className="px-4 py-2 text-blue-600 hover:text-blue-700">Download</button> */}
          <button className="px-4 py-2 bg-[linear-gradient(45deg,_#4796e3_20%,_#9177c7_50%,_#ca6673_85%)] text-white rounded-lg hover:scale-110 transform transition duration-500">
          <a
            href="https://chromewebstore.google.com/detail/fast-folders-the-ultimate/dgmakhnmibfdnkhopleclbfmfncdmfhf"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            Download
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;