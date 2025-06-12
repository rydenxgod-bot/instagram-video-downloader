import React from "react";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

import { Copy, Download, Clipboard, Send } from "lucide-react";

import { homeLinks, homeSections } from "@/lib/constants";

export function HowItWorks() {
  const t = useTranslations("pages.home.howItWorks");

  return (
    <section
      id={homeSections.howItWorks}
      className="w-full scroll-mt-12 bg-gradient-to-b from-white to-gray-50 py-12 md:py-24 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <div className="mb-2 inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700 dark:bg-teal-800 dark:text-teal-50">
              {t("badge")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {t("title")}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
              {t("description")}
            </p>
          </div>

          {/* Desktop Steps */}
          <div className="relative mx-auto mt-12 hidden w-full max-w-4xl md:block">
            <div className="grid grid-cols-3 gap-4">
              {/* Step 1 */}
              <div className="relative flex flex-col items-center space-y-4">
                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white shadow-lg">
                  1
                </div>
                <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-4 flex justify-center">
                    <Copy className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    {t("steps.copy.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("steps.copy.descriptionDesktop")}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center space-y-4">
                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white shadow-lg">
                  2
                </div>
                <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-4 flex justify-center">
                    <Clipboard className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    {t("steps.paste.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("steps.paste.descriptionDesktop")}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white shadow-lg">
                  3
                </div>
                <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-4 flex justify-center">
                    <Download className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    {t("steps.download.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("steps.download.descriptionDesktop")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Steps */}
          <div className="relative mx-auto w-full max-w-sm space-y-8 md:hidden">
            <div className="absolute top-0 bottom-16 left-4 w-0.5 bg-teal-200"></div>

            {[1, 2, 3].map((step) => {
              const icons = [<Copy />, <Clipboard />, <Download />];
              const titles = [
                t("steps.copy.title"),
                t("steps.paste.title"),
                t("steps.download.title"),
              ];
              const descs = [
                t("steps.copy.descriptionMobile"),
                t("steps.paste.descriptionMobile"),
                t("steps.download.descriptionMobile"),
              ];
              return (
                <div
                  key={step}
                  className="relative flex items-start space-x-6"
                >
                  <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-500 font-bold text-white">
                    {step}
                  </div>
                  <div className="flex-1 rounded-lg border border-gray-100 bg-white p-4 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                    <div className="mb-2 flex items-center">
                      {React.cloneElement(icons[step - 1], {
                        className: "mr-2 h-5 w-5 text-teal-500",
                      })}
                      <h3 className="text-lg font-bold">{titles[step - 1]}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {descs[step - 1]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              className="bg-teal-500 text-white hover:bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-600"
              asChild
            >
              <a href={homeLinks.hero}>{t("ctaButton")}</a>
            </Button>
          </div>

          {/* 🔥 Telegram Banner */}
          <div className="mt-10 w-full rounded-xl bg-teal-100 px-6 py-6 text-center shadow-md dark:bg-teal-900">
            <h3 className="mb-2 text-2xl font-bold text-teal-800 dark:text-teal-100">
              Join Us on Telegram
            </h3>
            <p className="mb-4 text-muted-foreground text-sm">
              Get updates, tips, and features directly in your inbox!
            </p>
            <a
              href="https://t.me/RydenXGod"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-teal-500 px-5 py-2 font-semibold text-white transition hover:bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-600"
            >
              <Send className="mr-2 h-4 w-4" />
              Join @RydenXGod
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}