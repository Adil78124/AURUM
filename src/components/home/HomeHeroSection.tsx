"use client";

import Image from "next/image";
import { useUiModals } from "@/context/UiModalsContext";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAJtLTEY9Ys-uUy9SASN51dq_MXm-BEogZ_R3_okq1XuXRKJEIttusFCRsRsE0ND95eQxEnbpmohqgQFibXIg7E7Mysx3KuuEBSHFsD5Tx4cb-uQwrch-6Y_9-cAb-pcJyZ48kTgGR709uLvCFPzVwxRT62Yo8sg-5k8IAVSdastFHeZEqvHSBr4sYCUAUL8ZKjej4i__8a7CcT4V8GUkwU2yMC1VKtUZflChZM-a3XH0TOnAh8PZ2ilsVhSsEaOq-5jzreHsQ4w70";

export function HomeHeroSection() {
  const { openBooking, openVip } = useUiModals();

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Интерьер ресторана AURUM"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 hero-vignette" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-56 bg-gradient-to-b from-transparent via-[#0a0a0a]/85 to-[#0a0a0a]" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="mb-2 font-title-italic text-title-italic italic text-primary">
          Welcome to Our Restaurant
        </p>
        <h1 className="mb-12 font-display-lg text-[56px] leading-none tracking-[0.2em] text-primary sm:text-[80px] md:text-[120px]">
          AURUM
        </h1>
        <div className="flex flex-col justify-center gap-6 md:flex-row">
          <button
            type="button"
            onClick={openBooking}
            className="bg-primary-container px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-all gold-glow-strong"
          >
            Забронировать столик
          </button>
          <button
            type="button"
            onClick={openVip}
            className="border border-primary px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest text-primary transition-all hover:bg-primary/10"
          >
            VIP кабинки
          </button>
        </div>
      </div>
    </section>
  );
}
