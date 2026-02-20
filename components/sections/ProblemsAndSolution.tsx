"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function ProblemsAndSolution() {
  const { t } = useLanguage();
  
  const problems = [
    { 
      title: t.problems.items.communication.title,
      description: t.problems.items.communication.description,
      image: t.problems.items.communication.image,
    },
    { 
      title: t.problems.items.delay.title,
      description: t.problems.items.delay.description,
      image: t.problems.items.delay.image,
    },
    { 
      title: t.problems.items.support.title,
      description: t.problems.items.support.description,
      image: t.problems.items.support.image,
    },
  ];
  
  const solutions = [
    {
      title: t.solution.items.pm,
      description: t.solution.items.pmDesc,
      icon: "✓",
    },
    {
      title: t.solution.items.team,
      description: t.solution.items.teamDesc,
      icon: "✓",
    },
  ];
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Problems Card */}
          <div
            className="rounded-2xl bg-white/6 border border-white/10 backdrop-blur-md p-8"
            style={{
              boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
            }}
          >
            <h2 className="text-3xl font-bold text-text mb-6">{t.problems.title}</h2>
            <div className="h-px bg-white/10 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-text text-lg font-semibold">{problem.title}</h3>
                  </div>
                  <div className="w-full h-48 rounded-lg overflow-hidden bg-surface border border-white/10">
                    {problem.image ? (
                      <img
                        src={problem.image}
                        alt={problem.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/10">
                        <span className="text-text2 text-sm">사진 준비 중</span>
                      </div>
                    )}
                  </div>
                  <p className="text-text2 text-sm leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Card */}
          <div
            className="rounded-2xl bg-white/6 border border-white/10 backdrop-blur-md p-8"
            style={{
              boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
            }}
          >
            <h2 className="text-3xl font-bold text-text mb-6">{t.solution.title}</h2>
            <div className="h-px bg-white/10 mb-8" />
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4">
                  {solution.icon && (
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-accentGlow">
                      <span className="text-white font-bold text-xl">{solution.icon}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-text font-semibold mb-2">{solution.title}</h3>
                    <p className="text-text2 text-sm">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

