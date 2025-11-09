import React from 'react';
import { HeartIcon, BananaIcon } from 'lucide-react';
export function Footer() {
  return <footer className="w-full py-8 px-4 bg-yellow-400 text-yellow-800">
      <div className="max-w-4xl mx-auto text-center">
        <BananaIcon className="w-10 h-10 mx-auto mb-4" />
        <p className="text-lg font-medium mb-2">
          Thanks for going bananas with us!
        </p>
        <p className="flex items-center justify-center gap-2 text-sm">
          Made with <HeartIcon className="w-4 h-4 text-red-500" /> and potassium
        </p>
        <p className="mt-6 text-sm">
          © {new Date().getFullYear()} The Republic of Bananas. This site is
          completely bananas.
        </p>
      </div>
    </footer>;
}