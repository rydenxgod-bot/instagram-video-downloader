"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Copy, Clipboard, Download, Send } from "lucide-react";
import { homeLinks, homeSections } from "@/lib/constants";

export function HowItWorks() {
  const t = useTranslations("pages.home.howItWorks");

  const steps = [
    {
      id: "step-copy",
      icon: <Copy className="h-8 w-8 text-teal-500" />,
      title: t("steps.copy.title"),
      descriptionDesktop: t("steps.copy.descriptionDesktop"),
      descriptionMobile: t("steps.copy.descriptionMobile"),
    },
    {
      id: "step-paste",
      icon: <Clipboard className="h-8 w-8 text-teal-500" />,
      title: t("steps.paste.title"),
      descriptionDesktop: t("steps.paste.descriptionDesktop"),
      descriptionMobile: t("steps.paste.descriptionMobile"),
    },
    {
      id: "step-download",
      icon: <Download className="h-8 w-8 text-teal-500" />,
      title: t("steps.download.title"),
      descriptionDesktop: t("steps.download.descriptionDesktop"),
      descriptionMobile: t("steps.download.descriptionMobile"),
    },
  ];

  return (
    <section
      id={homeSections.howItWorks}
      className="relative w-full scroll-mt-12 bg-gradient-to-b from-white to-gray-50 py-16 md:py-28 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Floating Emojis */}
      <div className="pointer-events-none absolute left-[10%] top-[-30px] text-3xl animate-float">
        ✨
      </div>
      <div className="pointer-events-none absolute left-[50%] top-[-40px] text-4xl animate-float-delay">
        🚀
      </div>
      <div className="pointer-events-none absolute left-[85%] top-[-20px] text-2xl animate-float">
        🌟
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-14 text-center">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-semibold text-teal-700 dark:bg-teal-800 dark:text-teal-100 shadow-sm">
              {t("badge")}
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              {t("description")}
            </p>
          </div>

          {/* Desktop Steps */}
          <div className="hidden w-full md:grid grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex flex-col items-center space-y-4">
                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white shadow-lg">
                  {idx + 1}
                </div>
                <div className="group relative w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.descriptionDesktop}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Steps */}
          <div className="relative w-full max-w-sm space-y-8 md:hidden">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-teal-200 dark:bg-teal-700"></div>
            {steps.map((step, idx) => (
              <div key={step.id} className="flex items-start space-x-6">
                <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
                  {idx + 1}
                </div>
                <div className="flex-1 rounded-xl border border-gray-100 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-2 flex items-center">
                    {React.cloneElement(step.icon, {
                      className: "mr-2 h-5 w-5 text-teal-500",
                    })}
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{step.descriptionMobile}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Telegram Join Card */}
          <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-teal-300 bg-teal-50/70 p-6 shadow-lg backdrop-blur-md dark:border-teal-700 dark:bg-teal-900/60">
            <div className="absolute -top-5 -left-6 rotate-[-45deg] bg-teal-500 px-8 py-1 text-sm font-semibold text-white shadow-md">
              🚀 Join Us
            </div>
            <div className="relative z-10 text-center">
              <Send className="mx-auto mb-2 h-8 w-8 text-teal-600 dark:text-teal-100" />
              <h3 className="mb-1 text-2xl font-bold text-teal-800 dark:text-white">
                Join Our Telegram
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Get instant updates, support & premium features.
              </p>
              <a
                href="https://t.me/RydenXGod"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-teal-500 px-5 py-2 text-sm font-medium text-white shadow-md hover:bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-600"
              >
                ➕ Join @RydenXGod
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              asChild
              className="rounded-full bg-teal-500 px-6 py-2 text-base font-medium text-white shadow hover:bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-600"
            >
              <a href={homeLinks.hero}>{t("ctaButton")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}