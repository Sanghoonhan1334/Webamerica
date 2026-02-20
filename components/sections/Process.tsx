"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  
  const steps = [
    { label: t.process.steps.planning.label, image: t.process.steps.planning.image },
    { label: t.process.steps.design.label, image: t.process.steps.design.image },
    { label: t.process.steps.development.label, image: t.process.steps.development.image },
    { label: t.process.steps.test.label, image: t.process.steps.test.image },
    { label: t.process.steps.launch.label, image: t.process.steps.launch.image },
  ];
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-text mb-12 text-center">{t.process.title}</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/6 border border-white/10 backdrop-blur-md p-6 md:p-8 flex items-center gap-6 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 cursor-pointer"
              style={{
                boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(59,91,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.45)";
              }}
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accentGlow">
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </div>
              
              {/* Image */}
              <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden bg-surface border border-white/10">
                {step.image ? (
                  <img
                    src={step.image}
                    alt={step.label}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/10">
                    <span className="text-text2 text-xs">사진 준비 중</span>
                  </div>
                )}
              </div>
              
              {/* Label */}
              <div className="flex-1">
                <h3 className="text-text text-xl md:text-2xl font-semibold">{step.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

