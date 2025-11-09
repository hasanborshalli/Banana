import React from 'react';
import { BananaIcon } from 'lucide-react';
export function Hero() {
  return <div className="w-full bg-yellow-400 py-20 px-4 md:px-8 flex flex-col items-center justify-center text-center">
      <div className="animate-bounce mb-6">
        <BananaIcon size={64} className="text-yellow-600" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-yellow-800 mb-4">
        The A-peel-ing World of Bananas
      </h1>
      <p className="text-xl md:text-2xl text-yellow-700 max-w-2xl mx-auto">
        A bunch of information that will drive you bananas!
      </p>
      <a href="#history" className="mt-8 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
        Go Bananas!
      </a>
    </div>;
}