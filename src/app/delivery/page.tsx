import Image from "next/image";
import Link from "next/link";
import { CookingPot, Laptop, PartyPopper, Soup } from "lucide-react";
import { DeliveryForm } from "@/components/delivery/DeliveryForm";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCoS_QhtFxP-ToG47PhA69DnAiQBqC0746NvtSdjp6plSAQUZgqrtZFALGdmtnCdCFMz0T3dhIE97tAPGMPgqiIH-vmd5apAMiPD_oTxFlnaWmIphBdqJucrdC1yRbNG056-GtStz4JqpdMGt09PJTH5iu3c9nIgfULaibX9V5NuvNqUSHWAPquqVOUGVF-YbYMQWMFNaOIDjz78yFvD_AlqzFSk1lTvlkvgdp-5dleuqdbmgP_q46E1jQsTuQr_viyrjlHoqPR_xk";

const ghostBtn =
  "inline-flex min-w-[220px] items-center justify-center border border-primary px-10 py-4 font-label-caps text-label-caps uppercase tracking-[0.18em] text-primary transition-all hover:bg-primary/10";

export default function DeliveryPage() {
  return (
    <main className="overflow-x-hidden bg-[#0c0805] font-body-md text-on-surface">
      <section className="relative flex min-h-[760px] w-full items-center overflow-hidden pb-28 pt-28 md:min-h-[900px] md:pb-36 md:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMG}
            alt="Доставка AURUM"
            fill
            priority
            className="object-cover object-center grayscale-[15%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0604]/90 via-[#120a06]/55 to-black/20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-b from-transparent via-[#0c0805]/82 to-[#0a0705]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl">
            <h1 className="mb-5 font-display-lg text-headline-lg-mobile text-on-surface md:text-display-lg">
              Доставка <span className="text-primary">AURUM</span>
            </h1>
            <p className="mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
              Хотите насладиться блюдами и напитками, не выходя из дома? Мы приготовим ваш заказ и
              доставим по Алматы в удобное время — с премиальной упаковкой и контролем температуры.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/menu" className={ghostBtn}>
                Посмотреть меню
              </Link>
              <a href="#oformlenie-zakaza" className={ghostBtn}>
                Оформление заказа
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-20 px-margin-mobile pb-6 md:-mt-28 md:px-margin-desktop">
        <div className="mx-auto max-w-container-max rounded-t-[2.5rem] bg-[#e8e4dc] px-6 py-16 text-zinc-900 shadow-[0_-20px_60px_rgba(0,0,0,0.35)] md:px-16 md:py-20">
          <div className="mb-14 flex items-center justify-center gap-6">
            <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-[#c08431]/60 to-transparent md:block" />
            <h2 className="text-center font-headline-lg text-headline-lg-mobile italic text-[#3a2a1a] md:text-headline-lg">
              Доставка AURUM — идеальный вариант, если:
            </h2>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-[#c08431]/60 to-transparent md:block" />
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-14 md:gap-y-12">
            <div className="flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f2efe8] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                <Soup className="h-7 w-7 text-[#3a2a1a]" strokeWidth={1.5} aria-hidden />
              </div>
              <div>
                <p className="font-body-lg font-semibold text-[#2b2118]">
                  Вы хотите получить заказ быстро и в горячем виде
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Термоупаковка и логистика курьерской службы сохраняют подачу блюд максимально близкой
                  к ресторанной.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f2efe8] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                <CookingPot className="h-7 w-7 text-[#3a2a1a]" strokeWidth={1.5} aria-hidden />
              </div>
              <div>
                <p className="font-body-lg font-semibold text-[#2b2118]">Нет возможности готовить самим</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Передайте вечер на кухню шефам AURUM — от закусок до авторских основных блюд.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f2efe8] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                <Laptop className="h-7 w-7 text-[#3a2a1a]" strokeWidth={1.5} aria-hidden />
              </div>
              <div>
                <p className="font-body-lg font-semibold text-[#2b2118]">
                  Хочется отдохнуть дома, в любимой обстановке, со вкусными блюдами
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Сервис премиального уровня без поездки в ресторан — для домашнего отдыха и встреч.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f2efe8] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                <PartyPopper className="h-7 w-7 text-[#3a2a1a]" strokeWidth={1.5} aria-hidden />
              </div>
              <div>
                <p className="font-body-lg font-semibold text-[#2b2118]">
                  У вас дома торжество или просто приятный вечер
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Соберём сет меню и подачу под формат праздника — от камерного ужина до семейного
                  застолья.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DeliveryForm />
    </main>
  );
}
