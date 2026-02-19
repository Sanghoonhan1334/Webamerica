interface Problem {
  icon: string;
  text: string;
}

interface Strength {
  icon: string;
  text: string;
}

interface ProblemsAndStrengthsProps {
  problemsTitle?: string;
  strengthsTitle?: string;
  problems?: Problem[];
  strengths?: Strength[];
  backgroundImage?: string;
}

export default function ProblemsAndStrengths({
  problemsTitle = "해외 외주 시 자주 겪는 문제",
  strengthsTitle = "웹아메리카의 장점",
  problems = [
    { icon: "💬", text: "소통 문제" },
    { icon: "🔶", text: "요구사항 오해" },
    { icon: "⏰", text: "일정 지연" },
    { icon: "📋", text: "시차/스케쥴 충돌" },
  ],
  strengths = [
    { icon: "✓", text: "한국 PM이 전 과정 직접 관리" },
    { icon: "✓", text: "초기 창업자 맞춤 기획 설계" },
    { icon: "✓", text: "글로벌 전문 개발팀 운영" },
    { icon: "✓", text: "해외 진출 고려한 구조 설계" },
  ],
  backgroundImage = "/strengths-bg.jpg",
}: ProblemsAndStrengthsProps) {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems Card */}
          <div
            className="rounded-2xl bg-white/6 border border-white/10 backdrop-blur-md p-8"
            style={{
              boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
            }}
          >
            <h2 className="text-3xl font-bold text-text mb-6">{problemsTitle}</h2>
            <div className="h-px bg-white/10 mb-8" />
            <div className="grid grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-2xl">{problem.icon}</div>
                  <span className="text-text text-base">{problem.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths Card */}
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
              <h2 className="text-3xl font-bold text-text mb-6">{strengthsTitle}</h2>
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

