"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function CapabilitiesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
          {t.capabilities.title}
        </h2>
        <div className="max-w-6xl mx-auto space-y-8">
          {t.capabilities.levels.map((level, levelIndex) => (
            <div
              key={levelIndex}
              className="rounded-2xl bg-white/6 border border-white/10 backdrop-blur-md p-8 md:p-10"
              style={{
                boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
              }}
            >
              {/* Level Header */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-accent flex items-center justify-center shadow-lg shadow-accentGlow">
                    <span className="text-white font-bold text-2xl">{level.level}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-text font-bold text-xl md:text-2xl mb-1">
                      {level.title}
                    </h3>
                    <p className="text-accent text-sm md:text-base font-medium">
                      {level.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-text2 text-sm md:text-base ml-20">
                  {level.description}
                </p>
              </div>

              <div className="h-px bg-white/10 mb-6" />

              {/* Level Items */}
              <div className="grid md:grid-cols-2 gap-4">
                {level.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/3 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/30 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3 h-3 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-text font-semibold text-base mb-1">{item.title}</h4>
                      <p className="text-text2 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

