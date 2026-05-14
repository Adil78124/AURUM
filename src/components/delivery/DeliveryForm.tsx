"use client";

import Image from "next/image";
import type { InputHTMLAttributes } from "react";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useCart } from "@/context/CartContext";
import { formatTenge } from "@/lib/formatTenge";
import { MotionReveal } from "@/components/motion/MotionReveal";

const STATIC_FALLBACK = [
  {
    id: "f1",
    price: 18500,
    qty: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnPrWer5jO00RgDFWvYwWxzSKABu7seZEOhmkzDwLpcC_4nyNq36SE2RyPtkSclmIPl6y_eH5tBa-zIJ2uqAiGmX9bowxNQCKHMyrFgCn7ps1MH1bu7TSTKKlCiIkAQXOjQRsIDf7fnd1c4Vh23pBm7IF68kvijhzYmWo3Pb5K1PVPDMqyQDS2D9pM1UBR8Zqy_emYT3Wrz1UXhFdOrmPP3H69z-ZA4e6Aru94cIUA3Y3uA-DTtEMZt_mZmQdgklDeufpJUIfOpOU",
  },
  {
    id: "f2",
    price: 24500,
    qty: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALncJvu1tmQWDiVhYsQ99b2z_0wVY_kWHDzRZK-2--__o_98J3ySubA3VvWt4so_Q9MjdPU-XLgKv4AjKO4A9AJz66J78igCW7lFO6Y_FmBrnLSWa1b7hxt3CH0vfxIpXO_1wjWaN-7a5j9z-1qhWfi1C9_p4o_2itiF-r__-j6PVs_tspsmG-SGPPC3YID3Uh15YquLLRbPe99NB17AE5qtul_UNXSJjMy-fNrJSiHq2NBFNgvuw5izWMP4PTJoZb5faXk9pNrXk",
  },
] as const;

