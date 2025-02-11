import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <img
            src="src/assets/ffmain.jpeg"
            alt="Dashboard Preview"
            className="rounded-lg shadow-2xl w-10, h-10"
            />
          <span className="font-bold text-xl">Fast Folders</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
        </nav>
        <div className="flex items-center gap-4">
          {/* <button className="px-4 py-2 text-blue-600 hover:text-blue-700">Download</button> */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Download
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;