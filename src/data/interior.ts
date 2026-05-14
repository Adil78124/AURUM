/**
 * Интерьерные фото — файлы в `web/public/` (имена как у исходных снимков).
 * Карта соответствует указаниям заказчицы.
 */
export type InteriorPhotoId = 4824 | 4825 | 4826 | 4828 | 4924 | 4925 | 4926;

export const interiorPhotoPaths: Record<InteriorPhotoId, string> = {
  4824: "/IMG_4824.PNG",
  4825: "/IMG_4825.PNG",
  4826: "/IMG_4826.PNG",
  4828: "/IMG_4828.PNG",
  4924: "/IMG_4924.PNG",
  4925: "/IMG_4925.PNG",
  4926: "/IMG_4926.PNG",
};

export type InteriorSectionId =
  | "hero"
  | "main-hall"
  | "second-hall"
  | "bar"
  | "vip-main"
  | "vip-cabinet"
  | "terrace";

/** Порядок и смысловые блоки страницы «Интерьер» (удобно править и переносить в CMS). */
export const interiorSectionManifest = [
  {
    id: 4926,
    sectionId: "hero" as const,
    section: "Hero",
    title: "Эстетика золотого сечения",
    image: interiorPhotoPaths[4926],
    note: "Оставить как есть — главный hero-блок.",
  },
  {
    id: 4824,
    sectionId: "main-hall" as const,
    section: "Общий зал",
    title: "Общий зал",
    image: interiorPhotoPaths[4824],
    caption:
      "Элегантный общий зал сочетает в себе современную эстетику, уютную атмосферу и высокий уровень комфорта для каждого гостя.",
  },
  {
    id: 4826,
    sectionId: "second-hall" as const,
    section: "Второй общий зал",
    title: "Второй общий зал",
    image: interiorPhotoPaths[4826],
    note: "Отдельный блок, не смешивать с VIP.",
  },
  {
    id: 4825,
    sectionId: "bar" as const,
    section: "Барная стойка",
    title: "Барная стойка",
    image: interiorPhotoPaths[4825],
    caption:
      "Современная барная стойка с уютной атмосферой, авторскими напитками и комфортной зоной для отдыха.",
  },
  {
    id: 4924,
    sectionId: "vip-main" as const,
    section: "VIP кабинки",
    title: "VIP кабинки — основной интерьер",
    image: interiorPhotoPaths[4924],
    caption: "Уютные VIP-кабинки созданы для комфортного и приватного отдыха.",
  },
  {
    id: 4828,
    sectionId: "vip-cabinet" as const,
    section: "VIP кабинка",
    title: "VIP-кабинка",
    image: interiorPhotoPaths[4828],
    note: "Отдельный VIP-блок.",
  },
  {
    id: 4925,
    sectionId: "terrace" as const,
    section: "Летняя терраса",
    title: "Летняя терраса",
    image: interiorPhotoPaths[4925],
    caption:
      "Летняя терраса AURUM — идеальное место для вечернего отдыха, встреч и ужинов на свежем воздухе.",
    note: "Самостоятельная секция — не смешивать с VIP, залом и баром.",
  },
] as const;

export const interiorHero = {
  title: "Эстетика",
  titleItalic: "Золотого Сечения",
  description:
    "Погрузитесь в атмосферу, где каждый элемент дизайна рассказывает историю о роскоши и уединении. AURUM — это пространство, созданное для тех, кто ценит тишину и безупречный стиль.",
  imageSrc: interiorPhotoPaths[4926],
  imageAlt: "Интерьер ресторана AURUM",
};

export const interiorMainHall = {
  title: "Общий зал",
  imageSrc: interiorPhotoPaths[4824],
  imageAlt: "Основной общий зал ресторана AURUM",
  caption:
    "Элегантный общий зал сочетает в себе современную эстетику, уютную атмосферу и высокий уровень комфорта для каждого гостя.",
  sideCard: {
    label: "КУЛЬТУРА ДЕТАЛЕЙ",
    title: "Сенсорное совершенство",
    text: "Тёплый янтарный свет, бархатные оттенки кресел и спокойный ритм зала — всё подчинено ощущению домашнего премиума, а не холодного отеля.",
  },
};

export const interiorSecondHall = {
  title: "Второй общий зал",
  lead: "Другой ракурс того же пространства — отдельно от барной зоны и VIP.",
  imageSrc: interiorPhotoPaths[4826],
  imageAlt: "Второй ракурс общего зала AURUM",
};

export const interiorBar = {
  eyebrow: "БАРНАЯ ЗОНА",
  title: "Барная стойка",
  text: "Современная барная стойка с уютной атмосферой, авторскими напитками и комфортной зоной для отдыха.",
  bullets: [
    "Авторские коктейли и внимательные бармены",
    "Мягкая подсветка и камерная посадка у стойки",
  ],
  imageSrc: interiorPhotoPaths[4825],
  imageAlt: "Барная стойка AURUM",
};

export const interiorVipMain = {
  title: "VIP кабинки",
  subtitle: "Абсолютная приватность",
  imageSrc: interiorPhotoPaths[4924],
  imageAlt: "Основной VIP-интерьер AURUM",
  overlayText: "Уютные VIP-кабинки созданы для комфортного и приватного отдыха.",
};

export const interiorVipCabinet = {
  eyebrow: "ПРИВАТНОСТЬ",
  title: "VIP-кабинка",
  imageSrc: interiorPhotoPaths[4828],
  imageAlt: "VIP-кабинка AURUM",
};

export const interiorTerrace = {
  eyebrow: "ТЕРРАСА",
  title: "Летняя терраса",
  text: "Летняя терраса AURUM — идеальное место для вечернего отдыха, встреч и ужинов на свежем воздухе.",
  season: "СЕЗОН: МАЙ - ОКТЯБРЬ",
  imageSrc: interiorPhotoPaths[4925],
  imageAlt: "Летняя терраса AURUM",
};

/** Превью виртуального тура (основной VIP-ракурс). */
export const interiorVirtualTourPreviewSrc = interiorPhotoPaths[4924];
