interface VideoSectionProps {
  title?: string;
  description?: string;
  videoUrl?: string;
  placeholderText?: string;
}

export default function VideoSection({
  title = "인사말",
  description,
  videoUrl,
  placeholderText = "대표 영상 준비 중입니다",
}: VideoSectionProps) {
  return (
    <section className="py-12 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Video Player Placeholder - Compact */}
          <div className="relative rounded-2xl overflow-hidden bg-surface border border-white/10 backdrop-blur-md" style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.45)" }}>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}> {/* 16:9 Aspect Ratio */}
              {videoUrl ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={videoUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-background/80 to-background/60">
                  {/* Play Icon */}
                  <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mb-4 group hover:bg-accent/30 transition-colors">
                    <svg
                      className="w-8 h-8 text-accent ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-text2">{placeholderText}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

