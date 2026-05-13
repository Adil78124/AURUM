export function AboutQuoteSection() {
  return (
    <section className="relative overflow-hidden py-section-gap">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_40%,rgba(212,168,83,0.08),transparent_62%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-amber-900/12 blur-[100px] interior-ambient-orb" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-950/20 blur-[110px] interior-ambient-orb" />

      <div className="relative z-10 mx-auto max-w-4xl px-margin-mobile text-center md:px-8">
        <span
          className="mb-6 block font-display-lg text-6xl leading-none text-primary/25 md:text-7xl"
          aria-hidden
        >
          “
        </span>
        <p className="mx-auto max-w-3xl font-headline-lg text-2xl font-normal italic leading-snug tracking-tight text-on-surface md:text-4xl md:leading-tight">
          Золото — это не только блеск в интерьере, это ценность моментов, проведённых за нашим столом.
        </p>
        <span
          className="mt-6 block font-display-lg text-6xl leading-none text-primary/25 md:text-7xl"
          aria-hidden
        >
          ”
        </span>
      </div>
    </section>
  );
}
