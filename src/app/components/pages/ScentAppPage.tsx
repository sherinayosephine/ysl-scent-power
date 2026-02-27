import { useState } from "react";
import { X, Star, Search, MessageCircle, Repeat2, Heart, Share2, Plus } from "lucide-react";

const scentOptions = ["LUMEN", "MINÉRALEWAVE", "VECTOR", "AETHER", "BLANC", "VERDE"];

const communityPosts = [
  {
    user: "User_A",
    content: "Just layered YSL Libre with the new VECTOR note. The dry down is incredible. #YSLScentPower",
    likes: 234,
    replies: 12,
  },
  {
    user: "User_B",
    content: "BLANC + AETHER = my new signature for morning meetings. So fresh and professional! ✨",
    likes: 189,
    replies: 8,
  },
  {
    user: "User_C",
    content: "Attended the YSL vending machine experience today. Mind blown by the technology and personalization! 🖤",
    likes: 412,
    replies: 23,
  },
  {
    user: "User_D",
    content: "VERDE is giving me spring garden party vibes. Perfect for brunch dates! Who else is obsessed?",
    likes: 156,
    replies: 15,
  },
  {
    user: "User_E",
    content: "My signature combo: LUMEN + YSL Black Opium. It's mysterious yet fresh. Total game changer!",
    likes: 298,
    replies: 19,
  },
  {
    user: "User_F",
    content: "Just got my personalized scent profile from the YSL AI. SO accurate it's scary! The future is here 🔮",
    likes: 521,
    replies: 34,
  },
  {
    user: "User_G",
    content: "MINÉRALEWAVE during yoga class = chef's kiss. Clean, calming, sophisticated. 10/10 recommend",
    likes: 203,
    replies: 11,
  },
  {
    user: "User_H",
    content: "Anyone else creating custom blends for different moods? I have 5 now and I'm obsessed with this layering journey!",
    likes: 387,
    replies: 28,
  },
  {
    user: "User_I",
    content: "The Padel & Perfume community is SO chic! Met amazing people at the YSL pop-up yesterday 🎾✨",
    likes: 267,
    replies: 16,
  },
  {
    user: "User_J",
    content: "VECTOR + Mon Paris = power couple energy. Wearing this to every important meeting from now on!",
    likes: 445,
    replies: 21,
  },
];

