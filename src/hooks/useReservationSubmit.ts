"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { useManageData } from "@/context/ManageDataContext";
import { useToast } from "@/context/ToastContext";
import type { ReservationInput } from "@/hooks/useReservations";
import { parseReservationForm } from "@/lib/reservationForm";

type Namespace = "Booking" | "Vip";

export function useReservationSubmit(namespace: Namespace, onSuccess: () => void) {
  const { reservations } = useManageData();
  const { showToast } = useToast();
  const t = useTranslations(namespace);
  const [saved, setSaved] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const submit = useCallback(
    (form: HTMLFormElement, type: ReservationInput["type"]) => {
      setFormError(null);
      const input = parseReservationForm(form, type);
      if (!input) {
        setFormError(t("validationError"));
        return;
      }

      try {
        reservations.addReservation(input);
        showToast({
          title: t("successTitle"),
          message: t("successMessage"),
          durationMs: 7000,
        });
        setSaved(true);
        form.reset();
        window.setTimeout(() => {
          setSaved(false);
          onSuccess();
        }, 1600);
      } catch {
        setFormError(t("saveError"));
      }
    },
    [reservations, showToast, t, onSuccess],
  );

  return { submit, saved, formError, clearError: () => setFormError(null) };
}
