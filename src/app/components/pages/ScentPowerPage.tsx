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

const journeySteps = [
  {
    title: "The Consultation",
    description: "Discover your unique scent profile with our digital advisor",
    image: "https://images.unsplash.com/photo-1723391962110-299d412ca046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwY29uc3VsdGF0aW9uJTIwYWR2aXNvcnxlbnwxfHx8fDE3NzIxMzI1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "The Activation",
    description: "Experience our immersive vending machine dispensing your custom blend",
    image: "https://images.unsplash.com/photo-1727953990386-1423e47e53b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwZXJmdW1lJTIwZGlzcGVuc2VyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIxMzI1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "The Collection",
    description: "Receive your personalized fragrance in an exclusive bottle",
    image: "https://images.unsplash.com/photo-1693960794591-fc7c72a15e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVyZnVtZSUyMGJvdHRsZSUyMGhhbmR8ZW58MXx8fHwxNzcyMTMyNTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function ScentPowerPage() {
  const [showMachine, setShowMachine] = useState(false);
  const [activeNote, setActiveNote] = useState(0);
  const [journeyStep, setJourneyStep] = useState(0);

  const activeScent = scentNotes[activeNote];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl">
          <h1
            className="text-3xl md:text-6xl lg:text-8xl mb-6 md:mb-8 tracking-tight leading-tight"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            UNLEASH YOUR SCENT POWER:
            <br />
            <span className="text-xl md:text-3xl lg:text-4xl block mt-4 md:mt-8 font-light tracking-wider">THE ART OF LAYERING</span>
          </h1>
          <button
            onClick={() => setShowMachine(!showMachine)}
            className="bg-[#C2813F] text-black px-8 md:px-12 py-3 md:py-4 hover:bg-[#d49550] transition-colors flex items-center gap-3 mx-auto group text-sm md:text-base"
          >
            DISCOVER THE INNOVATION
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showMachine ? 'rotate-180' : 'group-hover:translate-y-1'}`} />
          </button>
        </div>
      </section>

      {/* 2-in-1 Machine Section */}
      <AnimatePresence>
        {showMachine && (
          <motion.section
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
              <h2
                className="text-5xl md:text-7xl text-center mb-16"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                2 IN 1 VENDING MACHINE
              </h2>

              {/* Vending Machine Video ADDED HERE */}
              <div className="w-full mb-16 shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-[70vh] object-cover rounded-lg border border-white/10"
                >
                  <source src="/asset/vending.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Side A: YSL Scent Power */}
                <div className="space-y-6">
                  <img
                    src="/asset/removebg-power scent.png"
                    alt="YSL Scent Power Machine"
                    className="w-full h-96 object-cover"
                  />
                  <h3
                    className="text-3xl md:text-4xl text-[#C2813F]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    YSL Scent Power
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-[#C2813F]/15 to-transparent p-6 border-l-4 border-[#C2813F] rounded-r-lg">
                      <p className="text-sm uppercase tracking-widest font-semibold text-[#C2813F] mb-3">Layering Experience</p>
                      <p className="text-white text-lg leading-relaxed">
                        Master the art of fragrance blending. Combine 6 exclusive layering notes to create your signature scent with infinite possibilities.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-[#C2813F]/15 to-transparent p-6 border-l-4 border-[#C2813F] rounded-r-lg">
                      <p className="text-sm uppercase tracking-widest font-semibold text-[#C2813F] mb-3">Private Consultation</p>
                      <p className="text-white text-lg leading-relaxed">
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
                    className="w-full h-[410px] object-cover"
                  />
                  <h3
                    className="text-3xl md:text-4xl text-[#C2813F]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    YSL Refill Power
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-[#C2813F]/15 to-transparent p-6 border-l-4 border-[#C2813F] rounded-r-lg">
                      <p className="text-[#C2813F] text-3xl font-semibold mb-3">$65.00</p>
                      <p className="text-white text-lg">Premium refill for YSL Les Pouvoirs de Sillage 60ml Bottle</p>
                    </div>
                    <div className="bg-[#C2813F]/25 p-6 border-l-4 border-[#C2813F] rounded-r-lg backdrop-blur-sm">
                      <p className="uppercase tracking-widest font-semibold text-[#C2813F]">
                        #RecycleYSLGlass
                      </p>
                      <p className="text-white mt-3 text-lg">
                        Sustainable luxury. Return your glass bottles for exclusive rewards and environmental impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 6 Notes Sliding Tab */}
      <section className="py-20 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl md:text-7xl text-center mb-12"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            THE SIX SILLAGE ELEMENTS
          </h2>

          {/* Tab Navigation */}
          <div className="flex overflow-x-auto gap-4 mb-12 pb-4">
            {scentNotes.map((note, index) => (
              <button
                key={note.name}
                onClick={() => setActiveNote(index)}
                className={`px-6 py-3 whitespace-nowrap transition-all ${
                  activeNote === index
                    ? "bg-black text-white"
                    : "bg-white text-black border border-black/20 hover:bg-black/5"
                }`}
              >
                {note.name}
              </button>
            ))}
          </div>

          {/* Active Note Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={activeScent.image}
                alt={activeScent.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3
                  className="text-4xl md:text-5xl mb-2"
                  style={{ fontFamily: "'Bodoni Moda', serif" }}
                >
                  {activeScent.name}
                </h3>
                <p className="text-xl text-[#C2813F]">{activeScent.subtitle}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-wider mb-1">Top Notes</p>
                  <p className="text-black/70">{activeScent.top}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-1">Mid Notes</p>
                  <p className="text-black/70">{activeScent.mid}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-1">Base Notes</p>
                  <p className="text-black/70">{activeScent.base}</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider mb-2">Keywords</p>
                <div className="flex flex-wrap gap-2">
                  {activeScent.keywords.split(", ").map((keyword) => (
                    <span
                      key={keyword}
                      className="px-4 py-2 bg-black text-white text-sm"
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
      <section className="py-20 px-4 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-5xl lg:text-7xl text-center mb-8 md:mb-16"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            YOUR SCENT JOURNEY
          </h2>

          {/* Luxury Carousel */}
          <div className="relative px-0 md:px-16">
            {/* Carousel Content */}
            <div className="overflow-hidden">
              <motion.div
                key={journeyStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative h-[500px] md:h-[600px] flex items-end"
              >
                {/* Background Image with Parallax Effect */}
                <div className="absolute inset-0">
                  <motion.img
                    key={`img-${journeyStep}`}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    src={[
                      "/asset/STEP 1.png",
                      "/asset/STEP 2.png",
                      "/asset/STEP 3.png",
                      "/asset/STEP 4.png",
                      "/asset/myscent.png",
                      "/asset/refill.png"
                    ][journeyStep]}
                    alt="Journey Step"
                    className="w-full h-full object-cover"
                  />
                  {/* Elegant gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 md:p-12 lg:p-16 max-w-3xl">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {/* Step Number - Gold Accent */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div 
                        className="text-5xl md:text-8xl text-[#C2813F] leading-none"
                        style={{ fontFamily: "'Bodoni Moda', serif" }}
                      >
                        {journeyStep + 1}
                      </div>
                      <div className="h-px w-12 md:w-16 bg-[#C2813F]" />
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6 tracking-tight"
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

                    {/* Description */}
                    <p className="text-sm md:text-lg text-white/90 leading-relaxed max-w-xl">
                      {[
                        "Discovers best match from YSL’s main fragrances and layering notes ",
                        "Layer your core scent with our notes to craft your own signature scent",
                        "Purchase your customized  fragrance: a full-size bottle, a full discovery set, or the Travel Dual Spray",
                        "Apply your core base and adjust on-the-go. Keep your signature identity, but smell uniquely different every day",
                        "Log your fragrance combinations and access the MYSCENT app for personalized styling and community sharing.",
                        "Return to the in-store YSL Refill Power to replenish empty cartridges"
                      ][journeyStep]}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons - Luxury Style */}
            <button
              onClick={() =>
                setJourneyStep((prev) => (prev > 0 ? prev - 1 : 5))
              }
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 border border-white/30 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#C2813F] hover:border-[#C2813F] transition-all duration-300 group touch-manipulation"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() =>
                setJourneyStep((prev) => (prev < 5 ? prev + 1 : 0))
              }
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 border border-white/30 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#C2813F] hover:border-[#C2813F] transition-all duration-300 group touch-manipulation"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Elegant Progress Indicators */}
          <div className="flex justify-center items-center gap-2 md:gap-3 mt-8 md:mt-12">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                onClick={() => setJourneyStep(index)}
                className="group flex flex-col items-center gap-1 md:gap-2 touch-manipulation"
              >
                <div
                  className={`h-[2px] transition-all duration-500 ${
                    index === journeyStep 
                      ? "w-12 md:w-16 bg-[#C2813F]" 
                      : "w-6 md:w-8 bg-white/30 group-hover:bg-white/50"
                  }`}
                />
                <span className={`text-[10px] md:text-xs tracking-widest transition-all ${
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