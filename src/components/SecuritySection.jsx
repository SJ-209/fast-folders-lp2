import React from 'react';
import { Shield, Check } from 'lucide-react';

function SecuritySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Shield className="w-12 h-12 text-blue-600 mb-6" />
            <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Security</h2>
            <p className="text-gray-600 mb-8">
              Your data security is our top priority. We use industry-leading encryption
              and security measures to keep your files safe and protected.
            </p>
            <ul className="space-y-4">
              {[
                "End-to-end encryption",
                "SOC 2 Type II compliant",
                "GDPR compliant",
                "Regular security audits"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
              alt="Security"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecuritySection;