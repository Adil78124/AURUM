import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const [a, b] = await Promise.all([
    import(`../../messages/${locale}/a.json`),
    import(`../../messages/${locale}/b.json`),
  ]);

  return {
    locale,
    messages: { ...a.default, ...b.default },
  };
});
