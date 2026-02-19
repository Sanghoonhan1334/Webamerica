interface EarlyPartnersSectionProps {
  title?: string;
  message?: string;
  highlightText?: string;
}

export default function EarlyPartnersSection({
  title = "초기 협업 파트너를 위한 지원",
  message = "저 역시 창업자로서, 초기 단계의 부담을 잘 알고 있습니다. 그래서 초기 협업 팀에게는 전략 상담을 함께 제공합니다.",
  highlightText,
}: EarlyPartnersSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-white/6 border border-white/10 backdrop-blur-md p-8 md:p-12 text-center" style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.45)" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">{title}</h2>
            <div className="h-px bg-white/10 mb-8 max-w-24 mx-auto" />
            <p className="text-text2 text-lg leading-relaxed mb-8">
              {message}
            </p>
            
            {highlightText && (
              <div className="mt-6 p-4 rounded-button bg-accent/10 border border-accent/20">
                <p className="text-text text-sm">{highlightText}</p>
              </div>
            )}

            {/* Key Points */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                  <span className="text-2xl">💬</span>
                </div>
                <p className="text-text text-sm">전략 상담</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <p className="text-text text-sm">맞춤 솔루션</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <p className="text-text text-sm">성장 지원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

