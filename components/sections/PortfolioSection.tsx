"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PortfolioSection() {
  const { t } = useLanguage();
  
  const items = [
    {
      title: t.portfolio.items.corporate.title,
      description: t.portfolio.items.corporate.description,
      category: t.portfolio.items.corporate.category,
      image: "/portfolio-1.jpg",
    },
    {
      title: t.portfolio.items.startup.title,
      description: t.portfolio.items.startup.description,
      category: t.portfolio.items.startup.category,
      image: "/portfolio-2.jpg",
    },
    {
      title: t.portfolio.items.landing.title,
      description: t.portfolio.items.landing.description,
      category: t.portfolio.items.landing.category,
      image: "/portfolio-3.jpg",
    },
    {
      title: t.portfolio.items.ecommerce.title,
      description: t.portfolio.items.ecommerce.description,
      category: t.portfolio.items.ecommerce.category,
      image: "/portfolio-4.jpg",
    },
    {
      title: t.portfolio.items.system.title,
      description: t.portfolio.items.system.description,
      category: t.portfolio.items.system.category,
      image: "/portfolio-5.jpg",
    },
    {
      title: t.portfolio.items.mobile.title,
      description: t.portfolio.items.mobile.description,
      category: t.portfolio.items.mobile.category,
      image: "/portfolio-6.jpg",
    },
  ];
  return (
    <section id="portfolio" className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 text-center">{t.portfolio.title}</h2>
        <p className="text-text2 text-center mb-12 max-w-2xl mx-auto">
          {t.portfolio.subtitle}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 bg-surface">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{
                    backgroundImage: item.image ? `url(${item.image})` : undefined,
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-button bg-accent/80 backdrop-blur-sm text-white text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text2 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

