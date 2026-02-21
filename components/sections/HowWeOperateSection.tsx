"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function HowWeOperateSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-8 text-center">
            {t.howWeOperate.title}
          </h2>
          <div className="rounded-2xl bg-white/6 border border-white/10 backdrop-blur-md p-8 md:p-12"
            style={{
              boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
            }}
          >
            <div className="space-y-4 mb-8">
              {t.howWeOperate.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <p className="text-text text-base leading-relaxed flex-1">{item}</p>
                </div>
              ))}
            </div>
            <div className="h-px bg-white/10 my-8" />
            <div className="text-center space-y-4">
              <p className="text-text text-lg font-semibold mb-2">{t.howWeOperate.resultTitle}</p>
              <p className="text-text2 text-base leading-relaxed">{t.howWeOperate.resultDescription}</p>
              <p className="text-text2 text-sm mt-4 italic">{t.howWeOperate.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

