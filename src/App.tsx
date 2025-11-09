import React from 'react';
import { Hero } from './components/Hero';
import { History } from './components/History';
import { FunFacts } from './components/FunFacts';
import { Gallery } from './components/Gallery';
import { BananaTypes } from './components/BananaTypes';
import { Footer } from './components/Footer';
export function App() {
  return <div className="bg-yellow-50 w-full min-h-screen">
      <Hero />
      <History />
      <FunFacts />
      <Gallery />
      <BananaTypes />
      <Footer />
    </div>;
}