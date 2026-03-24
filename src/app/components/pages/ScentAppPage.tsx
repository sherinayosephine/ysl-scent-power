import React, { useState } from "react";
import {
  Search, Calendar, Users, User, Sparkles, 
  Camera, MessageCircle, Music, Glasses, Heart, 
  ThumbsUp, Droplet, BookOpen, Sun, Moon, Star, ChevronDown,
  Plus, Share2, X, MapPin, Send
} from "lucide-react";

// ================= TYPESCRIPT INTERFACES =================
type Page = "discover" | "appointment" | "community" | "profile";
type WardrobeTab = "ysl" | "layering" | "custom";

interface Product {
  name: string;
  type?: string;
  sub?: string;
  price?: string;
  rating?: number;
  reviews?: number;
  img: string;
  owned?: boolean;
}

// ================= DATA ARRAYS =================
const scentOptions: string[] = ["LUMEN", "MINÉRALEWAVE", "VECTOR", "AETHER", "BLANC", "VERDE"];

const yslProducts: Product[] = [
  { name: "LES POUVOIRS DE SILLAGE", type: "Discovery Kit", price: "$65.00", rating: 4.8, reviews: 100, img: "/asset/discovery kit.png" },
  { name: "TRAVEL DUAL SPRAY", type: "Travel Collection", price: "$50.00", rating: 4.8, reviews: 100, img: "/asset/dual spray.png" },
  { name: "LIBRE EDP", type: "Eau de Parfum", price: "$130.00", rating: 4.8, reviews: 100, img: "/asset/libre1.jpg" },
];

const layeringScents: Product[] = [
  { name: "VECTOR", sub: "Sharp Spice", img: "/asset/vector.png" },
  { name: "BLANC", sub: "White Tea", img: "/asset/blanc.png" },
  { name: "AETHER", sub: "Aromatic", img: "/asset/aether.png" },
  { name: "MINÉRALEWAVE", sub: "Aquatic", img: "/asset/minerale.png" },
  { name: "LUMEN", sub: "Citrus", img: "/asset/florent.png" },
  { name: "VERDE", sub: "Green Floral", img: "/asset/neroli.png" },
];

const customMixes = [
  { 
    name: "OFFICE WEAR", 
    combo: "LIBRE EDP + NEROLI", 
    img: "/asset/libre1.jpg",
    owns: "1.7K", wants: "2K", likes: "99%", time: "ALL DAY"
  },
  { 
    name: "SPORTY GUY", 
    combo: "Y EDP + BLANC", 
    img: "/asset/dual spray.png",
    owns: "1.2K", wants: "1.1K", likes: "89%", time: "DAY"
  },
  { 
    name: "FANCY DINNER", 
    combo: "MYSLF Le Parfum + VECTOR", 
    img: "/asset/opium.webp",
    owns: "1.2K", wants: "1.1K", likes: "89%", time: "NIGHT"
  },
];

const communityPosts = [
  { user: "Sofia M.", avatar: "S", content: "Just layered YSL Libre with VECTOR. The dry down is incredible. Perfect for the evening out! #YSLScentPower #VECTOR", likes: 234, replies: 12, time: "2h" },
  { user: "Aria K.", avatar: "A", content: "BLANC + AETHER = my new signature for morning meetings. So fresh and sophisticated! ✨", likes: 189, replies: 8, time: "4h" },
  { user: "Luna P.", avatar: "L", content: "Tried the YSL vending machine experience today. Mind blown by the personalization and the AI assistant! 🖤", likes: 412, replies: 23, time: "5h" },
];

const wardrobeTabsData: { id: WardrobeTab; label: string }[] = [
  { id: "ysl", label: "YSL PERFUME" },
  { id: "layering", label: "LAYERING NOTES" },
  { id: "custom", label: "MY MIXES" }
];

const dates = [
  { day: "MON", date: "24" },
  { day: "TUE", date: "25" },
  { day: "WED", date: "26" },
  { day: "THU", date: "27" },
  { day: "FRI", date: "28" },
  { day: "SAT", date: "29" },
];

const times = ["10:00 AM", "11:30 AM", "01:00 PM", "03:30 PM", "05:00 PM", "07:00 PM"];


