"use client";

import { useCallback, useEffect, useState } from "react";
import type { Review } from "@/data/reviews";
import type { ReviewsMeta, StoredReview } from "@/lib/manage/types";
import { jsonEqual, readJson, STORAGE_KEYS, writeJson } from "@/lib/storage";

const emptyMeta = (): ReviewsMeta => ({ hiddenIds: [], deletedIds: [] });

export function useStoredReviews() {
  const [userReviews, setUserReviews] = useState<StoredReview[]>([]);
  const [meta, setMeta] = useState<ReviewsMeta>(emptyMeta);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const load = () => {
      const reviews = readJson<StoredReview[]>(STORAGE_KEYS.reviews) ?? [];
      const reviewsMeta = readJson<ReviewsMeta>(STORAGE_KEYS.reviewsMeta) ?? emptyMeta();
      setUserReviews((prev) => (jsonEqual(prev, reviews) ? prev : reviews));
      setMeta((prev) => (jsonEqual(prev, reviewsMeta) ? prev : reviewsMeta));
    };
    load();
    setReady(true);
    const onStorage = (e: Event) => {
      const key = (e as CustomEvent<{ key: string }>).detail?.key;
      if (
        !key ||
        key === STORAGE_KEYS.reviews ||
        key === STORAGE_KEYS.reviewsMeta
      ) {
        load();
      }
    };
    window.addEventListener("aurum-storage", onStorage);
    return () => window.removeEventListener("aurum-storage", onStorage);
  }, []);

  useEffect(() => {
    if (!ready) return;
    writeJson(STORAGE_KEYS.reviews, userReviews);
  }, [userReviews, ready]);

  useEffect(() => {
    if (!ready) return;
    writeJson(STORAGE_KEYS.reviewsMeta, meta);
  }, [meta, ready]);

  const addReview = useCallback((review: Review) => {
    const entry: StoredReview = {
      id: review.id,
      author: review.author,
      date: review.date,
      text: review.text,
      rating: review.rating ?? 5,
      avatarSrc: review.avatarSrc,
      hidden: false,
    };
    setUserReviews((prev) => [entry, ...prev]);
    return entry;
  }, []);

  const removeReview = useCallback((id: string, isSeed: boolean) => {
    if (isSeed) {
      setMeta((m) => ({
        ...m,
        deletedIds: m.deletedIds.includes(id) ? m.deletedIds : [...m.deletedIds, id],
      }));
      return;
    }
    setUserReviews((prev) => prev.filter((r) => r.id !== id));
  }, []);

  const toggleHidden = useCallback((id: string, isSeed: boolean) => {
    if (isSeed) {
      setMeta((m) => {
        const hidden = m.hiddenIds.includes(id);
        return {
          ...m,
          hiddenIds: hidden
            ? m.hiddenIds.filter((x) => x !== id)
            : [...m.hiddenIds, id],
        };
      });
      return;
    }
    setUserReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, hidden: !r.hidden } : r)),
    );
  }, []);

  const toPublicReview = useCallback((stored: StoredReview): Review => {
    return {
      id: stored.id,
      author: stored.author,
      date: stored.date,
      text: stored.text,
      rating: stored.rating,
      avatarSrc: stored.avatarSrc,
    };
  }, []);

  return {
    userReviews,
    meta,
    ready,
    addReview,
    removeReview,
    toggleHidden,
    toPublicReview,
  };
}
