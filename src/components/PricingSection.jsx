import React from 'react';
import { Check } from 'lucide-react';

function PricingCard({ title, price, features, buttonText, highlighted }) {
  return (
    <div className={`p-6 rounded-lg ${highlighted
      ? 'bg-[linear-gradient(45deg,_#4796e3_20%,_#9177c7_50%,_#ca6673_85%)]  text-white ring-4 shadow-l ring-blue-300'
      : 'bg-white shadow-lg'
      }`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Custom' && price !== 'Free' && <span className="text-sm"></span>}
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {/* <a
        href="https://chromewebstore.google.com/detail/fast-folders-the-ultimate/dgmakhnmibfdnkhopleclbfmfncdmfhf"
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Security best practice
          >
      <button className={`w-full py-2 rounded-lg ${highlighted
        ? 'bg-white text-blue-600 hover:bg-gray-100'
        : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}>
        {buttonText}
      </button>
        </a> */}
    </div>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Basic"
            price="Free"
            features={[
              "Create 3 Fast Folders",
              "Create nested folders upto 4 levels",
              "Add up to 5 chats in each folder",
              "Change folder colors",
              "Search folders and chats",
              "Email support",
              "Consistent updates"
            ]}
            // buttonText="Add to Chrome"
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
              "Customizable Settings Access",
              "Import/Export Data",
              "Settings functionality",
              "Email Support",
              "Consistent updates"
            ]}
            // buttonText="Add to Chrome"
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