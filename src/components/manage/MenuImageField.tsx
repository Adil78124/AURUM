"use client";

import { useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import { MenuItemImage } from "@/components/menu/MenuItemImage";
import { ManageBtn, ManageInput } from "@/components/manage/ManageCard";
import { fileToMenuImageDataUrl } from "@/lib/menuImage";
import { cn } from "@/lib/cn";

type Props = {
  value: string;
  onChange: (image: string) => void;
};

export function MenuImageField({ value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    setError(null);
    setLoading(true);
    try {
      const dataUrl = await fileToMenuImageDataUrl(file);
      onChange(dataUrl);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Ошибка загрузки");
    } finally {
      setLoading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div className="md:col-span-2">
      <p className="mb-2 text-xs text-zinc-500">Фото блюда</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="sr-only"
            onChange={(e) => void onFile(e.target.files?.[0])}
          />
          <ManageBtn
            variant="ghost"
            type="button"
            className="w-full justify-center"
            disabled={loading}
            onClick={() => inputRef.current?.click()}
          >
            <span className="inline-flex items-center gap-2">
              <Upload className="h-3.5 w-3.5" />
              {loading ? "Сжатие…" : "Загрузить с компьютера"}
            </span>
          </ManageBtn>
          <p className="mt-2 text-[10px] leading-relaxed text-zinc-600">
            JPG / PNG / WebP до 8 МБ. Сохраняется в браузере (localStorage), без сервера.
          </p>
          {error ? <p className="mt-1 text-xs text-red-400">{error}</p> : null}
        </div>

        <label className="block text-xs text-zinc-500">
          или URL
          <ManageInput
            className="mt-1"
            value={value.startsWith("data:") ? "" : value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="https://..."
          />
        </label>
      </div>

      {value ? (
        <div className="mt-4 flex items-start gap-4">
          <div className="relative h-28 w-40 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/50">
            <MenuItemImage
              src={value}
              alt="Превью"
              className="grayscale-0"
              sizes="160px"
            />
          </div>
          <ManageBtn
            variant="ghost"
            type="button"
            className="mt-1"
            onClick={() => onChange("")}
          >
            <span className="inline-flex items-center gap-1">
              <X className="h-3 w-3" /> Убрать фото
            </span>
          </ManageBtn>
        </div>
      ) : (
        <div
          className={cn(
            "mt-4 flex h-28 items-center justify-center rounded-xl border border-dashed border-white/15 text-xs text-zinc-600",
          )}
        >
          Превью появится после загрузки
        </div>
      )}
    </div>
  );
}
