import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/fast-folders-the-ultimate/dgmakhnmibfdnkhopleclbfmfncdmfhf';

function PricingCard({ title, price, features, buttonText, popular, info }) {
  return (
    <div className={`
      relative flex flex-col rounded-xl p-4 sm:p-5 w-full max-w-[320px]
      bg-[var(--box-color)]
      border border-white/10
      shadow-xl hover:shadow-2xl
      transition-all duration-300 hover:-translate-y-1
      ${popular ? 'ring-2 ring-[var(--alternate-text-color)] sm:scale-[1.02]' : ''}
    `}>
      {popular && (
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--alternate-text-color)]/20 text-[var(--alternate-text-color)] border border-[var(--alternate-text-color)]/30">
            <Sparkles className="w-3 h-3" />
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-[var(--primary-text-color)] mb-1">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl sm:text-3xl font-extrabold text-[var(--primary-text-color)] tracking-tight">
            {price}
          </span>
        </div>
      </div>
      <ul className="space-y-2 mb-5 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--primary-text-color)]/90">
            <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Check className="w-2.5 h-2.5 text-emerald-500" strokeWidth={2.5} />
            </span>
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
          <button className={`
            w-full py-2.5 px-4 rounded-lg text-sm font-semibold
            transition-all duration-200
            ${popular
              ? 'bg-[var(--alternate-text-color)] hover:opacity-90 text-white shadow-lg shadow-[var(--alternate-text-color)]/25'
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
            }
          `}>
            {buttonText}
          </button>
        </a>
        {info && (
          <p className="text-xs text-center text-[var(--primary-text-color)]/60">
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
            title="Premium Subscription"
            price="$47 per year"
            features={[
              "Unlimited Fast Folders",
              "Unlimited chats",
              "Fast Folder Cloud Sync",
              "Sync across multiple devices",
              "Create nested folders up to 4 levels",
              "Prompts Manager Access",
              "Download chats to pdf",
              "Customizable Settings Access",
              "Import/Export Data",
              "Settings functionality",
              "Email Support",
              "Consistent updates"
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