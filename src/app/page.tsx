"use client";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HeroScroll from "@/components/HeroScroll";
import VideoScrollSequence from "@/components/VideoScrollSequence";
import Stats from "@/components/Stats";
import TextDivider from "@/components/TextDivider";
import MarketExpertise from "@/components/MarketExpertise";
import FeaturedProperties from "@/components/FeaturedProperties";
import Communities from "@/components/Communities";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { VideoPlayer } from "@/components/ui/video-player";
import { XCard } from "@/components/ui/x-gradient-card";

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="overflow-x-hidden w-full">
        <Hero />
        <HeroScroll />
        <VideoScrollSequence />
        <Stats />
        <TextDivider />
        <MarketExpertise />
        <FeaturedProperties />
        <Communities />
        <Testimonials />
        <WhyChoose />
        <Process />
        
        {/* End of Page Showcases */}
        <section className="py-24 bg-background">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-32">
            
            {/* Cinematic Video Override */}
            <div>
              <div className="text-center mb-12">
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl tracking-tighter mb-4">Exceptional Properties</h2>
                <p className="text-muted">A cinematic look at Cabo real estate.</p>
              </div>
              <VideoPlayer src="/cabo-home-guide.mp4" />
            </div>

            {/* Social Proof X Card */}
            <div>
              <div className="text-center mb-12">
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl tracking-tighter mb-4">Industry Recognition</h2>
              </div>
              <div className="flex justify-center flex-wrap gap-8">
                <XCard 
                   authorName="Real Estate Insider"
                   authorHandle="re_insider"
                   authorImage="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                   content={[
                      "Enrique Vazquez continues to redefine the luxury market in Los Cabos.",
                      "With exclusive listings in Pedregal and unmatched localized expertise, the bar has been raised.",
                      "An absolute masterclass in coastal real estate."
                   ]}
                   timestamp="Oct 24, 2025"
                />
              </div>
            </div>

          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
