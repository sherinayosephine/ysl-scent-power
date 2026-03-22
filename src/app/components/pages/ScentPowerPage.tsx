import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const scentNotes = [
  {
    name: "FLORENT",
    subtitle: "Radiant Floral",
    image: "https://images.unsplash.com/photo-1760445528267-25140a7bd31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJnYW1vdCUyMGNpdHJ1cyUyMGluZ3JlZGllbnRzJTIwZnJlc2h8ZW58MXx8fHwxNzcyMTMyNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    top: "Bergamot FCF, Petitgrain, Sweet Orange",
    mid: "Rose Absolute, Ylang Ylang, Peach Lactone",
    base: "Sandalwood, Cedarwood, Ambrettolide",
    keywords: "Radiant, Structured, Luminous, Elegant",
  },
  {
    name: "MINÉRALEWAVE",
    subtitle: "Purified Aquatic",
    image: "https://images.unsplash.com/photo-1769274971865-9a8d447138fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdGVyJTIwbWluZXJhbCUyMGFxdWF0aWN8ZW58MXx8fHwxNzcyMTMyNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    top: "Bergamot, Lemon FCF, Ginger CO2",
    mid: "Orange Blossom, Green Tea Absolute, Rosemary",
    base: "Vetiver, Sandalwood, Ambrettolide",
    keywords: "Clean, Architectural, Balanced, Deep",
  },
  {
    name: "VECTOR",
    subtitle: "Directional Spicy",
    image: "https://images.unsplash.com/photo-1665918973111-f665c2b7f367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBlcHBlciUyMHNwaWNlcyUyMGV4b3RpY3xlbnwxfHx8fDE3NzIxMzI1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    top: "Orange Blossom, Pink Pepper CO2, Bergamot",
    mid: "Cypriol, Patchouli, Clove Fraction",
    base: "Vanilla CO2, Cedarwood, Vetiver",
    keywords: "Sharp, Modern, Confident, Defined",
  },
  {
    name: "AETHER",
    subtitle: "Elevated Aromatic",
    image: "https://images.unsplash.com/photo-1749803848970-0824922db673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGZpZWxkJTIwcHVycGxlJTIwYXJvbWF0aWN8ZW58MXx8fHwxNzcyMTMyNTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    top: "Bergamot, Lemon, Lavender",
    mid: "Green Tea, Geranium, Clary Sage",
    base: "Vetiver, Cedarwood, Ambrettolide",
    keywords: "Airy, Refined, Lifted, Transparent",
  },
  {
    name: "BLANC",
    subtitle: "Refined White Tea",
    image: "https://images.unsplash.com/photo-1597884324124-3762b80c703c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRlYSUyMGxlYXZlcyUyMG1pbmltYWx8ZW58MXx8fHwxNzcyMTMyNTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    top: "Earl Grey Extract, Bergamot FCF, White Pepper CO2",
    mid: "White Tea Absolute, Jasmine, Champaka, Neroli",
    base: "Sandalwood, Vetiver, Ambrettolide",
    keywords: "Pure, Calm, Refined, Modern",
  },
  {
    name: "NEROLI",
    subtitle: "Green Floral",
    image: "https://images.unsplash.com/photo-1590958886689-f53ccd8712d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXNtaW5lJTIwZmxvd2VycyUyMGdyZWVuJTIwc3ByaW5nfGVufDF8fHx8MTc3MjEzMjU4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    top: "Bergamot, Magnolia Absolute, Coriander Seed",
    mid: "Jasmine Sambac, Mimosa Absolute, Orange Blossom",
    base: "Benzyl Benzoate, Ambrettolide",
    keywords: "Fresh, Vibrant, Polished, Alive",
  },
];

