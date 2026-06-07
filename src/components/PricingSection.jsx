import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/fast-folders-the-ultimate/dgmakhnmibfdnkhopleclbfmfncdmfhf';

// Image-inspired color palette (#53B175 green, #E6F7ED light green)
const CARD_STYLE = {
  green: '#4796e3',
  lightGreen: '#dce2e6',
  darkText: '#212836',
  buttonBg: '#212836',
};

function PricingCard({ title, price, features, buttonText, popular, info, tag, originalPrice, perUnit, billingInfo, monthlyCredits }) {
  const useImageStyle = true; // Both cards use the image-inspired style

  return (
    <div className={`
      relative flex flex-col rounded-xl p-3.5 sm:p-4 w-full max-w-[300px] md:max-w-[240px] lg:max-w-[260px]
      shadow-lg hover:shadow-xl
      transition-all duration-300 hover:-translate-y-1
      ${useImageStyle
        ? 'bg-white border-2'
        : 'bg-[var(--box-color)] border border-white/10'
      }
      ${popular ? 'md:scale-[1.01]' : ''}
    `}
    style={useImageStyle ? { borderColor: CARD_STYLE.green } : {}}
    >
      {popular && (
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
          <span
            className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-bold italic text-white"
            style={{ backgroundColor: CARD_STYLE.green }}
          >
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-3">
        {tag && useImageStyle && (
          <div
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium mb-2.5"
            style={{ backgroundColor: CARD_STYLE.lightGreen, color: CARD_STYLE.darkText }}
          >
            <Sparkles className="w-3 h-3" style={{ color: CARD_STYLE.green }} />
            {tag}
          </div>
        )}
        {!tag && <h3 className="text-lg font-bold text-[var(--primary-text-color)] mb-1">{title}</h3>}
        <div className="flex flex-wrap items-baseline gap-1">
          <span className={`text-2xl font-extrabold tracking-tight ${useImageStyle ? 'text-[#212836]' : 'text-[var(--primary-text-color)]'}`}>
            {price}
          </span>
          {perUnit && useImageStyle && (
            <span className="text-xs text-gray-500 ml-0.5">{perUnit}</span>
          )}
          {originalPrice && useImageStyle && (
            <span className="text-xs text-gray-500 line-through ml-1">{originalPrice}</span>
          )}
        </div>
        {billingInfo && useImageStyle && (
          <p className="text-xs text-gray-500 mt-1">{billingInfo}</p>
        )}
        {monthlyCredits && useImageStyle && (
          <div
            className="mt-2.5 py-2 px-2.5 rounded-lg flex items-center justify-center gap-1.5"
            style={{ backgroundColor: CARD_STYLE.lightGreen }}
          >
            <Sparkles className="w-3.5 h-3.5 flex-shrink-0" style={{ color: CARD_STYLE.green }} />
            <span className="text-xs font-medium" style={{ color: CARD_STYLE.darkText }}>
              <span className="font-bold">{monthlyCredits.count}</span> {monthlyCredits.label}
            </span>
          </div>
        )}
        {!monthlyCredits && !tag && <div className="h-1" />}
      </div>
      <ul className="space-y-1.5 mb-4 flex-1">
        {features.map((feature, index) => (
          <li key={index} className={`flex items-start gap-1.5 text-xs leading-snug ${useImageStyle ? 'text-[#212836]' : 'text-[var(--primary-text-color)]/90'}`}>
            {useImageStyle ? (
              <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: CARD_STYLE.green }}>
                <Check className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
              </span>
            ) : (
              <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-emerald-500" strokeWidth={2.5} />
              </span>
            )}
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="space-y-2">
        <a
          href={CHROME_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <button
            className={`
              w-full py-2 px-3 rounded-lg text-xs font-bold cursor-pointer hover:scale-105
              transition-all duration-200
              ${useImageStyle
                ? 'hover:opacity-90'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }
            `}
            style={useImageStyle ? { backgroundColor: CARD_STYLE.buttonBg, color: CARD_STYLE.green } : {}}
          >
            {buttonText}
          </button>
        </a>
        {info && (
          <p className={`text-xs text-center ${useImageStyle ? 'text-gray-500' : 'text-[var(--primary-text-color)]/60'}`}>
            {Array.isArray(info) ? info[0] : info}
          </p>
        )}
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-8 sm:py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-[1.65rem] font-bold text-center mb-1.5 text-[var(--primary-text-color)]">
          Simple, Transparent Pricing
        </h2>
        <p className="alt-text text-center mb-5 text-sm">
          <strong>All payments are made through Lemon Squeezy!</strong>
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center items-center max-w-4xl mx-auto">
          <PricingCard
            title="Basic"
            price="Free"
            monthlyCredits={{ count: "10", label: "Fast Folders" }}
            features={[
              "Create 10 Fast Folders",
              "Create nested folders up to 4 levels",
              "Add up to 10 chats in each folder",
              "Prompts Manager Access",
              "Change folder colors",
              "Search folders and chats",
              "Consistent updates"
            ]}
            info="Try it now"
            buttonText="Add to Chrome"
          />
          {/* <PricingCard
            // tag="Essential"
            price="$2.54"
            perUnit="/ month"
            originalPrice="$50"
            billingInfo="Billed $2.54 monthly"
            monthlyCredits={{ count: "Unlimited", label: "Folders & Chats" }}
            features={[
              "Access to all features",
              "Unlimited Fast Folders",
              "Create nested folders up to 4 levels",
              "Download chats to pdf",
              "Fast Folder Cloud",
              "Sync across multiple devices"
            ]}
            info="Try it now"
            buttonText="Add to Chrome"
          /> */}
          <PricingCard
            tag="For the efficient Individuals"
            price="$27"
            perUnit="/ year"
            originalPrice="$47.00"
            billingInfo="Billed $27.00 yearly"
            monthlyCredits={{ count: "Unlimited", label: "Folders & Chats" }}
            features={[
              "Access to all features",
              "Unlimited Fast Folders",
              "Create nested folders up to 4 levels",
              "Download chats to pdf",
              "Fast Folder Cloud",
              "Sync across multiple devices"
            ]}
            info="Try it now"
            buttonText="Add to Chrome"
            popular
          />
          <PricingCard
            tag="For the efficient Teams"
            price="$200"
            perUnit="/ year"
            originalPrice="$266"
            billingInfo="Billed yearly"
            monthlyCredits={{ count: "Unlimited", label: "Folders & Chats" }}
            features={[
              "10 licenses included for your team",
              "Save hours scrolling through chats",
              "Priority support",
              "Access to all features",
              "Unlimited Fast Folders",
              "Create nested folders up to 4 levels",
              "Download chats to pdf",
              "Fast Folder Cloud",
              "Sync across multiple devices"
            ]}
            info="Try it now"
            buttonText="Add to Chrome"
          />
        </div>
      </div>
    </section>
  );
}

export default PricingSection;