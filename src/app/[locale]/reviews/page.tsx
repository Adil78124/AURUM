import { setRequestLocale } from "next-intl/server";
import { ReviewsPageView } from "@/components/reviews/ReviewsPageView";

type Props = { params: Promise<{ locale: string }> };

export default async function ReviewsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ReviewsPageView />;
}
