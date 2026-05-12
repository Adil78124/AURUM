import Image from "next/image";
import { Quote } from "lucide-react";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuALFAVrdwNbcEnWbgleRyoCqjTVMMe8agDyY0jSMGOztUblwqp7G_1f4LBhil7yiKI6-LjT6ZUVlTMkytPE_nJDjrBnqgPh9R6n7fxQZfQmrzwoNg18u25CM6BfTnZTUhASdtD98yaoGWz264EuDCtaqEEk3UljciY1i2mzK09Mp9pbm0zfAbEt5feWZCB1CHQ6rlXQk9GpH-q7t2pZ-6FLx9yWS-S0rL2-wLC3UcKvhmYQgBU2IzkXW7x4wTLN-bkxDCREw5DcbsI";

const CHEF_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC73axarFVWnwa_kZn_QZo4IsQ8X0RSk8JrnxgUrWWvcsxu5eOYxWnCPhvdbBrhhhOIkpzTwK4AZREs3a6teEpKeCI0o7nATT0MObXe40SdtAYs0kPExOgScu32VvI7LiO3G8W3z_VCQwHCj3tGWWEh_yGbK23Ylga9pA_ZiOJKcLO2caWXhfimBk53q94b_lsDzXDfbwoUFb6Jkoj6VKQVDjorwUJ8V45pQ430Ln_bRkRC6P6XLuXXWOu3uj-alYM6fnzcXYFA8dY";

export default function AboutPage() {
  return (
    <main className="pt-28 md:pt-32">
      <section className="mx-auto mb-section-gap grid min-h-[600px] max-w-container-max grid-cols-1 items-center gap-gutter px-margin-mobile md:min-h-[819px] md:grid-cols-12 md:px-margin-desktop">
        <div className="space-y-8 md:col-span-5">
          <div className="space-y-4">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.3em] text-primary">
              Искусство гостеприимства
            </span>
            <h1 className="font-display-lg text-display-lg leading-tight text-primary">
              AURUM: Золотой стандарт вкуса
            </h1>
          </div>
          <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            Мы создали пространство, где гастрономия встречается с высокой культурой. В AURUM каждое
            блюдо — это шедевр, созданный из редчайших ингредиентов, а каждый гость — центр нашей
            вселенной. Погрузитесь в атмосферу изысканного спокойствия и безупречного сервиса.
          </p>
          <div className="rounded border border-primary/20 bg-surface-container-low/80 p-6 md:hidden">
            <p className="font-body-md text-on-surface-variant">
              <span className="font-title-italic italic text-primary">О ресторане.</span> AURUM — это
              камерный ресторан с авторской кухней, винной картой и сервисом уровня fine dining.
            </p>
          </div>
        </div>
        <div className="relative md:col-span-7">
          <div className="gold-glow aspect-[4/5] overflow-hidden md:aspect-[16/10]">
            <Image
              src={HERO_IMG}
              alt="Интерьер и сервировка AURUM"
              width={1200}
              height={750}
              className="h-full w-full object-cover grayscale-[20%] transition-all duration-1000 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
          </div>
          <div className="glass-card absolute -bottom-8 -left-8 hidden max-w-xs border border-primary/20 p-8 lg:block">
            <span className="font-title-italic text-title-italic italic text-primary">Est. 2014</span>
            <span className="mt-1 block font-body-md text-body-md text-on-surface-variant">
              Десять лет совершенства
            </span>
          </div>
        </div>
      </section>

      <section className="border-y border-primary/10 bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <div className="mb-12 grid gap-gutter md:grid-cols-2 md:items-center">
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary">
                О ресторане
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">
                Пространство для ценителей вкуса
              </h2>
            </div>
            <p className="font-body-lg text-on-surface-variant">
              Наша кухня опирается на сезонность, локальные фермы и техники мирового уровня. Мы
              бережно относимся к традициям и смело интерпретируем классику — от закусок до десертов.
            </p>
          </div>
          <div className="grid gap-gutter lg:grid-cols-2">
            <p className="font-body-md leading-relaxed text-on-surface-variant">
              Команда AURUM — шеф-повара, сомелье и менеджеры зала — работает как единый механизм,
              чтобы каждый визит ощущался лёгким и завершённым. Мы слышим гостя и подстраиваемся под
              повод: деловой ужин, семейный праздник или камерный вечер вдвоём.
            </p>
            <p className="font-body-md leading-relaxed text-on-surface-variant">
              Интерьер ресторана поддерживает настроение: глубокие оттенки дерева и латуни, мягкий
              свет и приватные зоны. Это не абстрактный «отельный» шик, а атмосфера настоящего
              ресторана, где важны детали сервировки, температура блюда и ритм вечера.
            </p>
          </div>
        </div>
      </section>

      <WhyUsSection />

      <section className="relative overflow-hidden py-section-gap">
        <div className="relative z-10 mx-auto max-w-4xl px-margin-mobile text-center md:px-0">
          <Quote
            className="absolute -top-12 left-0 h-32 w-32 text-primary/20 opacity-50"
            strokeWidth={1}
            aria-hidden
          />
          <p className="font-title-italic text-3xl italic leading-snug text-on-surface md:text-5xl">
            «Золото — это не только блеск в интерьере, это ценность моментов, проведенных за нашим
            столом.»
          </p>
          <div className="mt-12 flex flex-col items-center">
            <div className="mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-primary/30 p-1">
              <Image
                src={CHEF_IMG}
                alt="Шеф-повар AURUM"
                width={64}
                height={64}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <span className="font-label-caps text-label-caps uppercase text-primary">
              Марк Де&apos;Оро
            </span>
            <span className="mt-1 font-body-md text-sm text-on-surface-variant">
              Основатель и шеф-повар
            </span>
          </div>
        </div>
        <div className="absolute -right-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-0 -left-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </section>

      <AboutCtaSection />
    </main>
  );
}
