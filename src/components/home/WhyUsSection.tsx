"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Utensils, Star, BookOpen, Armchair } from "lucide-react";
import { premiumEase, staggerItem, staggerParent, viewportOnce } from "@/lib/animations";

const NOISE_SVG =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

const CARDS = [
  {
    key: "tl",
    title: "Качественные продукты",
    text: "Прямые поставки деликатесов и фермерских продуктов высшей категории.",
    Icon: Utensils,
    desktop:
      "left-[1%] top-[5%] max-w-[min(280px,26vw)] text-left xl:left-[3%] xl:top-[7%] xl:max-w-[300px]",
  },
  {
    key: "tr",
    title: "VIP обслуживание",
    text: "Персональный подход к каждому гостю и внимание к мельчайшим деталям.",
    Icon: Star,
    desktop:
      "right-[1%] top-[3%] max-w-[min(280px,26vw)] text-right xl:right-[4%] xl:top-[5%] xl:max-w-[300px]",
  },
  {
    key: "bl",
    title: "Популярное меню",
    text: "Авторская интерпретация классических блюд мировой кухни от шеф-повара.",
    Icon: BookOpen,
    desktop:
      "bottom-[10%] left-[2%] max-w-[min(280px,26vw)] text-left xl:bottom-[12%] xl:left-[5%] xl:max-w-[300px]",
  },
  {
    key: "br",
    title: "Уютная атмосфера",
    text: "Камерная обстановка с мягким светом и живой музыкой для вашего комфорта.",
    Icon: Armchair,
    desktop:
      "bottom-[8%] right-[2%] max-w-[min(280px,26vw)] text-right xl:bottom-[11%] xl:right-[5%] xl:max-w-[300px]",
  },
] as const;

function deskCardMotion(key: (typeof CARDS)[number]["key"], reduced: boolean) {
  const d = reduced ? 0 : 22;
  if (key === "tl" || key === "bl") {
    return {
      hidden: reduced ? { opacity: 0 } : { opacity: 0, x: -d },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: reduced ? 0.32 : 0.88, ease: premiumEase },
      },
    };
  }
  return {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, x: d },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: reduced ? 0.32 : 0.88, ease: premiumEase },
    },
  };
}

