"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  
  const steps = [
    { icon: "📄", label: t.process.steps.planning },
    { icon: "👤", label: t.process.steps.design },
    { icon: "⚙️", label: t.process.steps.development },
    { icon: "✓", label: t.process.steps.test },
    { icon: "💡", label: t.process.steps.launch },
  ];
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-text mb-12 text-center">{t.process.title}</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-surface border border-border flex items-center justify-center text-4xl mb-4 shadow-glass">
                  {step.icon}
                </div>
                <span className="text-text text-sm md:text-base text-center">{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center mx-4">
                  <div className="w-12 h-0.5 bg-border" />
                  <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-accent border-b-4 border-b-transparent ml-[-1px]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

