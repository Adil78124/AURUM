const MAX_INPUT_BYTES = 8 * 1024 * 1024;
const MAX_WIDTH = 1200;
const JPEG_QUALITY = 0.82;

export function isMenuImageSrc(src: string | undefined | null): src is string {
  const s = src?.trim();
  return Boolean(s);
}

/** Compress local file to a data URL for localStorage (no backend). */
export async function fileToMenuImageDataUrl(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) {
    throw new Error("Выберите файл изображения (JPG, PNG, WebP).");
  }
  if (file.size > MAX_INPUT_BYTES) {
    throw new Error("Файл слишком большой (макс. 8 МБ).");
  }

  const objectUrl = URL.createObjectURL(file);
  try {
    const img = await loadImage(objectUrl);
    const canvas = document.createElement("canvas");
    let { width, height } = img;
    if (width > MAX_WIDTH) {
      height = Math.round((height * MAX_WIDTH) / width);
      width = MAX_WIDTH;
    }
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Не удалось обработать изображение.");
    ctx.drawImage(img, 0, 0, width, height);
    return canvas.toDataURL("image/jpeg", JPEG_QUALITY);
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Не удалось прочитать изображение."));
    img.src = src;
  });
}
