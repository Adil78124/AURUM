import { setRequestLocale } from "next-intl/server";
import { DeliveryPageView } from "@/components/delivery/DeliveryPageView";

type Props = { params: Promise<{ locale: string }> };

export default async function DeliveryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DeliveryPageView />;
}
