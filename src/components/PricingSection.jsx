import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/fast-folders-the-ultimate/dgmakhnmibfdnkhopleclbfmfncdmfhf';

// Image-inspired color palette (#53B175 green, #E6F7ED light green)
const CARD_STYLE = {
  green: '#53B175',
  lightGreen: '#E6F7ED',
  darkText: '#212836',
  buttonBg: '#212836',
};

function PricingCard({ title, price, features, buttonText, popular, info, tag, originalPrice, perUnit, billingInfo, monthlyCredits }) {
  const useImageStyle = true; // Both cards use the image-inspired style

  return (
    <div className={`
      relative flex flex-col rounded-2xl p-4 sm:p-5 w-full max-w-[320px]
      shadow-lg hover:shadow-xl
      transition-all duration-300 hover:-translate-y-1
      ${useImageStyle
        ? 'bg-white border-2'
        : 'bg-[var(--box-color)] border border-white/10'
      }
      ${popular ? 'sm:scale-[1.02]' : ''}
    `}
    style={useImageStyle ? { borderColor: CARD_STYLE.green } : {}}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold italic text-white"
            style={{ backgroundColor: CARD_STYLE.green }}
          >
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-4">
        {tag && useImageStyle && (
          <div
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium mb-3"
            style={{ backgroundColor: CARD_STYLE.lightGreen, color: CARD_STYLE.darkText }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: CARD_STYLE.green }} />
            {tag}
          </div>
        )}
        {!tag && <h3 className="text-lg font-bold text-[var(--primary-text-color)] mb-1">{title}</h3>}
        <div className="flex flex-wrap items-baseline gap-1">
          <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${useImageStyle ? 'text-[#212836]' : 'text-[var(--primary-text-color)]'}`}>
            {price}
          </span>
          {perUnit && useImageStyle && (
            <span className="text-sm text-gray-500 ml-0.5">{perUnit}</span>
          )}
          {originalPrice && useImageStyle && (
            <span className="text-sm text-gray-500 line-through ml-1">{originalPrice}</span>
          )}
        </div>
        {billingInfo && useImageStyle && (
          <p className="text-xs text-gray-500 mt-1">{billingInfo}</p>
        )}
        {monthlyCredits && useImageStyle && (
          <div
            className="mt-3 py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5"
            style={{ backgroundColor: CARD_STYLE.lightGreen }}
          >
            <Sparkles className="w-4 h-4 flex-shrink-0" style={{ color: CARD_STYLE.green }} />
            <span className="text-sm font-medium" style={{ color: CARD_STYLE.darkText }}>
              <span className="font-bold">{monthlyCredits.count}</span> {monthlyCredits.label}
            </span>
          </div>
        )}
        {!monthlyCredits && !tag && <div className="h-1" />}
      </div>
      <ul className="space-y-2.5 mb-5 flex-1">
        {features.map((feature, index) => (
          <li key={index} className={`flex items-start gap-2 text-xs sm:text-sm ${useImageStyle ? 'text-[#212836]' : 'text-[var(--primary-text-color)]/90'}`}>
            {useImageStyle ? (
              <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: CARD_STYLE.green }}>
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
              w-full py-2.5 px-4 rounded-lg text-sm font-bold
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
    <section id="pricing" className="py-10 sm:py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-[var(--primary-text-color)]">
          Simple, Transparent Pricing
        </h2>
        <p className="alt-text text-center mb-8 text-sm sm:text-base">
          All payments are made through Lemon Squeezy!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center items-center max-w-3xl mx-auto">
          <PricingCard
            title="Basic"
            price="Free"
            monthlyCredits={{ count: "7", label: "Fast Folders" }}
            features={[
              "Create 7 Fast Folders",
              "Create nested folders up to 4 levels",
              "Add up to 10 chats in each folder",
              "Download chats to pdf",
              "Prompts Manager Access",
              "Change folder colors",
              "Search folders and chats",
              "Email support",
              "Consistent updates"
            ]}
            info="Try it now"
            buttonText="Add to Chrome"
          />
          <PricingCard
            tag="Essential"
            price="$47"
            perUnit="/ year"
            originalPrice="$99"
            billingInfo="Billed $47.00 yearly"
            monthlyCredits={{ count: "Unlimited", label: "Folders & Chats" }}
            features={[
              "Access to all features",
              "Unlimited Fast Folders",
              "Fast Folder Cloud",
              "Sync across multiple devices"
            ]}
            info="Try it now"
            buttonText="Add to Chrome"
            popular
          />
        </div>
      </div>
    </section>
  );
}

export default PricingSection;