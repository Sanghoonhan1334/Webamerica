"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  logoText?: string;
  backgroundImage?: string;
}

export default function Hero({
  logoText = "웹아메리카",
  backgroundImage = "/hero-bg.jpg",
}: HeroProps) {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background - Mobile: Full, Desktop: Right side only */}
      <div className="absolute inset-0 z-0">
        {/* Left side gradient (desktop only) */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-background via-background/95 to-transparent" />
        
        {/* Right side image (desktop) / Full image (mobile) */}
        <div 
          className="absolute inset-0 lg:inset-y-0 lg:left-1/2 lg:right-0 bg-cover bg-center"
          style={{
            backgroundImage: backgroundImage 
              ? `url('${backgroundImage.replace(/'/g, "\\'")}')` 
              : undefined,
            backgroundPosition: "center right",
            filter: "blur(0.5px)",
          }}
        />
        
        {/* Overlay - darker on mobile, lighter gradient on desktop */}
        <div className="absolute inset-0 bg-background/60 lg:bg-gradient-to-r lg:from-background/80 lg:via-background/50 lg:to-background/30" />
        
        {/* Additional gradient overlay for smooth transition on desktop */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl lg:max-w-xl">
          {/* Brand Identity */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-lg shadow-accentGlow">
                <img
                  src="/로고1.png"
                  alt="Web America Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-text2 text-base font-medium tracking-wider uppercase">WEB AMERICA</span>
                <span className="text-text text-2xl md:text-3xl font-semibold">{logoText}</span>
              </div>
            </div>
          </div>

          {/* Value Proposition - H1 */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-10 leading-tight lg:leading-snug break-keep">
            {t.hero.headline}
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              {t.hero.primaryButton}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-base font-semibold"
              onClick={() => scrollToSection("portfolio")}
            >
              {t.hero.secondaryButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

