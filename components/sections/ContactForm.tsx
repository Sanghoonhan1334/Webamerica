"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactFormProps {
  backgroundImage?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm({
  backgroundImage = "/contact-bg.jpg",
}: ContactFormProps) {
  const { t } = useLanguage();
  const [step1Selected, setStep1Selected] = useState<string>("");
  const [step1Other, setStep1Other] = useState<string>("");
  const [step2Selected, setStep2Selected] = useState<string>("");
  const [step3Description, setStep3Description] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const marketValue = step1Selected === "other" ? step1Other : step1Selected;
      const marketLabel = step1Selected === "other" 
        ? step1Other 
        : t.contact.step1.options[step1Selected as keyof typeof t.contact.step1.options] || step1Selected;
      const stageLabel = t.contact.step2.options[step2Selected as keyof typeof t.contact.step2.options] || step2Selected;

      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          market: marketLabel,
          stage: stageLabel,
          description: step3Description,
        }),
      });

      // 응답이 JSON인지 확인
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error('❌ JSON이 아닌 응답:', text.substring(0, 200));
        throw new Error("서버에서 예상치 못한 응답을 받았습니다. 터미널 로그를 확인해주세요.");
      }

      const data = await response.json();

      if (!response.ok) {
        console.error('❌ API 에러 응답:');
        console.error('  Status:', response.status);
        console.error('  Error:', data.error);
        console.error('  Details:', data.details);
        console.error('  Hint:', data.hint);
        throw new Error(data.error || data.details || "제출 중 오류가 발생했습니다.");
      }

      console.log('✅ 성공:', data);

      setSubmitStatus("success");
      
      // 성공 시 폼 초기화
      setTimeout(() => {
        setStep1Selected("");
        setStep1Other("");
        setStep2Selected("");
        setStep3Description("");
        setName("");
        setEmail("");
        setSubmitStatus("idle");
      }, 3000);

    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다."
      );
    }
  };

  const canProceedToStep2 = step1Selected !== "" && (step1Selected !== "other" || step1Other.trim() !== "");
  const canProceedToStep3 = step2Selected !== "";
  const isFormValid = canProceedToStep3 && step3Description.trim() !== "" && name.trim() !== "" && email.trim() !== "";
  const canSubmit = isFormValid && (submitStatus === "idle" || submitStatus === "error");

  // 성공 메시지 표시
  if (submitStatus === "success") {
    return (
      <section id="contact" className="relative py-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 bg-surface"
            style={{
              backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
              filter: "blur(2px)",
            }}
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div className="relative z-10 container mx-auto">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 text-center">
              <div className="py-8">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text mb-4">
                  {t.contact.success.title}
                </h3>
                <p className="text-text2 text-base md:text-lg mb-6">
                  {t.contact.success.message}
                </p>
                <Button
                  onClick={() => {
                    setStep1Selected("");
                    setStep1Other("");
                    setStep2Selected("");
                    setStep3Description("");
                    setName("");
                    setEmail("");
                    setSubmitStatus("idle");
                  }}
                  variant="outline"
                  className="mt-4"
                >
                  새 문의 작성하기
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-20 px-6 lg:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 bg-surface"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            filter: "blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl mb-4">{t.contact.title}</CardTitle>
              <p className="text-text2 text-base md:text-lg leading-relaxed">
                {t.contact.subtitle}
              </p>
            </CardHeader>
            <CardContent>
              {/* 에러 메시지 */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-button bg-red-500/10 border border-red-500/30">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="flex-1">
                      <h4 className="text-red-400 font-semibold mb-1">
                        {t.contact.error.title}
                      </h4>
                      <p className="text-red-300 text-sm">
                        {errorMessage || t.contact.error.message}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSubmitStatus("idle");
                        setErrorMessage("");
                      }}
                      className="text-red-400 hover:text-red-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* STEP 1: 타깃 시장 선택 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-accent font-semibold">STEP 1</span>
                    <div className="h-px bg-white/10 flex-1" />
                  </div>
                  <label className="block text-text font-semibold mb-4 text-lg">
                    {t.contact.step1.question}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(t.contact.step1.options).map(([key, label]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          setStep1Selected(key);
                          if (key !== "other") setStep1Other("");
                        }}
                        disabled={submitStatus === "loading"}
                        className={`px-6 py-4 rounded-button border-2 text-left transition-all ${
                          step1Selected === key
                            ? "bg-accent border-accent text-white shadow-lg shadow-accentGlow"
                            : "bg-surface border-border text-text hover:border-accent/50"
                        } ${submitStatus === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  {step1Selected === "other" && (
                    <input
                      type="text"
                      value={step1Other}
                      onChange={(e) => setStep1Other(e.target.value)}
                      placeholder="기타 시장을 입력해주세요"
                      disabled={submitStatus === "loading"}
                      className="w-full px-4 py-3 rounded-button bg-surface border border-border text-text placeholder:text-text2 focus:outline-none focus:ring-2 focus:ring-accent mt-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  )}
                </div>

                {/* STEP 2: 현재 단계 선택 */}
                {canProceedToStep2 && (
                  <div className="space-y-4 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-accent font-semibold">STEP 2</span>
                      <div className="h-px bg-white/10 flex-1" />
                    </div>
                    <label className="block text-text font-semibold mb-4 text-lg">
                      {t.contact.step2.question}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {Object.entries(t.contact.step2.options).map(([key, label]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setStep2Selected(key)}
                          disabled={submitStatus === "loading"}
                          className={`px-6 py-4 rounded-button border-2 text-left transition-all ${
                            step2Selected === key
                              ? "bg-accent border-accent text-white shadow-lg shadow-accentGlow"
                              : "bg-surface border-border text-text hover:border-accent/50"
                          } ${submitStatus === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 3: 간단 설명 입력 */}
                {canProceedToStep3 && (
                  <div className="space-y-4 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-accent font-semibold">STEP 3</span>
                      <div className="h-px bg-white/10 flex-1" />
                    </div>
                    <label className="block text-text font-semibold mb-4 text-lg">
                      {t.contact.step3.question}
                    </label>
                    <textarea
                      value={step3Description}
                      onChange={(e) => setStep3Description(e.target.value)}
                      rows={4}
                      maxLength={200}
                      placeholder={t.contact.step3.placeholder}
                      disabled={submitStatus === "loading"}
                      className="w-full px-4 py-3 rounded-button bg-surface border border-border text-text placeholder:text-text2 focus:outline-none focus:ring-2 focus:ring-accent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <p className="text-text2 text-sm text-right">
                      {step3Description.length} / 200
                    </p>
                  </div>
                )}

                {/* 기본 정보 입력 */}
                {canProceedToStep3 && (
                  <div className="space-y-4 transition-all duration-300">
                    <div className="h-px bg-white/10 my-6" />
                    <div>
                      <label htmlFor="name" className="block text-text mb-2 font-medium">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={submitStatus === "loading"}
                        className="w-full px-4 py-3 rounded-button bg-surface border border-border text-text placeholder:text-text2 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder={t.contact.nameLabel}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-text mb-2 font-medium">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={submitStatus === "loading"}
                        className="w-full px-4 py-3 rounded-button bg-surface border border-border text-text placeholder:text-text2 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder={t.contact.emailLabel}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                {isFormValid && (
                  <div className="pt-4 transition-all duration-300">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-base font-semibold"
                      disabled={submitStatus === "loading"}
                    >
                      {submitStatus === "loading" ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          {t.contact.submitting}
                        </span>
                      ) : (
                        t.contact.submitButton
                      )}
                    </Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
