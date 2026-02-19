interface Strength {
  icon: string;
  text: string;
}

interface StrengthsSectionProps {
  title?: string;
  subtitle?: string;
  strengths?: Strength[];
  backgroundImage?: string;
}

export default function StrengthsSection({
  title = "웹아메리카의 장점",
  subtitle = "위의 경험과 팀 구성에서 나오는 솔루션",
  strengths = [
    { icon: "✓", text: "한국 PM이 전 과정 직접 관리" },
    { icon: "✓", text: "초기 창업자 맞춤 기획 설계" },
    { icon: "✓", text: "글로벌 전문 개발팀 운영" },
    { icon: "✓", text: "해외 진출 고려한 구조 설계" },
  ],
  backgroundImage = "/strengths-bg.jpg",
}: StrengthsSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-20">
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-2xl bg-surface"
                style={{
                  backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                  filter: "blur(4px)",
                }}
              />
            </div>
            
            <div
              className="relative z-10 rounded-2xl bg-white/7 border border-white/10 backdrop-blur-md p-8"
              style={{
                boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
              }}
            >
              <h2 className="text-3xl font-bold text-text mb-2">{title}</h2>
              {subtitle && (
                <p className="text-text2 text-sm mb-6">{subtitle}</p>
              )}
              <div className="h-px bg-white/10 mb-8" />
              <div className="grid grid-cols-2 gap-6">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold shadow-lg shadow-accentGlow">
                      {strength.icon}
                    </div>
                    <span className="text-text text-base">{strength.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

