"use client";

import { useLanguage } from "@/contexts/LanguageContext";

interface TeamSectionProps {
  image?: string;
}

export default function TeamSection({ image }: TeamSectionProps) {
  const { t } = useLanguage();
  
  const members = [
    {
      name: t.team.members.frontend.name,
      role: t.team.members.frontend.role,
      experience: t.team.members.frontend.experience,
      image,
    },
    {
      name: t.team.members.backend.name,
      role: t.team.members.backend.role,
      experience: t.team.members.backend.experience,
      image,
    },
    {
      name: t.team.members.qa.name,
      role: t.team.members.qa.role,
      experience: t.team.members.qa.experience,
      image,
    },
  ];
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{t.team.title}</h2>
          <p className="text-text2 text-lg">{t.team.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <div
                key={index}
                className="rounded-card bg-white/6 border border-white/10 backdrop-blur-md p-6 text-center"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.45)" }}
              >
                {/* Profile Image Placeholder */}
                <div className="w-20 h-20 rounded-full bg-surface border-2 border-white/10 mx-auto mb-4 overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/10">
                      <span className="text-3xl">👨‍💻</span>
                    </div>
                  )}
                </div>

                <h3 className="text-text font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-accent text-sm mb-3">{member.role}</p>
                <p className="text-text2 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

