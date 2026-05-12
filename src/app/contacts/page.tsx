import { ContactSection } from "@/components/contacts/ContactSection";

export default function ContactsPage() {
  return (
    <main className="contacts-page-bg pb-section-gap pt-[140px] text-on-surface font-body-md">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-section-gap text-center">
          <h1 className="mb-4 font-display-lg text-display-lg text-primary">Контакты</h1>
          <div className="mx-auto h-px w-24 bg-primary/30" />
        </div>
        <ContactSection />
      </div>
    </main>
  );
}
