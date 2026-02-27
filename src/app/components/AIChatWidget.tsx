import { X, Camera, Send } from "lucide-react";
import { useState } from "react";

export function AIChatWidget({ onClose }: { onClose: () => void }) {
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
        
        // Simulate AI response
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: "Today you look absolutely stunning, you are giving bold, sophisticated mamah muda vibes. Based on this energy, I suggest layering Scent Combination: YSL Libre and VECTOR.",
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
    <div className="fixed bottom-20 md:bottom-32 right-4 md:right-8 z-50 w-[calc(100vw-2rem)] md:w-96 h-[500px] md:h-[600px] bg-white text-black shadow-2xl flex flex-col">
      {/* Header */}
      <div className="bg-black text-white p-3 md:p-4 flex justify-between items-center">
        <div>
          <h3 className="text-base md:text-lg" style={{ fontFamily: "'Bodoni Moda', serif" }}>
            AI Scent Advisor
          </h3>
          <p className="text-[10px] md:text-xs text-white/70">Powered by YSL Beauty</p>
        </div>
        <button onClick={onClose} className="hover:text-[#C2813F] transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
        {uploadedImage ? (
          <div className="mb-4">
            <div className="bg-neutral-100 p-3 md:p-4 rounded">
              <p className="text-[10px] md:text-xs uppercase tracking-wider mb-3 text-black/60">Your Selfie Analysis</p>
              <img
                src={uploadedImage}
                alt="Uploaded selfie"
                className="w-full h-40 md:h-48 object-cover rounded mb-3"
              />
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-black/60">
                <Camera className="w-3 h-3" />
                <span>Analyzing your style and mood...</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <div className="border-2 border-dashed border-black/20 p-6 md:p-8 rounded text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-3">
                <Camera className="w-6 h-6 md:w-8 md:h-8 text-black/40" />
              </div>
              <p className="text-xs md:text-sm mb-2">Upload Your Selfie</p>
              <p className="text-[10px] md:text-xs text-black/60 mb-4">Get personalized scent recommendations based on your look and mood</p>
              <label className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-black text-white hover:bg-[#C2813F] transition-colors cursor-pointer text-xs md:text-sm">
                <Camera className="w-3 h-3 md:w-4 md:h-4" />
                Take or Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
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
                              content: "Today you look absolutely stunning, you are giving bold, sophisticated mamah muda vibes. Based on this energy, I suggest layering Scent Combination: YSL Libre and VECTOR.",
                            },
                          ]);
                        }, 1500);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        )}
        
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] p-2 md:p-3 ${
                message.role === "user"
                  ? "bg-black text-white"
                  : "bg-neutral-100 text-black"
              }`}
            >
              <p className="text-xs md:text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Prompts */}
      <div className="px-3 md:px-4 py-2 md:py-3 border-t border-black/10">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleQuickPrompt(prompt)}
              className="flex-shrink-0 px-2 py-1.5 md:px-3 md:py-2 bg-black/5 hover:bg-black hover:text-white transition-colors text-[10px] md:text-xs whitespace-nowrap"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-3 md:p-4 border-t border-black/10">
        <div className="flex gap-2">
          <label className="cursor-pointer p-2 hover:bg-black/5 transition-colors touch-manipulation">
            <Camera className="w-4 h-4 md:w-5 md:h-5" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 px-2 md:px-3 py-2 border border-black/10 focus:outline-none focus:border-black text-xs md:text-sm"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-black text-white hover:bg-[#C2813F] transition-colors touch-manipulation"
          >
            <Send className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}