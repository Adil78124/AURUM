"use client";

import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { useUiModals } from "@/context/UiModalsContext";
import { LuxuryReservationModal } from "@/components/modals/LuxuryReservationModal";

const BOOKING_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAJtLTEY9Ys-uUy9SASN51dq_MXm-BEogZ_R3_okq1XuXRKJEIttusFCRsRsE0ND95eQxEnbpmohqgQFibXIg7E7Mysx3KuuEBSHFsD5Tx4cb-uQwrch-6Y_9-cAb-pcJyZ48kTgGR709uLvCFPzVwxRT62Yo8sg-5k8IAVSdastFHeZEqvHSBr4sYCUAUL8ZKjej4i__8a7CcT4V8GUkwU2yMC1VKtUZflChZM-a3XH0TOnAh8PZ2ilsVhSsEaOq-5jzreHsQ4w70";

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

  return (
    <LuxuryReservationModal
      open={bookingOpen}
      onClose={closeBooking}
      titleId="booking-title"
      heroSrc={BOOKING_HERO}
      heroAlt="Интерьер и атмосфера ресторана AURUM"
      sideKicker="AURUM Reservation"
      sideLine="Luxury dining experience"
      title="Бронь столика"
      subtitle={
        <>
          Предоплата{" "}
          <span className="font-semibold text-primary">2000 ₸</span>. Заполните форму — мы
          перезвоним для подтверждения.
        </>
      }
    >
      <form
        className="flex flex-col gap-3 md:min-h-0 md:flex-1 md:justify-between md:gap-2.5 lg:gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          closeBooking();
        }}
      >
        <div className="flex flex-col gap-3 md:gap-2.5 lg:gap-3">
          <PillFull label="Фамилия, имя, отчество" name="name" placeholder="Как в паспорте" />
          <PillFull label="Номер телефона" name="phone" type="tel" placeholder="+7 (___) ___-__-__" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-2.5 lg:gap-3">
            <PillField
              label="Дата"
              name="date"
              type="date"
              icon={<Calendar className="h-4 w-4 shrink-0" strokeWidth={1.5} />}
            />
            <PillField
              label="Время"
              name="time"
              type="time"
              icon={<Clock className="h-4 w-4 shrink-0" strokeWidth={1.5} />}
            />
            <PillField
              label="Гости"
              name="guests"
              type="number"
              min={1}
              placeholder="2"
              icon={<Users className="h-4 w-4 shrink-0" strokeWidth={1.5} />}
            />
          </div>
          <PillComment label="Комментарий" name="note" placeholder="Пожелания к столику, аллергии…" />
          <PreorderField
            label="Предзаказ блюд"
            name="preorder"
            placeholder="Названия блюд и количество порций…"
          />
        </div>

        <div className="mt-1 flex flex-col gap-2.5 border-t border-white/5 pt-3 md:mt-0 md:shrink-0 md:pt-3">
          <button
            type="submit"
            className="w-full rounded-full bg-white px-8 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] shadow-md transition hover:bg-zinc-100 sm:w-auto sm:self-start sm:px-10"
          >
            Забронировать столик
          </button>
          <p className="text-[9px] leading-relaxed text-zinc-600 md:max-w-lg">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с
            политикой конфиденциальности.
          </p>
        </div>
      </form>
    </LuxuryReservationModal>
  );
}
