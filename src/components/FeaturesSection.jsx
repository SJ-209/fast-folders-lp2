import React from 'react';
import { Zap, Search, Share2 } from 'lucide-react';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Fast Folders?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="w-6 h-6 text-blue-600" />}
            title="Lightning Fast"
            description="Instantly organize your chats by creating folders."
          />
          <FeatureCard
            icon={<Search className="w-6 h-6 text-blue-600" />}
            title="Smart Search"
            description="Find any folder or chat in seconds with our powerful search capabilities."
          />
          <FeatureCard
            icon={<Share2 className="w-6 h-6 text-blue-600" />}
            title="Easy Backups"
            description="Quick and easy import/export feature for backing up folder structures."
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;