"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

/** 썸네일: public 루트에 A.webp, H.webp, W.webp, E.webp, F.webp, P.webp */
const IMAGE_FOLDER = "";

export default function PortfolioSection() {
  const { t } = useLanguage();

  const items = [
    {
      title: t.portfolio.items.amico.title,
      description: t.portfolio.items.amico.description,
      category: t.portfolio.items.amico.category,
      href: "https://www.helloamiko.com/main?tab=home",
      initial: "A",
    },
    {
      title: t.portfolio.items.haeyun.title,
      description: t.portfolio.items.haeyun.description,
      category: t.portfolio.items.haeyun.category,
      href: "https://hae-yun.vercel.app/",
      initial: "H",
    },
    {
      title: t.portfolio.items.blockchain.title,
      description: t.portfolio.items.blockchain.description,
      category: t.portfolio.items.blockchain.category,
      href: "https://www.apolopay.app",
      initial: "W",
    },
    {
      title: t.portfolio.items.kindergarten.title,
      description: t.portfolio.items.kindergarten.description,
      category: t.portfolio.items.kindergarten.category,
      href: "https://elizabeth-web-two.vercel.app",
      initial: "E",
    },
    {
      title: t.portfolio.items.forum.title,
      description: t.portfolio.items.forum.description,
      category: t.portfolio.items.forum.category,
      href: "https://foro.arepa.digital",
      initial: "F",
    },
    {
      title: t.portfolio.items.winner.title,
      description: t.portfolio.items.winner.description,
      category: t.portfolio.items.winner.category,
      href: "https://proplays.app",
      initial: "P",
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
          {items.map((item, index) => {
            const imagePath = IMAGE_FOLDER ? `${IMAGE_FOLDER}/${item.initial}` : `/${item.initial}`;
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              >
                <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 h-full">
                  <div className="relative h-48 bg-surface overflow-hidden">
                    {/* 썸네일: public/images 폴더의 A, H, W, E, F, P 파일 (.webp) */}
                    <img
                      src={`${imagePath}.webp`}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 z-10 w-full h-full object-cover object-center bg-surface"
                      onError={(e) => {
                        const el = e.currentTarget;
                        if (el.src.endsWith(".webp")) {
                          el.src = `${imagePath}.png`;
                        } else if (el.src.endsWith(".png")) {
                          el.src = `${imagePath}.jpg`;
                        } else {
                          el.style.display = "none";
                        }
                      }}
                    />
                    {/* 알파벳은 이미지 로드 실패 시에만 표시 */}
                    <div
                      className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br from-accent/40 to-accent/10 pointer-events-none"
                      aria-hidden
                    >
                      <span className="text-4xl font-bold text-white/90 drop-shadow">
                        {item.initial}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4 z-20">
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
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

