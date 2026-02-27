import { Outlet, Link, useLocation } from "react-router";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { AIChatWidget } from "./AIChatWidget";

export function RootLayout() {
  const location = useLocation();
  const [showAIChat, setShowAIChat] = useState(false);

  const tabs = [
    { name: "YSL Scent Power", path: "/" },
    { name: "Our Product", path: "/products" },
    { name: "Scent App", path: "/app" },
  ];

  return (
    <div className="min-h-screen">
      {/* Global Navigation */}
      <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto max-w-4xl">
        <div className="flex bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg border border-black/10 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`px-4 py-2 md:px-8 md:py-3 rounded-full transition-all duration-300 text-sm md:text-base whitespace-nowrap ${ 
                  isActive
                    ? "bg-[#C2813F] text-black"
                    : "text-black hover:bg-black/5"
                }`}
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Floating AI Button */}
      <button
        onClick={() => setShowAIChat(!showAIChat)}
        className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform bg-[#b8884d]"
        aria-label="AI Scent Advisor"
      >
        <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </button>

      {/* AI Chat Widget */}
      {showAIChat && (
        <AIChatWidget onClose={() => setShowAIChat(false)} />
      )}
    </div>
  );
}