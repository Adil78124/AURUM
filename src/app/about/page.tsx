import Image from "next/image";
import { AboutChefSection } from "@/components/about/AboutChefSection";
import { AboutQuoteSection } from "@/components/about/AboutQuoteSection";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";

const HERO_IMG = "/IMG_4924.PNG";

export default function AboutPage() {
  return (
    <main className="pt-28 md:pt-32">
      <section className="mx-auto mb-section-gap grid min-h-[600px] max-w-container-max grid-cols-1 items-center gap-gutter px-margin-mobile md:min-h-[819px] md:grid-cols-12 md:px-margin-desktop">
        <div className="space-y-8 md:col-span-5">
          <div className="space-y-4">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.3em] text-primary">
              Искусство гостеприимства
            </span>
            <h1 className="font-display-lg text-display-lg leading-tight text-on-surface">
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
          <div className="gold-glow aspect-[4/5] overflow-hidden rounded-lg md:aspect-[16/10]">
            <Image
              src={HERO_IMG}
              alt="Интерьер и сервировка AURUM"
              width={1200}
              height={750}
              className="h-full w-full object-cover transition-all duration-1000 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0805] via-transparent to-transparent opacity-70" />
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
              <h2 className="mt-4 font-headline-lg text-headline-lg text-on-surface">
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

      <AboutChefSection />

      <AboutQuoteSection />

      <AboutCtaSection />
    </main>
  );
}
