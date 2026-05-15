import type { MenuCategoryId } from "@/data/menu";

export type StoredMenuItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: MenuCategoryId;
  image: string;
};

export type ReservationType = "standard" | "vip";

export type Reservation = {
  id: string;
  type: ReservationType;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  comment: string;
  preorder: string;
  cabin?: string;
  createdAt: string;
};

export type StoredReview = {
  id: string;
  author: string;
  date: string;
  text: string;
  rating: number;
  avatarSrc?: string;
  hidden: boolean;
};

export type ReviewsMeta = {
  hiddenIds: string[];
  deletedIds: string[];
};