export function ScentPowerPage() {
  const [activeNote, setActiveNote] = useState(0);
  const [journeyStep, setJourneyStep] = useState(0);

  const activeScent = scentNotes[activeNote];

  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/YSL SCENT POWER.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4 md:px-8 w-full max-w-5xl">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-6 md:mb-8 tracking-tight leading-tight"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            UNLEASH YOUR SCENT POWER:
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-4 md:mt-8 font-light tracking-wider">THE ART OF LAYERING</span>
          </h1>
          <a
            href="#innovation-section"
            className="bg-[#C2813F] text-black px-6 md:px-12 py-3 md:py-4 hover:bg-[#d49550] transition-colors inline-flex items-center gap-2 md:gap-3 mx-auto group text-xs sm:text-sm md:text-base cursor-pointer"
          >
            DISCOVER THE INNOVATION
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Innovation Section (Always Visible) */}
      <section id="innovation-section" className="py-16 md:py-20 px-4 md:px-12 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Part 1: Vending Machine */}
          <h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center mb-10 md:mb-16 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            2 IN 1 VENDING MACHINE
          </h2>

          {/* Vending Machine Video */}
          <div className="w-full mb-12 md:mb-16 shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto max-h-[50vh] md:max-h-[70vh] object-cover rounded-lg border border-white/10"
            >
              <source src="/asset/vending.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-20 md:mb-32">
            {/* Side A: YSL Scent Power */}
            <div className="space-y-6">
              <img
                src="/asset/removebg-power scent.png"
                alt="YSL Scent Power Machine"
                className="w-full h-64 sm:h-80 md:h-96 object-contain md:object-cover"
              />
              <h3
                className="text-2xl sm:text-3xl md:text-4xl text-[#C2813F]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                YSL Scent Power
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#C2813F]/15 to-transparent p-5 md:p-6 border-l-4 border-[#C2813F] rounded-r-lg">
                  <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#C2813F] mb-2 md:mb-3">Layering Experience</p>
                  <p className="text-white text-base md:text-lg leading-relaxed">
                    Master the art of fragrance blending. Combine 6 exclusive layering notes to create your signature scent with infinite possibilities.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#C2813F]/15 to-transparent p-5 md:p-6 border-l-4 border-[#C2813F] rounded-r-lg">
                  <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#C2813F] mb-2 md:mb-3">Private Consultation</p>
                  <p className="text-white text-base md:text-lg leading-relaxed">
                    Expert guidance tailored to you. Discover your perfect fragrance identity through personalized consultation and refinement.
                  </p>
                </div>
              </div>
            </div>

            {/* Side B: YSL Refill Power */}
            <div className="space-y-6">
              <img
                src="/asset/removebg-refill power.png"
                alt="YSL Refill Power Station"
                className="w-full h-64 sm:h-80 md:h-[410px] object-contain md:object-cover"
              />
              <h3
                className="text-2xl sm:text-3xl md:text-4xl text-[#C2813F]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                YSL Refill Power
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#C2813F]/15 to-transparent p-5 md:p-6 border-l-4 border-[#C2813F] rounded-r-lg">
                  <p className="text-[#C2813F] text-2xl md:text-3xl font-semibold mb-2 md:mb-3">$65.00</p>
                  <p className="text-white text-base md:text-lg">Premium refill for YSL Les Pouvoirs de Sillage 60ml Bottle</p>
                </div>
                <div className="bg-[#C2813F]/25 p-5 md:p-6 border-l-4 border-[#C2813F] rounded-r-lg backdrop-blur-sm">
                  <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#C2813F]">
                    #RecycleYSLGlass
                  </p>
                  <p className="text-white mt-2 md:mt-3 text-base md:text-lg leading-relaxed">
                    Sustainable luxury. Return your glass bottles for exclusive rewards and environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 2: Power ON Headset Feature (New Section) */}
          <div className="border-t border-white/10 pt-16 md:pt-20">
            <h2
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center mb-10 md:mb-16 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              MULTISENSORY EXPERIENCE
            </h2>

            {/* Main Power ON Feature (satu.jpg equivalent) */}
            <div className="mb-12 md:mb-16">
              <img 
                src="/asset/scent power.png" 
                alt="Power ON Olfactive Navigation Headset" 
                className="w-full h-auto object-cover rounded-lg mb-6 md:mb-8 shadow-2xl border border-white/5" 
              />
              <div className="text-center max-w-4xl mx-auto px-2">
                <h3 className="text-3xl sm:text-4xl md:text-5xl text-[#C2813F] mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Power ON</h3>
                <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
                  Power ON (Olfactive Navigation) is a wearable headset connected to the YSL Scent Power 
                  system that guides fragrance layering discovery with AI voice assistance and synchronized 
                  sound, creating a multisensory experience through scent and audio.
                </p>
              </div>
            </div>

            {/* Grid for Voice Assistant & Charging Specs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hands-Free AI Voice Assistant (dua.jpg equivalent) */}
              <div className="bg-gradient-to-b from-[#C2813F]/10 to-transparent p-6 md:p-8 rounded-lg border border-[#C2813F]/20 flex flex-col h-full">
                <img 
                  src="/asset/dua.png" 
                  alt="Hands-Free AI Voice Assistant" 
                  className="w-full h-auto object-cover rounded border border-white/5 mb-6 md:mb-8 flex-grow" 
                />
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl text-[#C2813F] mb-3 md:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Hands-Free AI Voice Assistant
                  </h4>
                  <p className="text-white/80 text-sm md:text-lg mb-4 md:mb-6">AI assistant guiding personalized scent discovery and layering</p>
                  
                  <div className="space-y-3 md:space-y-4 font-light text-sm md:text-lg">
                    <p className="text-white flex items-start md:items-center gap-3">
                      <span className="text-[#C2813F] flex-shrink-0">🎙️</span> <span>"Hear the sound of this fragrance"</span>
                    </p>
                    <p className="text-white flex items-start md:items-center gap-3">
                      <span className="text-[#C2813F] flex-shrink-0">🎙️</span> <span>"Explore layering combinations"</span>
                    </p>
                    <p className="text-white/50 flex items-start md:items-center gap-3">
                      <span className="text-[#C2813F]/50 flex-shrink-0">🎙️</span> <span>"What does this scent express"</span>
                    </p>
                    <p className="text-white/50 flex items-start md:items-center gap-3">
                      <span className="text-[#C2813F]/50 flex-shrink-0">🎙️</span> <span>"Save my scent profile"</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Type-C Charging & Audio Specs (tiga.jpg equivalent) */}
              <div className="bg-gradient-to-b from-[#C2813F]/10 to-transparent p-6 md:p-8 rounded-lg border border-[#C2813F]/20 flex flex-col h-full">
                <img 
                  src="/asset/tiga.png" 
                  alt="Type-C Charging and Audio Components" 
                  className="w-full h-auto object-cover rounded border border-white/5 mb-6 md:mb-8 flex-grow" 
                />
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl text-[#C2813F] mb-6 md:mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Type-C Charging
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                    <div>
                      <p className="text-[10px] md:text-sm uppercase tracking-widest text-white/70 mb-1 md:mb-2">Charging Time</p>
                      <p className="text-2xl md:text-4xl font-bold text-[#C2813F]">3H</p>
                    </div>
                    <div>
                      <p className="text-[10px] md:text-sm uppercase tracking-widest text-white/70 mb-1 md:mb-2">Music Time</p>
                      <p className="text-2xl md:text-4xl font-bold text-[#C2813F]">6-8H</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-[10px] md:text-sm uppercase tracking-widest text-white/70 mb-1 md:mb-2">Standby Time</p>
                      <p className="text-2xl md:text-4xl font-bold text-[#C2813F]">&gt;80H</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C2813F] text-black flex items-center justify-center text-lg md:text-xl flex-shrink-0">
                        🎧
                      </div>
                      <span className="text-xs md:text-sm uppercase tracking-widest font-semibold leading-tight">Stereo<br/>Sound</span>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C2813F] text-black flex items-center justify-center text-lg md:text-xl flex-shrink-0">
                        🎵
                      </div>
                      <span className="text-xs md:text-sm uppercase tracking-widest font-semibold leading-tight">Audio<br/>Resolution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Notes Sliding Tab */}
      <section className="py-16 md:py-20 px-4 md:px-12 bg-white text-black w-full">
        <div className="max-w-7xl mx-auto w-full">
          <h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center mb-8 md:mb-12 leading-tight"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            THE SIX SILLAGE ELEMENTS
          </h2>

          {/* Tab Navigation */}
          <div className="flex overflow-x-auto gap-2 md:gap-4 mb-8 md:mb-12 pb-4 w-full scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {scentNotes.map((note, index) => (
              <button
                key={note.name}
                onClick={() => setActiveNote(index)}
                className={`px-4 py-2 md:px-6 md:py-3 text-xs md:text-base whitespace-nowrap transition-all border ${
                  activeNote === index
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black/20 hover:bg-black/5"
                }`}
              >
                {note.name}
              </button>
            ))}
          </div>

          {/* Active Note Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full">
              <img
                src={activeScent.image}
                alt={activeScent.name}
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-md"
              />
            </div>
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3
                  className="text-3xl sm:text-4xl md:text-5xl mb-1 md:mb-2"
                  style={{ fontFamily: "'Bodoni Moda', serif" }}
                >
                  {activeScent.name}
                </h3>
                <p className="text-lg md:text-xl text-[#C2813F]">{activeScent.subtitle}</p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div>
                  <p className="text-xs md:text-sm uppercase tracking-wider mb-1">Top Notes</p>
                  <p className="text-sm md:text-base text-black/70">{activeScent.top}</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm uppercase tracking-wider mb-1">Mid Notes</p>
                  <p className="text-sm md:text-base text-black/70">{activeScent.mid}</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm uppercase tracking-wider mb-1">Base Notes</p>
                  <p className="text-sm md:text-base text-black/70">{activeScent.base}</p>
                </div>
              </div>

              <div className="pt-2 md:pt-4 border-t border-black/10">
                <p className="text-xs md:text-sm uppercase tracking-wider mb-2">Keywords</p>
                <div className="flex flex-wrap gap-2">
                  {activeScent.keywords.split(", ").map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-black text-white text-[10px] md:text-sm rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey Carousel */}
      <section className="py-16 md:py-20 px-4 md:px-12 bg-black w-full overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center mb-8 md:mb-16 leading-tight"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            YOUR SCENT JOURNEY
          </h2>

          {/* Luxury Carousel Container */}
          <div className="relative px-0 md:px-16 w-full">
            <div className="overflow-hidden w-full rounded-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={journeyStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative h-[450px] sm:h-[500px] md:h-[600px] flex items-end w-full"
                >
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={[
                        "/asset/journey.PNG",
                        "/asset/STEP 2.png",
                        "/asset/STEP 3.png",
                        "/asset/STEP 4.png",
                        "/asset/myscent.png",
                        "/asset/refill.png"
                      ][journeyStep]}
                      alt="Journey Step"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 md:via-black/60 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 p-5 sm:p-8 md:p-12 lg:p-16 w-full max-w-3xl">
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-6">
                      <div 
                        className="text-4xl sm:text-5xl md:text-8xl text-[#C2813F] leading-none"
                        style={{ fontFamily: "'Bodoni Moda', serif" }}
                      >
                        {journeyStep + 1}
                      </div>
                      <div className="h-px w-10 sm:w-12 md:w-16 bg-[#C2813F]" />
                    </div>

                    <h3 
                      className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-6 tracking-tight text-white"
                      style={{ fontFamily: "'Bodoni Moda', serif" }}
                    >
                      {[
                        "SCENT DISCOVERY",
                        "INTERACTIVE LAYERING",
                        "CURATED WARDROBE",
                        "ON-THE-GO",
                        "MYSCENT",
                        "REFILL STATION"
                      ][journeyStep]}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-lg text-white/90 leading-relaxed md:leading-relaxed max-w-xl">
                      {[
                        "Discovers best match from YSL’s main fragrances and layering notes and their sound profiles through the Power ON headset",
                        "Layer your core scent with our notes to craft your own signature scent and hear each of its unique sound identity, creating a multisensory experience",
                        "Purchase your customized fragrance: a full-size bottle, a full discovery set, or the Travel Dual Spray",
                        "Apply your core base and adjust on-the-go. Keep your signature identity, but smell uniquely different every day",
                        "Log your fragrance combinations and access the MYSCENT app for personalized styling and community sharing, creating a digital scent wardrobe and social platform",
                        "Return to the in-store YSL Refill Power to replenish empty bottles, discover new notes, and continue your scent journey sustainably."
                      ][journeyStep]}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() =>
                setJourneyStep((prev) => (prev > 0 ? prev - 1 : 5))
              }
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border border-white/30 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#C2813F] hover:border-[#C2813F] transition-all duration-300 group z-20 touch-manipulation rounded-full md:rounded-none"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 md:group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() =>
                setJourneyStep((prev) => (prev < 5 ? prev + 1 : 0))
              }
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border border-white/30 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#C2813F] hover:border-[#C2813F] transition-all duration-300 group z-20 touch-manipulation rounded-full md:rounded-none"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6 md:group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 md:gap-3 mt-6 md:mt-12 w-full flex-wrap px-2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                onClick={() => setJourneyStep(index)}
                className="group flex flex-col items-center gap-1 md:gap-2 touch-manipulation p-1 md:p-2"
              >
                <div
                  className={`h-[2px] transition-all duration-500 ${
                    index === journeyStep 
                      ? "w-8 sm:w-10 md:w-16 bg-[#C2813F]" 
                      : "w-4 sm:w-6 md:w-8 bg-white/30 group-hover:bg-white/50"
                  }`}
                />
                <span className={`text-[8px] sm:text-[10px] md:text-xs tracking-widest transition-all ${
                  index === journeyStep ? "text-[#C2813F]" : "text-white/40"
                }`}>
                  0{index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}