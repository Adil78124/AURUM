export type InteriorSectionId =
  | "main-hall"
  | "bar"
  | "vip"
  | "terrace";

export type InteriorImageBlock = {
  src: string;
  alt: string;
};

export const interiorHero = {
  title: "Эстетика",
  titleItalic: "Золотого Сечения",
  description:
    "Погрузитесь в атмосферу, где каждый элемент дизайна рассказывает историю о роскоши и уединении. AURUM — это пространство, созданное для тех, кто ценит тишину и безупречный стиль.",
  imageSrc:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA-EuHVA8dfEnkRp9b0lpRYJj8ihiWFlZcyh1JokIsJ8Ml31Ygiv5_MuDHbwB-BTbXTVSETXi2ff0QK5-2HTdkQi-p8XpezDF4vAP2UZSHR1avCYo9aF_F7OzYUF4jxjjYcH2eva7YYSjLDEVykcQbJDLqV5DeqyY8WgQITpHI090JoDclvVsHnlzBwzu_LGWhAS35DyiYa9wPMWaYg-1vwt6XXvsN80G49eef8d547lURxcpGnrvOkhbyvRqFw2Hx7pD3ry2F_vA8",
  imageAlt: "Интерьер ресторана AURUM",
};

export const interiorMainHall = {
  title: "Общий зал",
  large: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC266S9MXGE8ZTzpITPq4mCnQkFJKq1KMph9lbZH_-M4oPsU_IXQx-JYyGdWvHBcUJPft3seBLlblCh5NsMjsahYCZGq1NjfJfnxqZlNJXA17L2d7TUB4vR7Pfrb1SOx3d4yYlFfO__Q57iZQqWC4XXKADGOeLKWaxgA2weRA6Bf4SFcmzGdrmMDVxaa6npkpqNzkXjSkGc1trhmPi25_A1-cdDDIx954Qez0iuXz6ZKGkxMS9VWTsiRHsli2f17eO5yws4PQ78UdY",
    alt: "Общий зал ресторана",
  },
  caption:
    "Центральное пространство с высокими потолками и панорамным освещением, создающим эффект бесконечного золотого часа.",
  small: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB159ri026H--w9AcMo_ToYe8LQUY-z3kTfI_YddHTxDdEgiUn6sgiwX5clM8dWjVtcbkEsBP445MHJsDVrHH2XocIgCuUVETRslZvjdkmK7iVwGGCpiQjYCzeSgFXxNoGs6KDgVEtPYpRNwuJU1D_KyQnmWDI79WOcI7DsgPeh99ScreKN5Be-P45OT-VzjrhD17SbM7ALxYAUMeHM4F1zZNl7DSW-O7oqOwbSIK94Tpbyy2-wKA6Uhw4k0Oj_d44bj2iSpZ7lq0I",
    alt: "Сервировка стола",
  },
  sideCard: {
    label: "КУЛЬТУРА ДЕТАЛЕЙ",
    title: "Сенсорное совершенство",
    text: "Каждое кресло обтянуто итальянской кожей ручной выделки, обеспечивая максимальный комфорт в течение вечера.",
  },
};

export const interiorBar = {
  eyebrow: "МАГИЯ МЕТАЛЛА",
  title: "Барная стойка",
  text: "Монолит из черного оникса с внутренней подсветкой. Здесь рождаются авторские коктейли, вдохновленные алхимией и современным искусством.",
  bullets: [
    "Коллекция редких винтажных напитков",
    "Контактная зона из полированной латуни",
  ],
  imageSrc:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCX50MIh1z8LZNjtTJOnVEwYnY101hD38kNQ1WzuJdGnvlwQfxtS2ZMB52aK0tTLeeHsjbekC015UsdHycPp6b8C51EOE70_1k4iNnnuYGzQTqAcwzqarqMejM6kO7AAgJ6P3yGP3TpQBFVhtnr7r9h-3GOFfZLmHJ1noaUR6l1OfbdvrKMjyjLoqfoaJAWo2K0Nc5Q3jpqDS-K_Q7W7eUdAFTqlk_rXhOPJZseONYmR0tIvyAbNdCGd2qNUoJIw1c9KzDdm5JOoHc",
  imageAlt: "Барная стойка",
};

export const interiorVip = {
  title: "VIP кабинки",
  subtitle: "Абсолютная приватность",
  imageSrc:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBVUOUTxzKxigTNCdv1PSUHDR9RCh0EbUeAMeNbpY6gbLbjLc_v-4-OQ5KazvL1leDKaUtOeowJPC_w8-02HgLILoQwC8_4jdX0QgNZDCHqj1tUH8XizLHbs66WBEWnWLxH-FqwFzXQrGso50_ZiGUA9d67N8j5RYEWBsAfLdWorgCjagUwBE5Iu3dPZq5LilMOyhpVqSNBA6Jk-N7a0WI_T-CgxeqohJdbkrsxDpeSSyb8eKxCfe6ll_Ad3LG-pKX8BPS_UxrHMR8",
  imageAlt: "VIP кабинка",
  overlayText:
    "Идеальное место для проведения праздников, встреч и особенных вечеров. Уютные VIP-кабинки созданы для комфортного и приватного отдыха.",
};

export const interiorTerrace = {
  title: "Летняя терраса",
  text: "Уютная летняя терраса — идеальное место для отдыха на свежем воздухе. Стильный интерьер, комфортная атмосфера и приятная музыка создают особое настроение для встреч с друзьями, семейных ужинов и тёплых вечеров.",
  season: "СЕЗОН: МАЙ - ОКТЯБРЬ",
  imageSrc:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuByZaJHH4wntibn9Putl47KLSsjNIQdYFGIkGhgXS7UcfoU6In872iL-pWW_FrzXpTm80xr6p1X-5bmknSEsTgb9TY-OgmJaldU_JzRUV3GBZ1cUlOvty9TzifNXTZ6rg2lMOJOtKSensUwmfTVYLg1izxHeouUlu6cyXo1jaK-aJ6ShwGfGGPfB-iFHGKritNqMc576bPYydvaaUSymhfq1IlvsEBQkKh-umkefyAIzKPAJamx6-OHju1dGI243kUQNVc27hovLPA",
  imageAlt: "Летняя терраса",
};