export function ScentAppPage() {
  const [showMixModal, setShowMixModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"collection" | "custom">("collection");
  const [mainTab, setMainTab] = useState<"profile" | "community">("profile");
  const [selectedAccords, setSelectedAccords] = useState<string[]>([]);
  const [rating, setRating] = useState(0);

  const toggleAccord = (accord: string) => {
    setSelectedAccords((prev) =>
      prev.includes(accord) ? prev.filter((a) => a !== accord) : [...prev, accord]
    );
  };

  return (
    <div className="bg-black text-white min-h-screen pt-24 md:pt-32 pb-20">
      {/* Dashboard & News - Top Section */}
      <section className="mb-12 md:mb-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-3xl md:text-6xl lg:text-8xl mb-8 md:mb-12"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            WHAT'S HAPPENING IN YSL BEAUTY
          </h1>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-2 relative h-64 md:h-96 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1771512681998-99342c9a4f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdCUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyMDg3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Featured Story"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[#C2813F] mb-2 uppercase tracking-wider text-sm">Featured</p>
                <h3
                  className="text-3xl md:text-4xl mb-3"
                  style={{ fontFamily: "'Bodoni Moda', serif" }}
                >
                  The New Era of Scent Layering
                </h3>
                <p className="text-white/80">
                  Discover how YSL is revolutionizing the fragrance experience
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative h-44 overflow-hidden group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1759003527966-b77f51fd9b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBtYWdhemluZSUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3NzIxMzI1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Story 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm mb-1">Vogue Paris</p>
                  <p className="text-xs text-white/70">YSL's Sustainable Future</p>
                </div>
              </div>

              <div className="relative h-44 overflow-hidden group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1693960794591-fc7c72a15e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVyZnVtZSUyMGJvdHRsZSUyMGhhbmR8ZW58MXx8fHwxNzcyMTMyNTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Story 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm mb-1">Elle Magazine</p>
                  <p className="text-xs text-white/70">Les Pouvoirs Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Screen Layout */}
      <section className="px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Tab Toggle */}
          <div className="flex gap-4 mb-8 justify-center">
            <button
              onClick={() => setMainTab("profile")}
              className={`px-8 py-3 transition-colors ${
                mainTab === "profile"
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              PROFILE
            </button>
            <button
              onClick={() => setMainTab("community")}
              className={`px-8 py-3 transition-colors ${
                mainTab === "community"
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              COMMUNITY
            </button>
          </div>

          {/* Profile Tab Content */}
          {mainTab === "profile" && (
            <div className="bg-white text-black p-8 md:p-12 max-w-6xl mx-auto">
              {/* User Profile */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-black/10">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl">
                  Y
                </div>
                <div>
                  <h3 className="text-xl">YSL Enthusiast</h3>
                  <p className="text-black/60 text-sm">Scent Architect</p>
                </div>
              </div>

              {/* Tab Toggle */}
              <div className="flex gap-2 mb-8">
                <button
                  onClick={() => setActiveTab("collection")}
                  className={`flex-1 py-3 transition-colors ${
                    activeTab === "collection"
                      ? "bg-black text-white"
                      : "bg-black/5 text-black hover:bg-black/10"
                  }`}
                >
                  My Collection
                </button>
                <button
                  onClick={() => setActiveTab("custom")}
                  className={`flex-1 py-3 transition-colors ${
                    activeTab === "custom"
                      ? "bg-black text-white"
                      : "bg-black/5 text-black hover:bg-black/10"
                  }`}
                >
                  My Custom Creations
                </button>
              </div>

              {/* Content */}
              {activeTab === "collection" && (
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {["YSL Libre", "YSL Black Opium", "YSL Mon Paris"].map((perfume) => (
                    <div
                      key={perfume}
                      className="flex items-center justify-between p-4 border border-black/10"
                    >
                      <p>{perfume}</p>
                      <span className="text-xs bg-black/5 px-3 py-1">Owned</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "custom" && (
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 border border-black/10">
                    <p className="mb-2">Evening Elegance</p>
                    <p className="text-xs text-black/60">VECTOR + BLANC + YSL Libre</p>
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-black" />
                      ))}
                    </div>
                  </div>
                  <div className="p-4 border border-black/10">
                    <p className="mb-2">Fresh Morning</p>
                    <p className="text-xs text-black/60">AETHER + MINÉRALEWAVE</p>
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-black" />
                      ))}
                      <Star className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-4 border border-black/10">
                    <p className="mb-2">Midnight Mystery</p>
                    <p className="text-xs text-black/60">LUMEN + YSL Black Opium + VECTOR</p>
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-black" />
                      ))}
                    </div>
                  </div>
                  <div className="p-4 border border-black/10">
                    <p className="mb-2">Power Meeting</p>
                    <p className="text-xs text-black/60">BLANC + VECTOR</p>
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-black" />
                      ))}
                    </div>
                  </div>
                  <div className="p-4 border border-black/10">
                    <p className="mb-2">Summer Breeze</p>
                    <p className="text-xs text-black/60">VERDE + AETHER + MINÉRALEWAVE</p>
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-black" />
                      ))}
                      <Star className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-4 border border-black/10">
                    <p className="mb-2">Date Night Charm</p>
                    <p className="text-xs text-black/60">YSL Mon Paris + LUMEN</p>
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-black" />
                      ))}
                    </div>
                  </div>
                  <div className="p-4 border border-black/10">
                    <p className="mb-2">Yoga Zen</p>
                    <p className="text-xs text-black/60">MINÉRALEWAVE + BLANC</p>
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-black" />
                      ))}
                    </div>
                  </div>
                  <div className="p-4 border border-black/10">
                    <p className="mb-2">Weekend Wanderer</p>
                    <p className="text-xs text-black/60">VERDE + LUMEN</p>
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-black" />
                      ))}
                      <Star className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )}

              {/* Register New Mix Button */}
              <button
                onClick={() => setShowMixModal(true)}
                className="w-full bg-black text-white py-4 flex items-center justify-center gap-2 hover:bg-[#C2813F] transition-colors"
              >
                <Plus className="w-5 h-5" />
                Register New Mix
              </button>
            </div>
          )}

          {/* Community Tab Content */}
          {mainTab === "community" && (
            <div className="bg-white text-black p-8 md:p-12 max-w-6xl mx-auto">
              <h3
                className="text-3xl mb-6"
                style={{ fontFamily: "'Bodoni Moda', serif" }}
              >
                Today's Scent Highlights
              </h3>

              {/* Daily Theme */}
              <div className="mb-8 p-6 bg-[#C2813F]/10 border-l-4 border-[#C2813F]">
                <p className="text-xs uppercase tracking-widest text-[#C2813F] mb-2">Friday, February 27, 2026</p>
                <h4 className="text-xl mb-2" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                  Evening Sophistication
                </h4>
                <p className="text-black/70 text-sm">
                  The perfect night to layer bold and refined notes for dinner events
                </p>
              </div>

              {/* Featured Combinations */}
              <div className="space-y-6 mb-8 pb-8 border-b border-black/10">
                <div className="border-b border-black/10 pb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-[#C2813F] rounded-full"></div>
                    <p className="text-sm uppercase tracking-wider text-black/60">Combination of the Day</p>
                  </div>
                  <h5 className="text-lg mb-2">VECTOR + BLANC</h5>
                  <p className="text-sm text-black/70">
                    Sharp directional spice meets refined white tea for an unforgettable evening presence. Perfect for cocktail receptions and gallery openings.
                  </p>
                </div>

                <div className="border-b border-black/10 pb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-[#C2813F] rounded-full"></div>
                    <p className="text-sm uppercase tracking-wider text-black/60">Weekend Favorite</p>
                  </div>
                  <h5 className="text-lg mb-2">VERDE + LUMEN</h5>
                  <p className="text-sm text-black/70">
                    Fresh green floral layered with radiant brightness. Ideal for brunch dates and outdoor gatherings.
                  </p>
                </div>

                <div className="pb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-[#C2813F] rounded-full"></div>
                    <p className="text-sm uppercase tracking-wider text-black/60">Professional Power</p>
                  </div>
                  <h5 className="text-lg mb-2">AETHER + MINÉRALEWAVE</h5>
                  <p className="text-sm text-black/70">
                    Elevated aromatic meets purified aquatic. The ultimate signature for important meetings and presentations.
                  </p>
                </div>
              </div>

              {/* Community Feed Section */}
              <div className="mb-8">
                <h4 className="text-2xl mb-6" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                  Community
                </h4>

                {/* Post Input */}
                <div className="mb-6 p-4 border border-black/10 bg-black/[0.02]">
                  <textarea
                    placeholder="Share your scent experience..."
                    className="w-full px-0 py-2 bg-transparent border-none focus:outline-none resize-none text-sm"
                    rows={3}
                  />
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex gap-2 flex-wrap">
                      <button className="px-3 py-1 bg-black/5 hover:bg-black/10 transition-colors text-xs">
                        Padel & Perfume
                      </button>
                      <button className="px-3 py-1 bg-black/5 hover:bg-black/10 transition-colors text-xs">
                        Pilates Chic
                      </button>
                      <button className="px-3 py-1 bg-black/5 hover:bg-black/10 transition-colors text-xs">
                        Evening Society
                      </button>
                    </div>
                    <button className="px-6 py-2 bg-black text-white hover:bg-[#C2813F] transition-colors text-sm">
                      Post
                    </button>
                  </div>
                </div>

                {/* Community Posts */}
                <div className="space-y-4">
                  {communityPosts.slice(0, 5).map((post, index) => (
                    <div key={index} className="pb-4 border-b border-black/10">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                          {post.user[0]}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm mb-2">
                            <span className="font-medium">{post.user}</span>
                            <span className="text-black/60 ml-2">· 2h</span>
                          </p>
                          <p className="text-sm mb-3">{post.content}</p>
                          <div className="flex gap-6 text-black/40">
                            <button className="flex items-center gap-1 text-xs hover:text-black transition-colors">
                              <MessageCircle className="w-4 h-4" />
                              <span>{post.replies}</span>
                            </button>
                            <button className="flex items-center gap-1 text-xs hover:text-black transition-colors">
                              <Heart className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 text-xs hover:text-black transition-colors">
                              <Share2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mixology Modal */}
      {showMixModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h3
                className="text-3xl"
                style={{ fontFamily: "'Bodoni Moda', serif" }}
              >
                Create Your Mix
              </h3>
              <button onClick={() => setShowMixModal(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-sm uppercase tracking-wider">
                  Name your Creation
                </label>
                <input
                  type="text"
                  className="w-full px-0 py-3 border-b border-black/20 focus:border-black focus:outline-none"
                  placeholder="e.g., Evening Elegance"
                />
              </div>

              <div>
                <label className="block mb-3 text-sm uppercase tracking-wider">
                  Accords Used
                </label>
                <div className="flex flex-wrap gap-2">
                  {scentOptions.map((accord) => (
                    <button
                      key={accord}
                      type="button"
                      onClick={() => toggleAccord(accord)}
                      className={`px-4 py-2 text-sm transition-colors ${
                        selectedAccords.includes(accord)
                          ? "bg-black text-white"
                          : "bg-black/5 text-black hover:bg-black/10"
                      }`}
                    >
                      {accord}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm uppercase tracking-wider">
                  Occasion
                </label>
                <select className="w-full px-0 py-3 border-b border-black/20 focus:border-black focus:outline-none bg-transparent">
                  <option>Select occasion...</option>
                  <option>Daily Wear</option>
                  <option>Evening Event</option>
                  <option>Professional</option>
                  <option>Date Night</option>
                  <option>Weekend</option>
                </select>
              </div>

              <div>
                <label className="block mb-3 text-sm uppercase tracking-wider">
                  Performance Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= rating ? "fill-black" : "fill-none"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm uppercase tracking-wider">
                  Your Thoughts
                </label>
                <textarea
                  className="w-full px-0 py-3 border-b border-black/20 focus:border-black focus:outline-none resize-none"
                  rows={4}
                  placeholder="Describe your experience with this mix..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 hover:bg-[#C2813F] transition-colors"
              >
                Save Creation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}