// ================= AI CHAT WIDGET COMPONENT =================
function AIChatWidget({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Welcome to YSL Scent Advisor. I'm here to help you discover your perfect scent combination. Upload a selfie or ask me anything!",
    },
  ]);
  const [input, setInput] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const quickPrompts = [
    "Scent Combination Ideas",
    "Occasion Recommendations",
    "Scent Styling Advice",
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setUploadedImage(imageUrl);
        
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: "Today you look absolutely stunning. Based on this energy, I suggest layering Scent Combination: YSL Libre and VECTOR.",
            },
          ]);
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", content: prompt },
      {
        role: "assistant",
        content:
          prompt === "Scent Combination Ideas"
            ? "For a sophisticated daytime look, try BLANC + AETHER. For evening glamour, VECTOR + LUMEN creates an unforgettable presence. For fresh mornings, MINÉRALEWAVE + VERDE is perfect."
            : prompt === "Occasion Recommendations"
            ? "Business meetings: BLANC + AETHER. Date night: LUMEN + VECTOR. Casual weekend: VERDE + MINÉRALEWAVE. Special events: All six notes for maximum complexity."
            : "Layer lighter notes first, then add depth. Start with aquatic or floral bases, then build with spicy or woody accords. Always test on skin before committing to a full bottle.",
      },
    ]);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: input },
        {
          role: "assistant",
          content: "I recommend exploring the VECTOR and BLANC combination for your needs. These notes create a sophisticated yet modern profile that works beautifully for any occasion.",
        },
      ]);
      setInput("");
    }
  };

  return (
    <div id="scent-ai-modal" className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md h-[80vh] max-h-[600px] bg-white text-black shadow-2xl flex flex-col rounded-xl overflow-hidden animate-in zoom-in duration-200 border border-gray-200">
        
        {/* Header - BLACK & WHITE THEME */}
        <div className="bg-black text-white p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
              <Sparkles size={18} color="white" /> AI Scent Advisor
            </h3>
            <p className="text-xs font-bold tracking-widest uppercase opacity-70">Powered by YSL</p>
          </div>
          <button onClick={onClose} className="hover:text-gray-400 transition-colors p-1">
            <X className="w-6 h-6" color="white" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fcfcfc]">
          {uploadedImage ? (
            <div className="mb-4">
              <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-sm">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Your Selfie Analysis</p>
                <img
                  src={uploadedImage}
                  alt="Uploaded selfie"
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <div className="flex items-center gap-2 text-xs text-gray-900 font-bold">
                  <div className="bg-black p-1 rounded-full"><Sparkles className="w-3 h-3 text-white" /></div>
                  <span>Analyzing your style and mood...</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-4">
              <div className="border-2 border-dashed border-gray-300 bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-bold mb-1">Upload Your Selfie</p>
                <p className="text-xs text-gray-500 mb-4 font-medium">Get personalized scent recommendations based on your look and mood.</p>
                <label className="inline-flex items-center gap-2 px-4 py-2.5 bg-black text-white hover:bg-gray-800 transition-colors cursor-pointer text-xs font-bold tracking-widest uppercase rounded">
                  <Camera className="w-4 h-4 text-white" />
                  Take or Upload Photo
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              </div>
            </div>
          )}
          
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] p-3 rounded-lg ${message.role === "user" ? "bg-black text-white" : "bg-gray-100 text-black border border-gray-200"}`}>
                <p className="text-sm leading-relaxed font-medium">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Prompts */}
        <div className="px-4 py-3 border-t border-gray-200 bg-white">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleQuickPrompt(prompt)}
                className="flex-shrink-0 px-3 py-2 bg-gray-100 hover:bg-black hover:text-white transition-colors text-xs font-bold whitespace-nowrap rounded"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex gap-2 items-center">
            <label className="cursor-pointer p-2 text-gray-500 hover:text-black transition-colors">
              <Camera className="w-5 h-5" />
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-black text-sm font-medium"
            />
            <button onClick={handleSend} className="p-2.5 bg-black text-white rounded hover:bg-gray-800 transition-colors">
              <Send className="w-5 h-5" color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ================= MAIN APP COMPONENT =================
export function ScentAppPage() {
  const [page, setPage] = useState<Page>("discover");
  const [wardrobeTab, setWardrobeTab] = useState<WardrobeTab>("custom");
  const [showMixModal, setShowMixModal] = useState<boolean>(false);
  const [showAIChat, setShowAIChat] = useState<boolean>(false); 
  const [selectedAccords, setSelectedAccords] = useState<string[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});
  
  const [selectedDate, setSelectedDate] = useState<string>("25");
  const [selectedTime, setSelectedTime] = useState<string>("01:00 PM");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const isDarkTheme = page === "profile" || page === "community" || page === "appointment";

  const toggleAccord = (a: string) => setSelectedAccords((prev) => prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]);
  const toggleLike = (i: number) => setLikedPosts(prev => ({ ...prev, [i]: !prev[i] }));

  const handleBookAppointment = () => {
    setShowSuccess(true);
    setTimeout(() => { setShowSuccess(false); setPage("discover"); }, 3000);
  };

  return (
    <div className={`min-h-screen font-sans pb-24 pt-[80px] transition-colors duration-300 ${isDarkTheme ? 'bg-[#0a0a0a] text-white' : 'bg-[#fcfcfc] text-black'}`}>
      
      {/* ========================================================================= */}
      {/* CSS HACK: MENYEMBUNYIKAN GLOBAL WIDGET AI DI POJOK KANAN BAWAH */}
      {/* ========================================================================= */}
      <style>{`
        /* Menyembunyikan div/button fixed di pojok kanan bawah yang BUKAN bagian dari ScentApp */
        div[class*="fixed"][class*="bottom-"][class*="right-"]:not(#scent-ai-modal),
        button[class*="fixed"][class*="bottom-"][class*="right-"]:not(#scent-ai-modal) {
          display: none !important;
        }
      `}</style>

      {/* APP CONTAINER */}
      <div className={`w-full max-w-lg mx-auto min-h-screen border-x transition-colors duration-300 ${isDarkTheme ? 'border-gray-800 bg-[#0a0a0a]' : 'border-gray-200 bg-[#fcfcfc]'}`}>
        
        {/* ===================== DISCOVER (HOME) PAGE ===================== */}
        {page === "discover" && (
          <div className="animate-in fade-in duration-300 px-4">
            
            <div className="flex flex-col items-center justify-center pt-6 pb-6">
              <div className="text-4xl font-serif font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>YSL</div>
              <h1 className="text-xl md:text-2xl font-bold text-center tracking-tight">
                Welcome to MYSCENT by<br/>YSL Beauty!
              </h1>
            </div>

            <div className="flex bg-[#f0f0f0] mb-6 h-36 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="w-5/12 bg-white relative">
                <img src="/asset/mon paris.webp" alt="Perfume" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div className="w-7/12 p-3 flex flex-col justify-center">
                <h3 className="text-xs font-serif font-bold tracking-widest text-center mb-2" style={{ fontFamily: "Georgia, serif" }}>PERFUME</h3>
                <p className="text-[8px] md:text-[9px] text-gray-600 text-center leading-relaxed">
                  Discover the wardrobe of fragrance creations from Yves Saint Laurent iconic scents such as Black Opium, Libre and Y for men, reflecting daring attitude, and unique couture style.
                </p>
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <button className="flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1.5 text-[9px] font-bold whitespace-nowrap shadow-sm bg-white active:scale-95 transition-transform">
                <img src="/asset/removebg-power scent.png" className="w-4 h-4 rounded-full object-cover" alt="" />
                LES POUVOIRS DE SILLAGE
              </button>
              <button className="flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1.5 text-[9px] font-bold whitespace-nowrap shadow-sm bg-white active:scale-95 transition-transform">
                <img src="/asset/libre1.jpg" className="w-4 h-4 rounded-full object-cover" alt="" />
                FOR HER
              </button>
              <button className="flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1.5 text-[9px] font-bold whitespace-nowrap shadow-sm bg-white active:scale-95 transition-transform">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                FOR HIM
              </button>
              <button className="flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1.5 text-[9px] font-bold whitespace-nowrap shadow-sm bg-white active:scale-95 transition-transform">
                <img src="/asset/opium.webp" className="w-4 h-4 rounded-full object-cover" alt="" />
                LE VESTIAIRE DES PARFUMS
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-10">
              {yslProducts.map((prod, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="bg-white h-32 w-full flex items-center justify-center mb-2 p-1 border border-gray-200 shadow-sm rounded-md">
                    <img src={prod.img} alt={prod.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="text-[8px] md:text-[9px] font-bold uppercase text-center w-full leading-tight h-6 flex items-center justify-center">{prod.name}</p>
                  
                  <div className="flex items-center justify-center gap-1 my-1 w-full">
                    <div className="flex">
                      {[1,2,3,4,5].map(s => <Star key={s} size={8} fill={s <= Math.floor(prod.rating!) ? "black" : "none"} strokeWidth={1} />)}
                    </div>
                    <span className="text-[7px] md:text-[8px] font-bold">{prod.rating} ({prod.reviews})</span>
                  </div>

                  <div className="border border-gray-300 rounded px-2 py-1 flex justify-between items-center mb-2 w-full cursor-pointer hover:bg-gray-50 bg-white">
                    <span className="text-[8px] font-bold">50 ML</span>
                    <ChevronDown size={10} />
                  </div>

                  <p className="text-[9px] md:text-[10px] text-center font-bold mb-2">{prod.price}</p>
                  <button className="w-full bg-black text-white text-[8px] font-bold py-2 uppercase mt-auto rounded-sm active:scale-95 transition-transform">Add to Bag</button>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <h2 className="font-bold text-base md:text-lg text-center tracking-wide mb-4 pt-6 border-t border-gray-200 uppercase">
                CRAFT YOUR SIGNATURE SCENT
              </h2>
              
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setShowAIChat(true)} className="relative h-28 md:h-36 rounded-xl overflow-hidden cursor-pointer group border-none outline-none p-0 text-left">
                  <img src="/asset/stylist.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Stylist" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md rounded-full py-1.5 flex items-center justify-center gap-1.5 shadow transform transition-transform duration-300 group-hover:-translate-y-1">
                    <Camera size={12} className="text-gray-800" />
                    <span className="text-[8px] md:text-[9px] font-bold text-black uppercase tracking-widest">AI FRAGRANCE STYLIST</span>
                  </div>
                </button>
                
                <button onClick={() => setShowAIChat(true)} className="relative h-28 md:h-36 rounded-xl overflow-hidden cursor-pointer group border-none outline-none p-0 text-left">
                  <img src="/asset/advisor.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Advisor" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md rounded-full py-1.5 flex items-center justify-center gap-1.5 shadow transform transition-transform duration-300 group-hover:-translate-y-1">
                    <MessageCircle size={12} className="text-gray-800" />
                    <span className="text-[8px] md:text-[9px] font-bold text-black uppercase tracking-widest">AI SCENT ADVISOR</span>
                  </div>
                </button>

                <a href="https://scent-power-experience.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative h-28 md:h-36 rounded-xl overflow-hidden cursor-pointer group block">
                  <img src="/asset/sound.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Sound" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md rounded-full py-1.5 flex items-center justify-center gap-1.5 shadow transform transition-transform duration-300 group-hover:-translate-y-1">
                    <Music size={12} className="text-gray-800" />
                    <span className="text-[8px] md:text-[9px] font-bold text-black uppercase tracking-widest">SOUND OF SCENT</span>
                  </div>
                </a>

                <a href="https://www.loreal.com/en/articles/science-and-technology/ysl-scent-sation/" target="_blank" rel="noopener noreferrer" className="relative h-28 md:h-36 rounded-xl overflow-hidden cursor-pointer group block">
                  <img src="/asset/scentsation.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Sensation" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md rounded-full py-1.5 flex items-center justify-center gap-1.5 shadow transform transition-transform duration-300 group-hover:-translate-y-1">
                    <Glasses size={12} className="text-gray-800" />
                    <span className="text-[8px] md:text-[9px] font-bold text-black uppercase tracking-widest">SCENT-SATION</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ===================== APPOINTMENT PAGE ===================== */}
        {page === "appointment" && (
          <div className="animate-in fade-in duration-300 px-4 pb-8">
            <div className="flex flex-col items-center justify-center pt-6 pb-4">
              <div className="text-4xl font-serif font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>YSL</div>
              <h1 className="text-xl md:text-2xl font-bold text-center tracking-tight uppercase">
                Book Your Session
              </h1>
            </div>

            <div className="rounded-xl overflow-hidden mb-8 shadow-md relative h-40 border border-gray-800">
              <img src="/asset/journey.PNG" alt="Boutique" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold tracking-widest text-sm mb-1 uppercase">Private Consultation</h3>
                <p className="text-[10px] font-medium opacity-90">Discover your signature layering notes with our AI advisor.</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Boutique Location</h3>
              <div className="border border-[#222] p-4 rounded-lg flex justify-between items-center bg-[#111] shadow-sm hover:border-[#444] cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white">YSL Beauty Boutique</p>
                    <p className="text-xs text-gray-400 mt-0.5">Senayan City, Ground Floor</p>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-[#C2813F] bg-[#C2813F]/10 px-2.5 py-1.5 rounded uppercase tracking-widest">Change</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Select Date</h3>
              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {dates.map((d, i) => (
                  <button 
                    key={i} 
                    onClick={() => setSelectedDate(d.date)}
                    className={`flex flex-col items-center justify-center min-w-[64px] py-3.5 rounded-lg border transition-colors ${selectedDate === d.date ? "border-white bg-white text-black shadow-md" : "border-[#333] bg-[#111] text-gray-400 hover:border-gray-500"}`}
                  >
                    <span className="text-[9px] font-bold tracking-wider mb-1">{d.day}</span>
                    <span className="text-xl font-bold font-serif" style={{ fontFamily: "Georgia, serif" }}>{d.date}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Select Time</h3>
              <div className="grid grid-cols-3 gap-3">
                {times.map((t, i) => (
                  <button 
                    key={i} 
                    onClick={() => setSelectedTime(t)}
                    className={`py-3 rounded-lg border text-[11px] font-bold tracking-wider transition-colors ${selectedTime === t ? "border-[#C2813F] bg-[#C2813F] text-black shadow-md" : "border-[#333] bg-[#111] text-gray-400 hover:border-gray-500"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={handleBookAppointment}
              className="w-full bg-white text-black py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-gray-800 active:scale-[0.98] transition-all shadow-lg"
            >
              CONFIRM APPOINTMENT
            </button>

            {showSuccess && (
              <div className="fixed inset-0 bg-black/90 z-[300] flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <Star size={32} fill="black" />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-2 font-serif text-[#C2813F]">Confirmed</h2>
                <p className="text-gray-300 font-medium tracking-wide">Your appointment has been secured.</p>
              </div>
            )}
          </div>
        )}

        {/* ===================== PROFILE PAGE ===================== */}
        {page === "profile" && (
          <div className="animate-in fade-in duration-300 px-4">
            
            <div className="flex flex-col items-center pt-6 mb-8">
              <div className="text-4xl font-serif font-bold mb-6" style={{ fontFamily: "Georgia, serif" }}>YSL</div>
              <h2 className="text-2xl font-bold mb-6">Edit Your Profile</h2>
              
              <div className="w-24 h-24 rounded-full border-2 border-white bg-gray-800 overflow-hidden mb-6 relative group cursor-pointer shadow-lg shadow-white/10">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" alt="Profile" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera size={24} className="text-white" />
                </div>
              </div>

              <div className="flex gap-12 text-center">
                <div>
                  <p className="text-3xl font-bold">10</p>
                  <p className="text-xs font-bold text-white tracking-widest uppercase mt-1">perfume</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">4</p>
                  <p className="text-xs font-bold text-white tracking-widest uppercase mt-1">mixes</p>
                </div>
              </div>
            </div>

            <div className="flex gap-1 mb-4 w-full">
              {wardrobeTabsData.map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setWardrobeTab(tab.id)}
                  className={`flex-1 py-4 text-[10px] md:text-xs font-bold transition-all uppercase tracking-wider leading-tight rounded-sm ${wardrobeTab === tab.id ? "bg-white text-black shadow-md scale-[1.02] z-10" : "bg-[#111] text-gray-400 hover:bg-[#222]"}`}
                >
                  {tab.id === 'ysl' && <>YSL<br/>PERFUME</>}
                  {tab.id === 'layering' && <>LAYERING<br/>NOTES</>}
                  {tab.id === 'custom' && <span className="align-middle">MY MIXES</span>}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setShowMixModal(true)}
              className="w-full bg-white text-black py-4 font-bold text-sm uppercase tracking-widest mb-6 rounded-sm hover:bg-gray-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              CREATE NEW MIX <Plus size={16} strokeWidth={3} />
            </button>

            <div className="space-y-4">
              {wardrobeTab === "custom" && customMixes.map((m, i) => (
                <div key={i} className="border border-[#444] bg-[#0a0a0a] rounded-lg p-3 flex gap-4 hover:border-[#555] transition-colors">
                  <div className="w-16 bg-[#111] rounded flex items-center justify-center overflow-hidden py-1">
                    <img src={m.img} alt={m.name} className="h-full object-contain" />
                  </div>
                  <div className="flex-1 py-1">
                    <h4 className="text-sm font-bold tracking-wide uppercase">{m.name}</h4>
                    <p className="text-xs font-bold text-gray-300 mb-2">{m.combo}</p>
                    
                    <div className="flex gap-3 border-b border-[#333] pb-2 mb-2">
                      <span className="flex items-center gap-1 text-[9px] font-bold text-[#4ade80] cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="w-3 h-3 rounded-full border border-current flex items-center justify-center"><Plus size={8} strokeWidth={3}/></div> 
                        {m.owns} Owns
                      </span>
                      <span className="flex items-center gap-1 text-[9px] font-bold text-[#f87171] cursor-pointer hover:opacity-80 transition-opacity">
                        <Heart size={10} fill="currentColor"/> {m.wants} Wants
                      </span>
                      <span className="flex items-center gap-1 text-[9px] font-bold text-[#4ade80] cursor-pointer hover:opacity-80 transition-opacity">
                        <ThumbsUp size={10} fill="currentColor"/> {m.likes} Likes
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      <div className="bg-white text-black px-1.5 py-0.5 rounded text-[8px] font-bold flex items-center gap-1 cursor-default">
                        <Droplet size={9} color="#C2813F"/> NOTES
                      </div>
                      <div className="bg-white text-black px-1.5 py-0.5 rounded text-[8px] font-bold flex items-center gap-1 cursor-default">
                        <User size={9} color="#C2813F"/> VIBE
                      </div>
                      <div className="bg-white text-black px-1.5 py-0.5 rounded text-[8px] font-bold flex items-center gap-1 cursor-default">
                        <BookOpen size={9} color="#C2813F"/> STORY
                      </div>
                      <div className="bg-white text-black px-1.5 py-0.5 rounded text-[8px] font-bold flex items-center gap-1 cursor-default">
                        {m.time === 'NIGHT' ? <Moon size={9} color="#C2813F"/> : <Sun size={9} color="#C2813F"/>} 
                        {m.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {(wardrobeTab === "ysl" || wardrobeTab === "layering") && (
                <div className="grid grid-cols-2 gap-3">
                  {(wardrobeTab === "ysl" ? yslProducts : layeringScents).map((item, idx) => (
                    <div key={idx} className="bg-[#111] border border-[#222] rounded-lg p-3 hover:border-white/30 transition-colors cursor-pointer group">
                      <div className="bg-white/5 h-32 rounded mb-3 flex items-center justify-center overflow-hidden p-2">
                        <img src={item.img} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"/>
                      </div>
                      <p className="font-bold text-sm truncate">{item.name}</p>
                      <p className="text-xs text-gray-400 truncate">{item.type || item.sub}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= COMMUNITY TAB ================= */}
        {page === "community" && (
          <div className="animate-in fade-in duration-300 px-4 text-white">
            <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4 mt-6">Discover Clubs</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="min-w-[220px] border border-[#C2813F] bg-[#111] p-5 flex-shrink-0 rounded-xl shadow-lg hover:bg-[#1a1a1a] transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-[#C2813F] transition-colors">Padel & Perfume</h4>
                  <span className="text-xl">🎾</span>
                </div>
                <p className="text-[10px] font-bold text-[#C2813F] mb-5 tracking-widest">1.2K MEMBERS</p>
                <button className="w-full text-[10px] bg-[#C2813F] text-black py-2.5 font-bold uppercase tracking-widest rounded hover:bg-white active:scale-95 transition-all">Join Club</button>
              </div>
              <div className="min-w-[220px] border border-[#333] bg-[#111] p-5 flex-shrink-0 rounded-xl shadow-lg hover:bg-[#1a1a1a] transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">Pilates Chic</h4>
                  <span className="text-xl">🧘‍♀️</span>
                </div>
                <p className="text-[10px] font-bold text-gray-500 mb-5 tracking-widest">850 MEMBERS</p>
                <button className="w-full text-[10px] bg-white text-black py-2.5 font-bold uppercase tracking-widest rounded active:scale-95 transition-all">Joined</button>
              </div>
              <div className="min-w-[220px] border border-[#C2813F] bg-[#111] p-5 flex-shrink-0 rounded-xl shadow-lg hover:bg-[#1a1a1a] transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-[#C2813F] transition-colors">Evening Society</h4>
                  <span className="text-xl">🍸</span>
                </div>
                <p className="text-[10px] font-bold text-[#C2813F] mb-5 tracking-widest">2.4K MEMBERS</p>
                <button className="w-full text-[10px] bg-[#C2813F] text-black py-2.5 font-bold uppercase tracking-widest rounded hover:bg-white active:scale-95 transition-all">Join Club</button>
              </div>
            </div>

            <div className="bg-[#111] border border-[#333] p-4 rounded-xl mt-6 mb-6 shadow-lg focus-within:border-gray-500 transition-colors">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-serif font-bold text-lg flex-shrink-0" style={{ fontFamily: "Georgia, serif" }}>
                  Y
                </div>
                <div className="flex-1">
                  <textarea 
                    placeholder="Share your scent combinations or thoughts..." 
                    className="w-full bg-transparent text-sm text-white resize-none outline-none placeholder:text-gray-500 font-medium"
                    rows={2}
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3 border-t border-[#333] pt-3">
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-white transition-colors"><Camera size={16} /></button>
                  <button className="text-gray-400 hover:text-[#C2813F] transition-colors"><Star size={16} /></button>
                </div>
                <button className="bg-white text-black px-4 py-1.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors active:scale-95">Post</button>
              </div>
            </div>

            <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Latest Activity</h3>
            <div className="space-y-4">
              {communityPosts.map((post, index) => (
                <div key={index} className="bg-[#111] border border-[#333] p-5 rounded-xl hover:border-gray-500 transition-colors shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center text-lg font-serif font-bold" style={{ fontFamily: "Georgia, serif" }}>
                      {post.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{post.user}</p>
                      <p className="text-[10px] text-[#C2813F] font-bold tracking-wider">{post.time} AGO</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-200 mb-4 leading-relaxed font-medium">{post.content}</p>
                  
                  <div className="flex gap-6 text-gray-400 pt-4 border-t border-[#333]">
                    <button 
                      onClick={() => toggleLike(index)} 
                      className={`flex items-center gap-1.5 text-xs font-bold transition-all duration-300 active:scale-75 ${likedPosts[index] ? "text-[#C2813F]" : "hover:text-white"}`}
                    >
                      <Heart size={18} fill={likedPosts[index] ? "currentColor" : "none"} className={likedPosts[index] ? "scale-110" : ""} /> 
                      {post.likes + (likedPosts[index] ? 1 : 0)}
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-bold hover:text-white transition-all active:scale-90">
                      <MessageCircle size={18} /> {post.replies}
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-bold hover:text-white ml-auto transition-all active:scale-90">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ===================== BOTTOM NAV (NATIVE APP STYLE) ===================== */}
      <nav className={`fixed bottom-0 left-0 w-full z-50 transition-colors duration-300 ${isDarkTheme ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#222] text-gray-400' : 'bg-white/95 backdrop-blur-md border-t border-gray-200 text-gray-500'}`}>
        <div className="w-full max-w-lg mx-auto flex justify-between items-center px-4 py-3 pb-6 relative">
          
          <button onClick={() => setPage("discover")} className={`flex flex-col items-center gap-1 w-14 transition-all duration-300 active:scale-90 ${page === "discover" ? (isDarkTheme ? "text-white scale-110" : "text-black scale-110") : "hover:text-gray-400"}`}>
            <Search size={22} strokeWidth={page === "discover" ? 2.5 : 2} />
            <span className="text-[8px] font-bold uppercase tracking-wider">Discover</span>
          </button>
          
          <button onClick={() => setPage("appointment")} className={`flex flex-col items-center gap-1 w-14 transition-all duration-300 active:scale-90 ${page === "appointment" ? (isDarkTheme ? "text-white scale-110" : "text-black scale-110") : "hover:text-gray-400"}`}>
            <Calendar size={22} strokeWidth={page === "appointment" ? 2.5 : 2} />
            <span className="text-[8px] font-bold uppercase tracking-wider">Appt.</span>
          </button>
          
          {/* CENTER FAB - AI Advisor (BLACK/WHITE THEME) */}
          <div className="relative -top-5" onClick={() => setShowAIChat(true)}>
            <button className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 border-4 bg-black text-white border-gray-200 dark:border-gray-800">
              <Sparkles size={26} strokeWidth={2} color="white" />
            </button>
          </div>

          <button onClick={() => setPage("community")} className={`flex flex-col items-center gap-1 w-14 transition-all duration-300 active:scale-90 ${page === "community" ? (isDarkTheme ? "text-white scale-110" : "text-black scale-110") : "hover:text-gray-400"}`}>
            <Users size={22} strokeWidth={page === "community" ? 2.5 : 2} />
            <span className="text-[8px] font-bold uppercase tracking-wider">Community</span>
          </button>

          <button onClick={() => setPage("profile")} className={`flex flex-col items-center gap-1 w-14 transition-all duration-300 active:scale-90 ${page === "profile" ? (isDarkTheme ? "text-white scale-110" : "text-black scale-110") : "hover:text-gray-400"}`}>
            <User size={22} strokeWidth={page === "profile" ? 2.5 : 2} />
            <span className="text-[8px] font-bold uppercase tracking-wider">Profile</span>
          </button>

        </div>
      </nav>

      {/* ===================== MODAL CREATE MIX (Wardrobe) ===================== */}
      {showMixModal && (
        <div className="fixed inset-0 bg-black/90 z-[200] flex items-end justify-center sm:items-center p-0 sm:p-4">
          <div className="bg-[#111] border border-[#333] w-full max-w-md rounded-t-3xl sm:rounded-2xl p-6 sm:p-8 animate-in slide-in-from-bottom text-white shadow-2xl">
            <div className="flex justify-between items-center mb-8 border-b border-[#333] pb-4">
              <h3 className="text-xl font-bold tracking-widest uppercase text-white">Create New Mix</h3>
              <button onClick={() => setShowMixModal(false)} className="text-gray-400 hover:text-white transition-colors active:scale-90"><X size={24} /></button>
            </div>
            
            <div className="mb-6">
              <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">Mix Name</label>
              <input type="text" className="w-full bg-transparent border-b border-gray-600 text-white py-2 outline-none focus:border-white transition-colors" placeholder="e.g. Morning Fresh" />
            </div>
            
            <div className="mb-8">
              <label className="block text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-wider">Select Accords</label>
              <div className="flex flex-wrap gap-2">
                {scentOptions.map((a) => (
                  <button 
                    key={a} 
                    onClick={() => toggleAccord(a)}
                    className={`px-4 py-2 text-[10px] font-bold border rounded-md uppercase tracking-wider transition-all active:scale-95 ${selectedAccords.includes(a) ? "bg-white text-black border-white" : "text-gray-300 border-gray-600 hover:border-gray-400"}`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-wider">Rating</label>
              <div className="flex gap-2">
                {[1,2,3,4,5].map((s) => (
                  <button key={s} type="button" onClick={() => setRating(s)} className="focus:outline-none transition-transform active:scale-75">
                    <Star size={32} fill={s <= rating ? "white" : "none"} color={s <= rating ? "white" : "#666"} strokeWidth={1.5} />
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-white text-black py-4 rounded-md font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-all active:scale-95 shadow-lg" onClick={() => setShowMixModal(false)}>
              SAVE TO WARDROBE
            </button>
          </div>
        </div>
      )}

      {/* ===================== AI CHAT WIDGET ===================== */}
      {showAIChat && (
        <AIChatWidget onClose={() => setShowAIChat(false)} />
      )}
    </div>
  );
}