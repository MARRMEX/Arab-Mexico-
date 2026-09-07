import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutService } from './components/AboutService';
import { DiscoverMexico } from './components/DiscoverMexico';
import { MiniTravelGuide } from './components/MiniTravelGuide';
import { PersonalizedPlanning } from './components/PersonalizedPlanning';
import { Services } from './components/Services';
import { PrivateAssistance } from './components/PrivateAssistance';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { Founder } from './components/Founder';
import { ArabicSection } from './components/ArabicSection';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col selection:bg-amber-800 selection:text-white overflow-x-hidden font-sans">
      {/* Sticky Header with Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <AboutService />
        <DiscoverMexico />
        <MiniTravelGuide />
        <PersonalizedPlanning />
        <Services />
        <PrivateAssistance />
        <WhyChooseUs />
        <HowItWorks />
        <Founder />
        <ArabicSection />
        <ContactCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Quick-Contact */}
      <FloatingWhatsApp />
    </div>
  );
}
