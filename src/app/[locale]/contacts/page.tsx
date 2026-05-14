import { setRequestLocale } from "next-intl/server";
import { ContactsPageClient } from "@/components/contacts/ContactsPageClient";

type Props = { params: Promise<{ locale: string }> };

export default async function ContactsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactsPageClient />;
}
