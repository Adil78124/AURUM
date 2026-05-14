import { interiorPhotoPaths, type InteriorPhotoId } from "./interior";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
};

/** Порядок кадров в фотогалерее на главной (локальные файлы из `public`). */
const gallerySequence: { id: InteriorPhotoId; alt: string }[] = [
  { id: 4824, alt: "Общий зал ресторана AURUM" },
  { id: 4826, alt: "Второй ракурс общего зала AURUM" },
  { id: 4825, alt: "Барная стойка AURUM" },
  { id: 4828, alt: "VIP-кабинка AURUM" },
  { id: 4924, alt: "VIP-интерьер AURUM" },
  { id: 4925, alt: "Летняя терраса AURUM" },
  { id: 4926, alt: "Интерьер AURUM" },
];

export const galleryItems: GalleryItem[] = gallerySequence.map(({ id, alt }) => ({
  id: String(id),
  src: interiorPhotoPaths[id],
  alt,
}));
