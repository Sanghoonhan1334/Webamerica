"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function BusinessExpansionSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
            {t.businessExpansion.title}
          </h2>
          <p className="text-text2 text-lg md:text-xl leading-relaxed mb-4">
            {t.businessExpansion.description1}
          </p>
          <p className="text-text2 text-base md:text-lg leading-relaxed">
            {t.businessExpansion.description2}
          </p>
        </div>
      </div>
    </section>
  );
}

