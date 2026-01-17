import React from 'react';
import { BadgeCheck } from 'lucide-react';

function PricingCard({ title, price, features, buttonText, highlighted, info }) {
  return (
    <div className={`p-2 rounded-lg ${highlighted
      ? 'bg-white ring-8 shadow-l ring-gray-300'
      : 'bg-white shadow-lg'
      }`}>
      <h3 className="text-lg text-gray-600 font-bold mb-1">{title}</h3>
      <div className="mb-2">
        <span className="text-2xl font-bold text-gray-800">{price}</span>
      </div>
      <ul className="space-y-1 mb-2 text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <BadgeCheck className="w-4 h-4 bg-green-300 rounded-lg opacity-50" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <a
          href="https://chromewebstore.google.com/detail/fast-folders-the-ultimate/dgmakhnmibfdnkhopleclbfmfncdmfhf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={`w-half justify-center p-2 py-1 rounded-lg ${highlighted
            ? 'bg-black text-white cursor-pointer'
            : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}>
            {buttonText}
          </button>
        </a>
      </div>
      {info && <p className="text-xs flex justify-center text-gray-500 mt-2">{info}</p>}
    </div>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-8 bg-gray-80">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Simple, Transparent Priceing</h2>
        <h3 className="text-center text-gray-600 mb-8">All payments are made through Lemon Squeezy!</h3>
        <div className="flex flex-wrap gap-10 justify-center">
          <PricingCard
            title="Basic"
            price="Free"
            features={[
              "Create 5 Fast Folders",
              "Create nested folders upto 4 levels",
              "Add up to 10 chats in each folder",
              "Download chats to pdf",
              "Change folder colors",
              "Search folders and chats",
              "Email support",
              "Consistent updates"
            ]}
            info={[
              "Try it now"
            ]}
            buttonText="Add to Chrome"
            highlighted={true}
          />
          <PricingCard
            title="Pro (limited time)"
            price="$15"
            features={[
              "Unlimited Fast Folders",
              "Unlimited chats",
              "Create nested folders upto 4 levels",
              "Prompts Manager Access",
              "Download chats to pdf",
              "Customizable Settings Access",
              "Import/Export Data",
              "Settings functionality",
              "Email Support",
              "Consistent updates"
            ]}
            info={[
              "Try it now"
            ]}
            buttonText="Add to Chrome"
            highlighted={true}
          />
          {/* <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "Everything in Pro",
              "Custom integration",
              "Dedicated support",
              "SLA guarantee",
              "Advanced security"
            ]}
            buttonText="Contact Sales"
            highlighted={false}
          /> */}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;