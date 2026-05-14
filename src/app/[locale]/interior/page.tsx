import { setRequestLocale } from "next-intl/server";
import { InteriorPageView } from "@/components/interior/InteriorPageView";

type Props = { params: Promise<{ locale: string }> };

export default async function InteriorPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <InteriorPageView />;
}
