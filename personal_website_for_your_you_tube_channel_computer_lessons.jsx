import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const CHANNEL_NAME = "@mahdi_computer";
const CHANNEL_URL = "https://youtube.com/@mahdi_computer";
const CONTACT_EMAIL = "taherimohamadmahdi40@gmail.com";
const CONTACT_PHONE = "09017902563";

export default function Website() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white text-neutral-900">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-bold">{CHANNEL_NAME}</span>
          <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
            <Button className="rounded-2xl">Subscribe</Button>
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-6">{CHANNEL_NAME}</h1>
        <p className="text-lg mb-4">Learn computer skills from basics to advanced in simple steps.</p>
        <p className="mb-4">Contact: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-500">{CONTACT_EMAIL}</a> | Phone: {CONTACT_PHONE}</p>
        <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
          <Button className="rounded-2xl">Visit YouTube Channel</Button>
        </a>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 bg-neutral-100 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6">تبلیغات ویژه</h2>
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>OpenAI ChatGPT</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">برای دریافت پاسخ‌های دقیق، ایده‌های خلاقانه و کمک در پروژه‌هایتان به <strong>ChatGPT</strong> مراجعه کنید.</p>
            <a href="https://openai.com/chatgpt" target="_blank" rel="noreferrer">
              <Button variant="outline" className="rounded-2xl inline-flex items-center gap-2">
                Visit ChatGPT Website <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t mt-10">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {CHANNEL_NAME}. All rights reserved.</span>
          <a href="https://openai.com/chatgpt" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
            <ExternalLink className="w-4 h-4"/> ChatGPT
          </a>
        </div>
      </footer>
    </div>
  );
}
