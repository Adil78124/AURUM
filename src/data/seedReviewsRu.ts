import { SEED_REVIEW_AVATARS, SEED_REVIEW_IDS } from "@/data/reviews";

const COPY: Record<string, { author: string; date: string; text: string }> = {
  "1": {
    author: "Анна Скорова",
    date: "12 марта 2026",
    text: "«Невероятная атмосфера и безупречный сервис. Кухня AURUM — это настоящее искусство, которое снимает страх неизвестности: всё предсказуемо премиально.»",
  },
  "2": {
    author: "Елена Муратова",
    date: "3 марта 2026",
    text: "«Место, где приватность встречается с роскошью. Идеально для деловых встреч и романтического вечера — качество и атмосфера на высоте.»",
  },
  "3": {
    author: "Дмитрий Калиев",
    date: "18 февраля 2026",
    text: "«Коктейльная карта поражает воображением. Каждый напиток — история, а персонал внимателен к деталям.»",
  },
  "4": {
    author: "Мария Тлеуберген",
    date: "5 февраля 2026",
    text: "«Отмечали годовщину — сервис безупречный, блюда яркие и запоминающиеся. Обязательно вернёмся.»",
  },
};

export function getSeedReviewsRu() {
  return SEED_REVIEW_IDS.map((id) => ({
    id,
    author: COPY[id].author,
    date: COPY[id].date,
    text: COPY[id].text,
    avatarSrc: SEED_REVIEW_AVATARS[id],
    rating: 5 as const,
  }));
}