function Field({
  label,
  required,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-[#6b5a48]">
        {label}
        {required ? <span className="text-red-600">*</span> : null}
      </span>
      <input
        className="mt-2 w-full border-0 border-b border-zinc-300 bg-transparent py-2 text-zinc-900 outline-none ring-0 transition-colors placeholder:text-zinc-400 focus:border-[#c08431]"
        {...props}
      />
    </label>
  );
}

export function DeliveryForm() {
  const { lines, totalTenge, setQuantity } = useCart();
  const [promo, setPromo] = useState("");
  const t = useTranslations("DeliveryForm");
  const tMenu = useTranslations("Menu");
  const tCommon = useTranslations("Common");

  const displayLines = useMemo(() => {
    if (lines.length > 0) {
      return lines.map((l) => ({
        id: l.item.id,
        kind: "menu" as const,
        priceEach: l.item.priceTenge,
        qty: l.quantity,
        image: l.item.imageSrc,
      }));
    }
    return STATIC_FALLBACK.map((r) => ({
      id: r.id,
      kind: "static" as const,
      priceEach: r.price,
      qty: r.qty,
      image: r.image,
    }));
  }, [lines]);

  const totalQty = displayLines.reduce((s, l) => s + l.qty, 0);
  const total = useMemo(() => {
    if (lines.length > 0) return totalTenge;
    return displayLines.reduce((s, l) => s + l.priceEach * l.qty, 0);
  }, [lines.length, totalTenge, displayLines]);

  return (
    <section id="oformlenie-zakaza" className="scroll-mt-28 bg-[#0a0a0a] py-section-gap">
      <div className="mx-auto max-w-6xl px-margin-mobile md:px-8">
        <div className="overflow-hidden rounded-2xl bg-[#f7f6f3] shadow-2xl">
          <div className="border-b border-zinc-200 px-6 py-6 md:px-10 md:py-8">
            <h2 className="text-center text-2xl font-bold tracking-wide text-[#1d4ed8] md:text-3xl">
              {t("title")}
            </h2>
            <p className="mt-2 text-center text-sm text-zinc-600">{t("intro")}</p>
          </div>
          <form
            className="grid grid-cols-1 gap-0 lg:grid-cols-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <MotionReveal variant="fadeUp" className="space-y-10 border-zinc-200 px-6 py-8 md:px-10 md:py-10 lg:border-r">
              <div>
                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-zinc-800">
                  {t("contactsHeading")}
                </h3>
                <div className="space-y-6">
                  <Field label={t("fio")} name="fio" required placeholder={t("fioPh")} />
                  <Field label={t("phone")} name="phone" type="tel" placeholder={t("phonePh")} />
                  <Field label={t("email")} name="email" type="email" placeholder={t("emailPh")} />
                </div>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-zinc-800">
                  {t("deliveryHeading")}
                </h3>
                <div className="space-y-6">
                  <Field label={t("street")} name="street" placeholder={t("streetPh")} />
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <Field label={t("intercom")} name="intercom" placeholder={t("intercomPh")} />
                    <Field label={t("apt")} name="apt" placeholder={t("aptPh")} />
                    <Field label={t("floor")} name="floor" placeholder={t("floorPh")} />
                  </div>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#6b5a48]">
                      {t("comment")}
                    </span>
                    <textarea
                      name="comment"
                      rows={3}
                      className="mt-2 w-full resize-none border-0 border-b border-zinc-300 bg-transparent py-2 text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-[#c08431]"
                      placeholder={t("commentPh")}
                    />
                  </label>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-800">
                  {t("paymentHeading")}
                </h3>
                <p className="mb-4 text-sm text-zinc-600">{t("paymentNote")}</p>
                <div className="space-y-4">
                  <Field label={t("card")} name="card" placeholder={t("cardPh")} autoComplete="off" />
                  <div className="grid grid-cols-2 gap-4">
                    <Field label={t("exp")} name="exp" placeholder={t("expPh")} />
                    <Field label={t("cardName")} name="cardname" placeholder={t("cardNamePh")} />
                  </div>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal variant="slideRight" className="bg-[#eceae4] px-6 py-8 md:px-10 md:py-10">
              <h3 className="mb-6 text-lg font-bold text-zinc-900">{t("orderTitle", { count: totalQty })}</h3>
              <div className="space-y-5">
                {displayLines.map((row) => (
                  <div key={row.id} className="flex gap-4 rounded-lg bg-white/80 p-3 shadow-sm">
                    <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-md">
                      <Image src={row.image} alt="" fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-zinc-900">
                        {row.kind === "static"
                          ? t(`staticItems.${row.id}.name`)
                          : tMenu(`items.${row.id}.name`)}
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        <button
                          type="button"
                          disabled={lines.length === 0}
                          className="h-8 w-8 rounded border border-zinc-300 text-zinc-700 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
                          onClick={() => {
                            if (lines.length > 0) setQuantity(row.id, row.qty - 1);
                          }}
                          aria-label={tCommon("less")}
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-semibold">{row.qty}</span>
                        <button
                          type="button"
                          disabled={lines.length === 0}
                          className="h-8 w-8 rounded border border-zinc-300 text-zinc-700 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
                          onClick={() => {
                            if (lines.length > 0) setQuantity(row.id, row.qty + 1);
                          }}
                          aria-label={tCommon("more")}
                        >
                          +
                        </button>
                        <span className="ml-auto text-sm font-semibold text-zinc-900">
                          {formatTenge(row.priceEach * row.qty)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <label className="text-xs font-semibold uppercase tracking-widest text-[#6b5a48]">
                  {t("promo")}
                </label>
                <input
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-[#c08431]"
                  placeholder={t("promoPh")}
                />
              </div>
              <div className="mt-8 space-y-2 border-t border-zinc-300 pt-6 text-sm text-zinc-700">
                <div className="flex justify-between">
                  <span>{t("deliveryRow")}</span>
                  <span className="font-medium text-emerald-700">{tCommon("free")}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("orderRow")}</span>
                  <span>{formatTenge(total)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-zinc-900">
                  <span>{t("totalRow")}</span>
                  <span>{formatTenge(total)}</span>
                </div>
              </div>
              <button
                type="button"
                className="mt-8 flex w-full items-center justify-center gap-2 bg-[#00AEEF] py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition hover:bg-[#0095cc]"
              >
                {t("payKaspi")}
              </button>
              <p className="mt-2 text-center text-[10px] uppercase tracking-widest text-zinc-500">
                {t("secureNote")}
              </p>
              {lines.length === 0 ? (
                <p className="mt-4 text-center text-xs text-zinc-500">{t("emptyCartHint")}</p>
              ) : null}
            </MotionReveal>
          </form>
        </div>
      </div>
    </section>
  );
}
