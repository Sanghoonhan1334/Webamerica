interface Problem {
  icon: string;
  text: string;
}

interface ProblemsSectionProps {
  title?: string;
  problems?: Problem[];
}

export default function ProblemsSection({
  title = "해외 외주 시 자주 겪는 문제",
  problems = [
    { icon: "💬", text: "소통 문제" },
    { icon: "🔶", text: "요구사항 오해" },
    { icon: "⏰", text: "일정 지연" },
    { icon: "📋", text: "시차/스케쥴 충돌" },
  ],
}: ProblemsSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-2xl bg-white/6 border border-white/10 backdrop-blur-md p-8"
            style={{
              boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
            }}
          >
            <h2 className="text-3xl font-bold text-text mb-6">{title}</h2>
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
        </div>
      </div>
    </section>
  );
}

