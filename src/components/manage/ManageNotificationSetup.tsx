"use client";

import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { ManageBtn } from "@/components/manage/ManageCard";

/** One-click browser notifications for new bookings on /manage. */
export function ManageNotificationSetup() {
  const [permission, setPermission] = useState<NotificationPermission | "unsupported">(
    "default",
  );

  useEffect(() => {
    if (!("Notification" in window)) {
      setPermission("unsupported");
      return;
    }
    setPermission(Notification.permission);
  }, []);

  if (permission === "unsupported" || permission === "granted") return null;

  return (
    <ManageBtn
      variant="ghost"
      type="button"
      className="text-[10px]"
      onClick={async () => {
        if (!("Notification" in window)) return;
        const result = await Notification.requestPermission();
        setPermission(result);
      }}
    >
      <span className="inline-flex items-center gap-2">
        <Bell className="h-3.5 w-3.5" />
        Включить push-уведомления о бронях
      </span>
    </ManageBtn>
  );
}
