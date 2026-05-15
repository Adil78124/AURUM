"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Trash2 } from "lucide-react";
import type { Review } from "@/data/reviews";
import { getSeedReviewsRu } from "@/data/seedReviewsRu";
import { useManageData } from "@/context/ManageDataContext";
import { ManageBtn, ManageCard } from "@/components/manage/ManageCard";
import { ManageShell } from "@/components/manage/ManageShell";
import { cn } from "@/lib/cn";

type Row = Review & { isSeed: boolean; hidden: boolean };

export function ManageReviewsPage() {
  const { reviews } = useManageData();
  const { meta, userReviews, removeReview, toggleHidden } = reviews;

  const rows = useMemo(() => {
    const seed: Row[] = getSeedReviewsRu()
      .filter((r) => !meta.deletedIds.includes(r.id))
      .map((r) => ({
        ...r,
        isSeed: true,
        hidden: meta.hiddenIds.includes(r.id),
      }));
    const user: Row[] = userReviews.map((r) => ({
      id: r.id,
      author: r.author,
      date: r.date,
      text: r.text,
      rating: r.rating,
      avatarSrc: r.avatarSrc,
      isSeed: false,
      hidden: r.hidden,
    }));
    return [...user, ...seed];
  }, [meta, userReviews]);

  return (
    <ManageShell title="Отзывы" subtitle="Скрытые отзывы не показываются на странице /reviews">
      {rows.length === 0 ? (
        <ManageCard>
          <p className="text-center text-sm text-zinc-500">Нет отзывов для отображения.</p>
        </ManageCard>
      ) : (
        <div className="space-y-3">
          {rows.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <ManageCard
                className={cn(
                  "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
                  r.hidden && "opacity-50",
                )}
              >
                <div>
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span className="font-headline-lg text-lg text-white">{r.author}</span>
                    {r.isSeed ? (
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                        seed
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase tracking-widest text-emerald-500/80">
                        гость
                      </span>
                    )}
                    {r.hidden ? (
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                        скрыт
                      </span>
                    ) : null}
                  </div>
                  <p className="text-xs text-zinc-500">{r.date}</p>
                  <p className="mt-2 text-sm text-zinc-300">{r.text}</p>
                  <p className="mt-1 text-xs text-primary/80">★ {r.rating ?? 5}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <ManageBtn
                    variant="ghost"
                    onClick={() => toggleHidden(r.id, r.isSeed)}
                    title={r.hidden ? "Показать" : "Скрыть"}
                  >
                    {r.hidden ? (
                      <Eye className="h-3.5 w-3.5" />
                    ) : (
                      <EyeOff className="h-3.5 w-3.5" />
                    )}
                  </ManageBtn>
                  <ManageBtn variant="danger" onClick={() => removeReview(r.id, r.isSeed)}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </ManageBtn>
                </div>
              </ManageCard>
            </motion.div>
          ))}
        </div>
      )}
    </ManageShell>
  );
}
