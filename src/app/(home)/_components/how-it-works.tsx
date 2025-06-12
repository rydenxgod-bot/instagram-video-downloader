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
      id: "copy",
      icon: <Copy className="h-8 w-8 text-teal-500" />,
      title: t("steps.copy.title"),
      descDesktop: t("steps.copy.descriptionDesktop"),
      descMobile: t("steps.copy.descriptionMobile"),
    },
    {
      id: "paste",
      icon: <Clipboard className="h-8 w-8 text-teal-500" />,
      title: t("steps.paste.title"),
      descDesktop: t("steps.paste.descriptionDesktop"),
      descMobile: t("steps.paste.descriptionMobile"),
    },
    {
      id: "download",
      icon: <Download className="h-8 w-8 text-teal-500" />,
      title: t("steps.download.title"),
      descDesktop: t("steps.download.descriptionDesktop"),
      descMobile: t("steps.download.descriptionMobile"),
    },
  ];

  return (
    <section
      id={homeSections.howItWorks}
      className="w-full scroll-mt-12 bg-gradient-to-b from-white to-gray-50 py-12 md:py-24 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Header */}
          <div className="space-y-2">
            <div className="mb-2 inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700 dark:bg-teal-800 dark:text-teal-50">
              {t("badge")}
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t("description")}
            </p>
          </div>

          {/* Desktop Steps */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white shadow-lg">
                    {idx + 1}
                  </div>
                  <div className="w-full rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-transform hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800">
                    <div className="mb-4 flex justify-center">{step.icon}</div>
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.descDesktop}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Steps */}
          <div className="relative w-full max-w-sm space-y-8 md:hidden">
            {/* vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-teal-200"></div>
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className="flex items-start space-x-6"
              >
                <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
                  {idx + 1}
                </div>
                <div className="flex-1 rounded-lg border border-gray-100 bg-white p-4 shadow-md transition-transform hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-2 flex items-center">
                    {React.cloneElement(step.icon, {
                      className: "mr-2 h-5 w-5 text-teal-500",
                    })}
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {step.descMobile}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Unique Ribbon-Style Telegram Banner */}
          <div className="relative mt-10 w-full max-w-md overflow-hidden rounded-lg bg-teal-50 py-8 text-center shadow-lg dark:bg-teal-900">
            {/* Ribbon corner */}
            <div className="absolute top-0 right-0 h-16 w-16 rotate-45 translate-x-8 -translate-y-8 bg-teal-500"></div>
            {/* Content */}
            <div className="relative px-6">
              <Send className="mx-auto mb-2 h-8 w-8 text-teal-500 dark:text-teal-50" />
              <h3 className="mb-2 text-2xl font-bold text-teal-700 dark:text-teal-100">
                Join Our Telegram
              </h3>
              <p className="mx-auto mb-4 max-w-xs text-sm text-muted-foreground">
                Be the first to get updates, tips, and exclusive features!
              </p>
              <a
                href="https://t.me/RydenXGod"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-teal-500 px-6 py-2 font-medium text-white hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-500 transition"
              >
                Go to Channel
              </a>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="pt-8">
            <Button
              asChild
              className="bg-teal-500 text-white hover:bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-600"
            >
              <a href={homeLinks.hero}>{t("ctaButton")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}