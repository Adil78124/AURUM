"use client";

import type { InputHTMLAttributes } from "react";
import { useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { MenuItemImage } from "@/components/menu/MenuItemImage";
import { useCart } from "@/context/CartContext";
import { useManageData } from "@/context/ManageDataContext";
import { useToast } from "@/context/ToastContext";
import type { DeliveryPaymentMethod } from "@/lib/manage/deliveryTypes";
import { parseDeliveryOrderForm } from "@/lib/deliveryOrderForm";
import { formatTenge } from "@/lib/formatTenge";
import { MotionReveal } from "@/components/motion/MotionReveal";

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
  const { lines, totalTenge, setQuantity, removeLine } = useCart();
  const { delivery } = useManageData();
  const { showToast } = useToast();
  const [promo, setPromo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<DeliveryPaymentMethod>("kaspi");
  const [formError, setFormError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const t = useTranslations("DeliveryForm");
  const tMenu = useTranslations("Menu");
  const tCommon = useTranslations("Common");

  const totalQty = lines.reduce((s, l) => s + l.quantity, 0);
  const subtotal = totalTenge;
  const deliveryPrice = 0;
  const total = subtotal + deliveryPrice;
  const cartEmpty = lines.length === 0;

  const orderLines = useMemo(
    () =>
      lines.map((l) => ({
        id: l.item.id,
        title: l.item.title ?? tMenu(`items.${l.item.id}.name`),
        quantity: l.quantity,
        price: l.item.priceTenge,
      })),
    [lines, tMenu],
  );

  const submitOrder = (method: DeliveryPaymentMethod) => {
    const form = formRef.current;
    if (!form) return;
    setPaymentMethod(method);
    setFormError(null);
    if (cartEmpty) {
      setFormError(t("emptyCartHint"));
      return;
    }
    const input = parseDeliveryOrderForm(
      form,
      orderLines,
      { subtotal, deliveryPrice, total },
      method,
      promo,
    );
    if (!input) {
      setFormError(t("validationError"));
      return;
    }
    delivery.addOrder(input);
    showToast({
      title: t("successTitle"),
      message: t("successMessage"),
      durationMs: 7000,
    });
    setSaved(true);
    form.reset();
    setPromo("");
    lines.forEach((l) => removeLine(l.item.id));
    window.setTimeout(() => setSaved(false), 8000);
  };

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
            ref={formRef}
            className="grid grid-cols-1 gap-0 lg:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              submitOrder(paymentMethod);
            }}
            noValidate
          >
            <MotionReveal variant="fadeUp" className="space-y-10 border-zinc-200 px-6 py-8 md:px-10 md:py-10 lg:border-r">
              <div>
                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-zinc-800">
                  {t("contactsHeading")}
                </h3>
                <div className="space-y-6">
                  <Field label={t("fio")} name="fio" required placeholder={t("fioPh")} />
                  <Field label={t("phone")} name="phone" type="tel" required placeholder={t("phonePh")} />
                  <Field label={t("email")} name="email" type="email" placeholder={t("emailPh")} />
                </div>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-zinc-800">
                  {t("deliveryHeading")}
                </h3>
                <div className="space-y-6">
                  <Field label={t("street")} name="street" required placeholder={t("streetPh")} />
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
              {cartEmpty ? (
                <div className="rounded-lg border border-dashed border-zinc-300 bg-white/50 px-4 py-10 text-center">
                  <p className="text-sm font-medium text-zinc-600">{t("emptyCartTitle")}</p>
                  <p className="mt-2 text-xs text-zinc-500">{t("emptyCartHint")}</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {lines.map((line) => (
                    <div key={line.item.id} className="flex gap-4 rounded-lg bg-white/80 p-3 shadow-sm">
                      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-md">
                        <MenuItemImage
                          src={line.item.imageSrc}
                          alt={line.item.title ?? tMenu(`items.${line.item.id}.imageAlt`)}
                          sizes="80px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-zinc-900">
                          {line.item.title ?? tMenu(`items.${line.item.id}.name`)}
                        </p>
                        <div className="mt-2 flex items-center gap-3">
                          <button
                            type="button"
                            className="h-8 w-8 rounded border border-zinc-300 text-zinc-700 hover:bg-zinc-100"
                            onClick={() => setQuantity(line.item.id, line.quantity - 1)}
                            aria-label={tCommon("less")}
                          >
                            −
                          </button>
                          <span className="w-6 text-center text-sm font-semibold">{line.quantity}</span>
                          <button
                            type="button"
                            className="h-8 w-8 rounded border border-zinc-300 text-zinc-700 hover:bg-zinc-100"
                            onClick={() => setQuantity(line.item.id, line.quantity + 1)}
                            aria-label={tCommon("more")}
                          >
                            +
                          </button>
                          <span className="ml-auto text-sm font-semibold text-zinc-900">
                            {formatTenge(line.item.priceTenge * line.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
                  <span>{formatTenge(subtotal)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-zinc-900">
                  <span>{t("totalRow")}</span>
                  <span>{formatTenge(total)}</span>
                </div>
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-[#6b5a48]">
                {t("paymentMethodLabel")}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {(
                  [
                    { id: "kaspi" as const, label: t("payKaspi") },
                    { id: "card" as const, label: t("payCard") },
                    { id: "cash" as const, label: t("payCash") },
                  ] as const
                ).map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id)}
                    className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition ${
                      paymentMethod === m.id
                        ? "bg-zinc-800 text-white ring-2 ring-[#c08431]"
                        : "bg-white text-zinc-600 ring-1 ring-zinc-300"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
              {formError ? (
                <p className="mt-4 text-sm text-red-600" role="alert">
                  {formError}
                </p>
              ) : null}
              {saved ? (
                <p className="mt-4 text-sm font-medium text-emerald-700" role="status">
                  {t("successHint")}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={cartEmpty}
                className="mt-6 flex w-full items-center justify-center gap-2 bg-[#00AEEF] py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition hover:bg-[#0095cc] disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => setPaymentMethod("kaspi")}
              >
                {saved ? t("savedLabel") : t("payKaspi")}
              </button>
              <button
                type="submit"
                disabled={cartEmpty}
                className="mt-3 w-full rounded-md border border-zinc-400 bg-zinc-800 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {t("submitOrder")}
              </button>
              <p className="mt-2 text-center text-[10px] uppercase tracking-widest text-zinc-500">
                {t("secureNote")}
              </p>
            </MotionReveal>
          </form>
        </div>
      </div>
    </section>
  );
}
