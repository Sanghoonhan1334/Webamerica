"use client";

import { useState } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Hero from "@/components/sections/Hero";
import ProblemsAndSolution from "@/components/sections/ProblemsAndSolution";
import VideoSection from "@/components/sections/VideoSection";
import ProfileSection from "@/components/sections/ProfileSection";
import TeamSection from "@/components/sections/TeamSection";
import Process from "@/components/sections/Process";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactForm from "@/components/sections/ContactForm";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  const [currentLang, setCurrentLang] = useState<"ko" | "es" | "en">("ko");

  return (
    <LanguageProvider language={currentLang} setLanguage={setCurrentLang}>
      <main className="min-h-screen">
        {/* Floating Buttons - Language & Scroll to Top */}
        <FloatingButtons currentLang={currentLang} onLangChange={setCurrentLang} />
        
        {/* 1. Hero 섹션 */}
        <Hero backgroundImage="/홈페이지 사진1.png" />
        
        {/* 2. 해외 외주 시 자주 겪는 문제 + 웹아메리카의 해결 구조 (나란히) */}
        <ProblemsAndSolution />
        
        {/* 3. 대표 PM 소개 (프로필) */}
        <ProfileSection />
        
        {/* 4. 글로벌 전문 파트너 팀 */}
        <TeamSection />
        
        {/* 5. 진행 프로세스 */}
        <Process />
        
        {/* 6. 대표 영상 */}
        <VideoSection />
        
        {/* 7. 프로젝트 문의 */}
        <ContactForm />
        
        {/* 8. 포트폴리오 */}
        <PortfolioSection />
      </main>
    </LanguageProvider>
  );
}

