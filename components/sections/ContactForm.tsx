"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactFormProps {
  backgroundImage?: string;
}

export default function ContactForm({
  backgroundImage = "/contact-bg.jpg",
}: ContactFormProps) {
  const { t } = useLanguage();
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
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-3xl">{t.contact.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-text mb-2">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-button bg-surface border border-border text-text placeholder:text-text2 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t.contact.nameLabel}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-text mb-2">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-button bg-surface border border-border text-text placeholder:text-text2 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t.contact.emailLabel}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-text mb-2">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-button bg-surface border border-border text-text placeholder:text-text2 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder={t.contact.messageLabel}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  {t.contact.submitButton}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

