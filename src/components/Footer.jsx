import React, { useState } from 'react';

function Footer() {
  const [faqItems, setFaqItems] = useState([
    {
      question: "Is my data safe with Fast Folders?",
      answer: "Yes! We take security very seriously. Your conversation data is stored on your local machine and never leaves your computer.",
      isOpen: false,
    },
    {
      question: "How do I install Fast Folders?",
      answer: "You can install Fast Folders from the Chrome Web Store.",
      isOpen: false,
    },
    {
      question: "What do I get for free with Fast Folders",
      answer: "The free version of Fast Folders gives you access to create 3 folders and add 3 chats to each folder.",
      isOpen: false,
    },
    {
      question: "Will Fast Folders be available on other browsers?",
      answer: "We are currently working on a Firefox version of Fast Folders. Stay tuned!",
      isOpen: false,
    },
    {
      question: "How do I contact Fast Folders support?",
      answer: "Reachout to us fastfolders@protonmail.com.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    const newFaqItems = [...faqItems];
    newFaqItems[index].isOpen = !newFaqItems[index].isOpen;
    setFaqItems(newFaqItems);
  };

  return (
    <footer id="faq" className=" bg-gray-100 text-black py-12 w-full">
      <div className="container mx-auto px-4">
        <div className=" gap-8">
          <div className=" justify-center"> {/* Center the content */}
            <div className="faq w-full mb-8 flex justify-center"> {/* Added w-full */}
              {/* <span className="font-bold text-xl mr-2">FAQ</span> */}
              <span className="font-bold text-4xl">Frequently Asked Questions</span>
            </div>
            <div className="questions">
                {faqItems.map((item, index) => (
                  <div key={index} className="mb-2 mr-4">
                    <button
                      className="text-left w-full py-2 px-4 rounded font-semibold hover:bg-gray-200 transition duration-300"
                      onClick={() => toggleFAQ(index)}
                    >
                      {item.question}
                    </button>
                    {item.isOpen && (
                      <div className="mt-2 px-4 text-gray-600 break-words">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
          </div>
          <div>
            {/* <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
            </ul> */}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Fast Folders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;