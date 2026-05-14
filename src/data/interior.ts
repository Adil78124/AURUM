/**
 * Интерьерные фото — файлы в каталоге public.
 * Тексты интерфейса — в messages (b.json), ключ Interior.
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

export const interiorHero = {
  imageSrc: interiorPhotoPaths[4926],
};

export const interiorMainHall = {
  imageSrc: interiorPhotoPaths[4824],
};

export const interiorSecondHall = {
  imageSrc: interiorPhotoPaths[4826],
};

export const interiorBar = {
  imageSrc: interiorPhotoPaths[4825],
};

export const interiorVipMain = {
  imageSrc: interiorPhotoPaths[4924],
};

export const interiorVipCabinet = {
  imageSrc: interiorPhotoPaths[4828],
};

export const interiorTerrace = {
  imageSrc: interiorPhotoPaths[4925],
};

export const interiorVirtualTourPreviewSrc = interiorPhotoPaths[4924];
