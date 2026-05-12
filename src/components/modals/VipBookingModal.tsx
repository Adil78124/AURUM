"use client";

import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { useUiModals } from "@/context/UiModalsContext";
import { vipCabins } from "@/data/vipCabins";
import { LuxuryReservationModal } from "@/components/modals/LuxuryReservationModal";

const VIP_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBVUOUTxzKxigTNCdv1PSUHDR9RCh0EbUeAMeNbpY6gbLbjLc_v-4-OQ5KazvL1leDKaUtOeowJPC_w8-02HgLILoQwC8_4jdX0QgNZDCHqj1tUH8XizLHbs66WBEWnWLxH-FqwFzXQrGso50_ZiGUA9d67N8j5RYEWBsAfLdWorgCjagUwBE5Iu3dPZq5LilMOyhpVqSNBA6Jk-N7a0WI_T-CgxeqohJdbkrsxDpeSSyb8eKxCfe6ll_Ad3LG-pKX8BPS_UxrHMR8";

const lbl = "mb-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500";

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

export function VipBookingModal() {
  const { vipOpen, closeVip } = useUiModals();

  return (
    <LuxuryReservationModal
      open={vipOpen}
      onClose={closeVip}
      titleId="vip-title"
      heroSrc={VIP_HERO}
      heroAlt="VIP кабинка AURUM"
      sideKicker="AURUM VIP"
      sideLine="Приватный формат ужина"
      title="VIP кабинки"
      subtitle={
        <>
          Предоплата{" "}
          <span className="font-semibold text-primary">2000 ₸</span>. Заполните данные — мы
          перезвоним для подтверждения и предзаказа блюд.
        </>
      }
    >
      <form
        className="flex flex-col gap-3 md:min-h-0 md:flex-1 md:justify-between md:gap-2.5 lg:gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          closeVip();
        }}
      >
        <div className="flex flex-col gap-3 md:gap-2.5 lg:gap-3">
          <PillFull label="Имя" name="name" placeholder="Как к вам обращаться" />
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
              placeholder="4"
              icon={<Users className="h-4 w-4 shrink-0" strokeWidth={1.5} />}
            />
          </div>
          <label className="block w-full min-w-0">
            <span className={lbl}>Выбор VIP кабинки</span>
            <select
              name="cabin"
              defaultValue={vipCabins[0]?.id}
              className="w-full rounded-full border border-white/15 bg-black/35 px-4 py-2.5 text-sm text-white outline-none ring-1 ring-white/5 focus:ring-primary/40"
            >
              {vipCabins.map((c) => (
                <option key={c.id} value={c.id} className="bg-zinc-900 text-white">
                  {c.label}
                </option>
              ))}
            </select>
          </label>
          <PillComment label="Комментарий" name="note" placeholder="Формат встречи, пожелания…" />
          <PreorderField label="Предзаказ блюд" name="preorder" placeholder="Блюда и количество…" />
        </div>

        <div className="mt-1 flex flex-col gap-2.5 border-t border-white/5 pt-3 md:mt-0 md:shrink-0 md:pt-3">
          <button
            type="submit"
            className="w-full rounded-full border border-primary/35 bg-white/10 px-8 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/20 sm:w-auto sm:self-start sm:px-10"
          >
            Отправить заявку
          </button>
        </div>
      </form>
    </LuxuryReservationModal>
  );
}
