"use client";

import { useState, useEffect } from "react";

interface FloatingButtonsProps {
  currentLang: "ko" | "es" | "en";
  onLangChange: (lang: "ko" | "es" | "en") => void;
}

export default function FloatingButtons({ currentLang, onLangChange }: FloatingButtonsProps) {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Language Selector - Sticky Top Right */}
      <div className="fixed top-6 right-6 lg:top-8 lg:right-12 z-50">
        <div className="relative">
          <button
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="px-4 py-2 rounded-button bg-white/6 border border-white/10 backdrop-blur-md text-text hover:bg-white/8 transition-colors flex items-center gap-2"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.45)" }}
          >
            {/* Language/Translation Icon */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              />
            </svg>
            <span className="text-sm font-medium">
              {currentLang === "ko" ? "한국어" : currentLang === "es" ? "Español" : "English"}
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${isLangMenuOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Language Dropdown */}
          {isLangMenuOpen && (
            <>
              <div
                className="absolute top-full right-0 mt-2 rounded-button bg-white/6 border border-white/10 backdrop-blur-md overflow-hidden min-w-[120px]"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.45)" }}
              >
                <button
                  onClick={() => {
                    onLangChange("ko");
                    setIsLangMenuOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-white/8 transition-colors ${
                    currentLang === "ko" ? "bg-accent/20 text-accent" : "text-text"
                  }`}
                >
                  한국어
                </button>
                <button
                  onClick={() => {
                    onLangChange("es");
                    setIsLangMenuOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-white/8 transition-colors ${
                    currentLang === "es" ? "bg-accent/20 text-accent" : "text-text"
                  }`}
                >
                  Español
                </button>
                <button
                  onClick={() => {
                    onLangChange("en");
                    setIsLangMenuOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-white/8 transition-colors ${
                    currentLang === "en" ? "bg-accent/20 text-accent" : "text-text"
                  }`}
                >
                  English
                </button>
              </div>
              {/* Backdrop to close menu */}
              <div
                className="fixed inset-0 z-[-1]"
                onClick={() => setIsLangMenuOpen(false)}
              />
            </>
          )}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 lg:bottom-12 lg:right-12 z-50 w-12 h-12 rounded-full bg-accent border border-white/10 backdrop-blur-md text-white hover:bg-accent/90 transition-all flex items-center justify-center shadow-lg shadow-accentGlow"
          style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.45)" }}
          aria-label="맨 위로 이동"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}

