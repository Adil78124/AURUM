"use client";

import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { useUiModals } from "@/context/UiModalsContext";
import { LuxuryReservationModal } from "@/components/modals/LuxuryReservationModal";

const BOOKING_HERO = "/IMG_5183.JPG.jpeg";
const DEPOSIT = "2000 ₸";

const lbl = "mb-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500";

function PillField({
  label,
  icon,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; icon: ReactNode }) {
  return (
    <label className="block min-w-0 flex-1">
      <span className={lbl}>{label}</span>
      <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-sm text-white ring-1 ring-white/5 focus-within:ring-primary/40">
        <input
          className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-zinc-600"
          {...props}
        />
        <span className="shrink-0 text-primary/90">{icon}</span>
      </div>
    </label>
  );
}

function PillFull({ label, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block w-full min-w-0">
      <span className={lbl}>{label}</span>
      <input
        className="w-full rounded-full border border-white/15 bg-black/35 px-4 py-2.5 text-sm text-white outline-none ring-1 ring-white/5 placeholder:text-zinc-600 focus:ring-primary/40"
        {...props}
      />
    </label>
  );
}

function PillComment({
  label,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <label className="block w-full min-w-0">
      <span className={lbl}>{label}</span>
      <textarea
        className="min-h-[4.25rem] w-full resize-none rounded-2xl border border-white/15 bg-black/35 px-4 py-2.5 text-sm text-white outline-none ring-1 ring-white/5 placeholder:text-zinc-600 focus:ring-primary/40"
        rows={2}
        {...props}
      />
    </label>
  );
}

function PreorderField({
  label,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <label className="block w-full min-w-0">
      <span className={lbl}>{label}</span>
      <textarea
        className="min-h-[4.25rem] w-full resize-none rounded-2xl border border-white/15 bg-black/35 px-4 py-2.5 text-sm text-white outline-none ring-1 ring-white/5 placeholder:text-zinc-600 focus:ring-primary/40"
        rows={2}
        {...props}
      />
    </label>
  );
}

export function BookingModal() {
  const { bookingOpen, closeBooking } = useUiModals();
  const t = useTranslations("Booking");

  return (
    <LuxuryReservationModal
      open={bookingOpen}
      onClose={closeBooking}
      titleId="booking-title"
      heroSrc={BOOKING_HERO}
      heroAlt={t("heroAlt")}
      sideKicker={t("sideKicker")}
      sideLine={t("sideLine")}
      title={t("title")}
      subtitle={t("subtitle", { amount: DEPOSIT })}
    >
      <form
        className="flex flex-col gap-3 md:min-h-0 md:flex-1 md:justify-between md:gap-2.5 lg:gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          closeBooking();
        }}
      >
        <div className="flex flex-col gap-3 md:gap-2.5 lg:gap-3">
          <PillFull label={t("name")} name="name" placeholder={t("namePh")} />
          <PillFull label={t("phone")} name="phone" type="tel" placeholder={t("phonePh")} />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-2.5 lg:gap-3">
            <PillField
              label={t("date")}
              name="date"
              type="date"
              icon={<Calendar className="h-4 w-4 shrink-0" strokeWidth={1.5} />}
            />
            <PillField
              label={t("time")}
              name="time"
              type="time"
              icon={<Clock className="h-4 w-4 shrink-0" strokeWidth={1.5} />}
            />
            <PillField
              label={t("guests")}
              name="guests"
              type="number"
              min={1}
              placeholder={t("guestsPh")}
              icon={<Users className="h-4 w-4 shrink-0" strokeWidth={1.5} />}
            />
          </div>
          <PillComment label={t("note")} name="note" placeholder={t("notePh")} />
          <PreorderField label={t("preorder")} name="preorder" placeholder={t("preorderPh")} />
        </div>

        <div className="mt-1 flex flex-col gap-2.5 border-t border-white/5 pt-3 md:mt-0 md:shrink-0 md:pt-3">
          <button
            type="submit"
            className="w-full rounded-full bg-white px-8 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] shadow-md transition hover:bg-zinc-100 sm:w-auto sm:self-start sm:px-10"
          >
            {t("submit")}
          </button>
          <p className="text-[9px] leading-relaxed text-zinc-600 md:max-w-lg">{t("consent")}</p>
        </div>
      </form>
    </LuxuryReservationModal>
  );
}
