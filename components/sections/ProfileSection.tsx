"use client";

import { useLanguage } from "@/contexts/LanguageContext";

interface ProfileSectionProps {
  profileImage?: string;
}

export default function ProfileSection({
  profileImage,
}: ProfileSectionProps) {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-8 text-center">{t.profile.title}</h2>
          <div className="rounded-2xl bg-white/6 border border-white/10 backdrop-blur-md p-8 md:p-12" style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.45)" }}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-surface border-4 border-white/10 overflow-hidden">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt={t.profile.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/10">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/30 flex items-center justify-center">
                        <span className="text-4xl md:text-5xl text-accent">👤</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">{t.profile.name}</h2>
                <p className="text-accent text-lg mb-4">{t.profile.role}</p>
                <p className="text-text2 mb-6 leading-relaxed">{t.profile.bio}</p>

                {/* Experience Bullets */}
                <div className="space-y-3">
                  {t.profile.experiences.map((exp, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-text">{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

