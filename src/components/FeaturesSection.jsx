import React from 'react';
import { Grip, Search, Share2, FolderPlus, FolderPen, MessageCircle } from 'lucide-react';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-lg shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Fast Folders?</h2>
        <div className="grid md:grid-cols-3 features gap-8">
          <FeatureCard
            icon={<Grip className="w-6 h-6 text-blue-400" />}
            title="Drag and Drop"
            description="Easily drag and drop chats into folders for quick organization."
          />
          <FeatureCard
            icon={<Search className="w-6 h-6 text-blue-400" />}
            title="Smart Search"
            description="Find any folder or chat in seconds with our powerful search capabilities."
          />
          <FeatureCard
            icon={<Share2 className="w-6 h-6 text-blue-400" />}
            title="Easy Backups"
            description="Quick and easy import/export feature for backing up folder structures."
          />
          <FeatureCard
            icon={<FolderPlus className="w-6 h-6 text-blue-400" />}
            title="Add folders and chats"
            description="Quickly create folders and add chats to them."
          />
          <FeatureCard
            icon={<FolderPen className="w-6 h-6 text-blue-400" />}
            title="Change folder color"
            description="Assign any color to a folder for quicker locating."
          />
          <FeatureCard
            icon={<MessageCircle className="w-6 h-6 text-blue-400" />}
            title="Prompts Manager"
            description="Manage your prompts with ease. Create, edit, and delete prompts as needed."
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;