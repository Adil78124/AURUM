import { MenuPageView } from "@/components/menu/MenuPageView";

export default function MenuPage() {
  return (
    <main className="relative min-h-screen pb-section-gap pt-[140px]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,_#331e0b_0%,_#131313_70%)] opacity-40" />
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <MenuPageView />
      </div>
    </main>
  );
}