function WhyUsArrowsDesktop({ reduced }: { reduced: boolean }) {
  const stroke = "#ea580c";
  const strokeSoft = "#f97316";
  return (
    <motion.svg
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full overflow-visible"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial={{ opacity: reduced ? 1 : 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: reduced ? 0.2 : 1.15, ease: premiumEase, delay: reduced ? 0 : 0.2 }}
    >
      <defs>
        <filter id="why-us-arrow-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g className="why-us-arrow-drift opacity-[0.92]" filter="url(#why-us-arrow-glow)">
        <path
          d="M 120 210 C 260 260, 340 320, 470 355"
          stroke={strokeSoft}
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M 110 198 C 255 252, 335 312, 462 348"
          stroke={stroke}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </g>
      <g className="why-us-arrow-drift-delayed opacity-[0.9]" filter="url(#why-us-arrow-glow)">
        <path
          d="M 1080 195 C 940 255, 820 315, 718 352"
          stroke={strokeSoft}
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M 1092 188 C 948 248, 828 308, 728 345"
          stroke={stroke}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </g>
      <g className="why-us-arrow-drift-slow opacity-[0.88]" filter="url(#why-us-arrow-glow)">
        <path
          d="M 145 545 C 280 460, 380 410, 475 382"
          stroke={strokeSoft}
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M 132 558 C 272 468, 372 418, 468 388"
          stroke={stroke}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </g>
      <g
        className="why-us-arrow-drift opacity-[0.9]"
        filter="url(#why-us-arrow-glow)"
        style={{ animationDelay: "-2.5s" }}
      >
        <path
          d="M 1055 540 C 920 455, 800 405, 722 378"
          stroke={strokeSoft}
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M 1068 552 C 928 462, 808 412, 730 384"
          stroke={stroke}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </g>
    </motion.svg>
  );
}

function MobileArrowDivider({ flip }: { flip?: boolean }) {
  return (
    <div
      className={`flex justify-center py-1 opacity-80 ${flip ? "scale-x-[-1]" : ""}`}
      aria-hidden
    >
      <svg width="120" height="28" viewBox="0 0 120 28" className="text-[#ea580c]">
        <path
          d="M 8 22 Q 60 4 112 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}

function CenterTitle({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={`relative mx-auto w-max ${className}`}
      initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration: reduced ? 0.35 : 0.95, ease: premiumEase }}
    >
      <div
        className="why-us-center-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[140%] w-[160%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.14)_0%,rgba(240,197,103,0.06)_35%,transparent_65%)] blur-2xl"
        aria-hidden
      />
      <div className="flex items-stretch justify-center gap-3 sm:gap-5">
        <span
          className="w-2 shrink-0 rounded-l-sm border-b-2 border-l-2 border-t-2 border-white/55 sm:w-2.5"
          aria-hidden
        />
        <div className="px-1 text-center sm:px-2">
          <span className="mb-2 block font-label-caps text-[10px] tracking-[0.32em] text-primary/75 sm:text-[11px]">
            НАШИ ПРЕИМУЩЕСТВА
          </span>
          <h2
            className="font-[family-name:var(--font-manrope)] text-[clamp(1.85rem,6.5vw,4.35rem)] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-white"
            style={{
              textShadow:
                "0 2px 0 rgba(0,0,0,0.55), 0 0 40px rgba(255,228,175,0.12), 0 0 1px rgba(255,255,255,0.35)",
            }}
          >
            Почему
            <br />
            именно
            <br />
            мы?
          </h2>
        </div>
        <span
          className="w-2 shrink-0 rounded-r-sm border-b-2 border-r-2 border-t-2 border-white/55 sm:w-2.5"
          aria-hidden
        />
      </div>
    </motion.div>
  );
}

export function WhyUsSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#060606] py-section-gap">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.11] mix-blend-soft-light"
        style={{ backgroundImage: NOISE_SVG }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_42%,rgba(240,197,103,0.07)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(234,88,12,0.06)_0%,transparent_40%),radial-gradient(circle_at_85%_70%,rgba(234,88,12,0.05)_0%,transparent_38%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[min(1380px,calc(100vw-1.5rem))] px-margin-mobile md:px-8 lg:px-10">
        <div className="lg:hidden">
          <div className="relative py-4">
            <CenterTitle />
          </div>
          <MobileArrowDivider />
          <motion.div
            className="mx-auto mt-6 max-w-lg space-y-6 pb-2 sm:max-w-xl"
            variants={staggerParent(Boolean(reduced), 0.12, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {CARDS.map(({ title, text, Icon, key }, i) => (
              <motion.div key={key} variants={staggerItem(Boolean(reduced))}>
                <div>
                  <div className="group border-l-2 border-[#ea580c]/70 pl-4 transition-all duration-500 ease-out hover:border-primary hover:pl-5 hover:shadow-[0_0_22px_rgba(240,197,103,0.1)] sm:pl-5">
                    <div className="flex items-start gap-3">
                      <Icon
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary/50 transition-colors group-hover:text-primary/80"
                        strokeWidth={1.4}
                        aria-hidden
                      />
                      <div>
                        <h3 className="font-[family-name:var(--font-manrope)] text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors group-hover:text-primary">
                          {title}
                        </h3>
                        <p className="mt-2 font-body-md text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                  {i < CARDS.length - 1 ? <MobileArrowDivider flip={i % 2 === 1} /> : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="relative mx-auto hidden min-h-[min(720px,82vh)] w-full lg:block xl:min-h-[760px]">
          <WhyUsArrowsDesktop reduced={Boolean(reduced)} />

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2">
            <div className="h-48 w-48 rounded-full bg-primary/5 blur-3xl xl:h-56 xl:w-56" aria-hidden />
          </div>

          {CARDS.map(({ title, text, Icon, desktop, key }) => (
            <motion.article
              key={key}
              className={`group absolute z-[5] ${desktop}`}
              variants={deskCardMotion(key, Boolean(reduced))}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="transition duration-500 ease-out will-change-transform group-hover:-translate-y-1 group-hover:shadow-[0_0_28px_rgba(240,197,103,0.12)]">
                <div
                  className={`mb-2 flex items-center gap-2 ${key === "tr" || key === "br" ? "justify-end" : "justify-start"}`}
                >
                  <Icon
                    className="h-5 w-5 text-primary/45 transition-colors group-hover:text-primary/85"
                    strokeWidth={1.35}
                    aria-hidden
                  />
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] text-[13px] font-bold uppercase leading-snug tracking-[0.16em] text-white transition-[color,text-shadow] duration-300 group-hover:text-primary xl:text-sm">
                  {title}
                </h3>
                <p className="mt-2.5 font-body-md text-[13px] leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300 xl:text-sm">
                  {text}
                </p>
              </div>
            </motion.article>
          ))}

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <CenterTitle />
          </div>
        </div>
      </div>
    </section>
  );
}
