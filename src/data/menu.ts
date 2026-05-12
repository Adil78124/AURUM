export type MenuCategoryId =
  | "starters"
  | "mains"
  | "salads"
  | "steaks"
  | "bar"
  | "cocktails";

export const menuCategoryLabels: Record<MenuCategoryId, string> = {
  starters: "Закуски",
  mains: "Главные блюда",
  salads: "Салаты",
  steaks: "Стейки",
  bar: "Барное меню",
  cocktails: "Коктейли",
};

export type MenuItem = {
  id: string;
  category: MenuCategoryId;
  name: string;
  description: string;
  priceTenge: number;
  imageSrc: string;
  imageAlt: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "tartare",
    category: "starters",
    name: "Тартар из говядины",
    description:
      "Мраморная говядина, трюфельное масло, каперсы и хрустящий багет с золотым напылением.",
    priceTenge: 8400,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDN_56Cf1QLnRBz--yk0Lq-wjdmzE4VegM7v0xQcR-Sr7g1VhGJ7T5o1hZiLxFs7A2vL-Fe6GWFpL5FPDFpdJAUXB03YneBLb8G5xYNqXg2pqyDTuL-kR2YXNHbNZXVhxErVVJFXlmzKYntDG3JsB2-8UkAAvm3iC3_uGtSBgdUopeXazaRwq2LD720e7DhTqilTL1SOR_LLGF_QaO_c-kFEtfV1w55r22XgwGo3OX52I0eWePGeFtP6Z9NUSjEJrAgwpbxCcq8-GI",
    imageAlt: "Тартар из говядины",
  },
  {
    id: "scallops",
    category: "starters",
    name: "Гребешки Сен-Жак",
    description:
      "Обжаренные гребешки с пюре из зеленого горошка и соусом из шампанского.",
    priceTenge: 12600,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnPrWer5jO00RgDFWvYwWxzSKABu7seZEOhmkzDwLpcC_4nyNq36SE2RyPtkSclmIPl6y_eH5tBa-zIJ2uqAiGmX9bowxNQCKHMyrFgCn7ps1MH1bu7TSTKKlCiIkAQXOjQRsIDf7fnd1c4Vh23pBm7IF68kvijhzYmWo3Pb5K1PVPDMqyQDS2D9pM1UBR8Zqy_emYT3Wrz1UXhFdOrmPP3H69z-ZA4e6Aru94cIUA3Y3uA-DTtEMZt_mZmQdgklDeufpJUIfOpOU",
    imageAlt: "Гребешки Сен-Жак",
  },
  {
    id: "caviar",
    category: "starters",
    name: "Черная икра",
    description: "Осетровая икра высшего сорта, подается на льду с традиционными гарнирами.",
    priceTenge: 45000,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLEifNk7CIHpu3Pb6RiCcTrWa-RsTHC5qLyFPm5OnRl3IDwMuJS2mgORerK-eFgLGqHLR4H1ZEq4CyhgR_T6q3yMw7-_XvTIedH5TcNsUug7dI7k0upt_h2cpckeRqcColI78UEGZPO9v9rWFr8zklax_p4Jt4BaTtFAj_NeCplwVoyZ4UE0QCMwat1TsbjFtQMCXgb_4VVMVf0YUyqf16j-gxMtFWimiJdvZyMoth335rj13MZ6W2gZF7LMXPMwGzYTTEqVhYIpA",
    imageAlt: "Черная икра",
  },
  {
    id: "pasta-truffle",
    category: "mains",
    name: "Паста с трюфелем",
    description: "Домашняя паста, соус на основе сливок и свежий черный трюфель.",
    priceTenge: 9800,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCwlXCeiFwk1wxvgITRsktuNoxXdfsIoaNJtGJNUtG5FYwdP9JOF4fzD6ezrwHysx4p76KrsipgFomIahm_7nLFlGir-tYcOjxW-8TqNQNDpZ-fiLINFyBIAcmmB56sLc2VlmKwaWREqI6xnCUEZQJ2-XmINu8RZugLt9YNMuwJIAOKQdK9RTPCEBIthOje9JfmTXMOt_b26ZIg-W0M_b9tRonzdM3e4TbGKmnUbrucQ34PT5qtzUasH71MoaHaHMjalUbVcBDjrk4",
    imageAlt: "Паста с трюфелем",
  },
  {
    id: "wagyu",
    category: "steaks",
    name: "Рибай Wagyu",
    description: "Стейк из японской мраморной говядины высшей категории A5.",
    priceTenge: 32000,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALncJvu1tmQWDiVhYsQ99b2z_0wVY_kWHDzRZK-2--__o_98J3ySubA3VvWt4so_Q9MjdPU-XLgKv4AjKO4A9AJz66J78igCW7lFO6Y_FmBrnLSWa1b7hxt3CH0vfxIpXO_1wjWaN-7a5j9z-1qhWfi1C9_p4o_2itiF-r__-j6PVs_tspsmG-SGPPC3YID3Uh15YquLLRbPe99NB17AE5qtul_UNXSJjMy-fNrJSiHq2NBFNgvuw5izWMP4PTJoZb5faXk9pNrXk",
    imageAlt: "Рибай Wagyu",
  },
  {
    id: "sphere",
    category: "mains",
    name: "Сфера AURUM",
    description: "Шоколадная сфера с муссом из лесных ягод и золотой карамелью.",
    priceTenge: 6500,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIkl2hCbqGYVif5WH1MWlPAp-qk54tBSj_5oq0szs_ZCJj6oUjE3wZyiRu48QgV9O9hDvh1Bao3Mge6flIhYthOcEoT6N4uAZ4zitjiEMUtQ1Wfc0KTVla8jADBt0APbMsQa-AJv9kHhkoqXJeg99Ai23Mz6g4h3LAkkPA2txqXGYxkWv2etw5s1R6rO4fZh_QkIsZqWLTVHByvXCP5r7DUA9AtqIPIWwZvTy6osJhF3_IK9YdxCVDV7HDIQrkr7Ae2Ues6P88uko",
    imageAlt: "Десерт Сфера AURUM",
  },
  {
    id: "caesar",
    category: "salads",
    name: "Салат Цезарь с креветками",
    description:
      "Романо, пармезан, соус цезарь, крупные тигровые креветки и гренки из бриоши.",
    priceTenge: 6200,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDN_56Cf1QLnRBz--yk0Lq-wjdmzE4VegM7v0xQcR-Sr7g1VhGJ7T5o1hZiLxFs7A2vL-Fe6GWFpL5FPDFpdJAUXB03YneBLb8G5xYNqXg2pqyDTuL-kR2YXNHbNZXVhxErVVJFXlmzKYntDG3JsB2-8UkAAvm3iC3_uGtSBgdUopeXazaRwq2LD720e7DhTqilTL1SOR_LLGF_QaO_c-kFEtfV1w55r22XgwGo3OX52I0eWePGeFtP6Z9NUSjEJrAgwpbxCcq8-GI",
    imageAlt: "Салат с креветками",
  },
  {
    id: "old-fashioned",
    category: "cocktails",
    name: "Коктейль AURUM Old Fashioned",
    description: "Бурбон, тростниковый сироп, биттер и аромат дыма кедра.",
    priceTenge: 4800,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqj7aOLOnrYI1eJpkwFodV5YpqvPiasz7NlDG_RzIIQiQHepdsbEEaqchqo8_jPyxPK2k9lFyHXsc0_qEF8hRTYAzM4MB9EaDcEeUmPhUhB3jLsttHgby_NMr5zovKBw06ZaVaT6ukUdZjUmQNiMT1Xaa131g1K-F8DrFTMI5lIdkcre3z-CdIJrBvfGK8R79ALRoC5WmU8nSjiiXN0f9RDUO9mvlo_zkAioV_7J5WMggdjoE4aB6vyua6secALWAttANShp4X8UM",
    imageAlt: "Коктейль Old Fashioned",
  },
  {
    id: "wine-glass",
    category: "bar",
    name: "Бокал вина «Chateau Aurum»",
    description: "Отборное красное вино собственной бочковой выдержки ресторана.",
    priceTenge: 8900,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCX50MIh1z8LZNjtTJOnVEwYnY101hD38kNQ1WzuJdGnvlwQfxtS2ZMB52aK0tTLeeHsjbekC015UsdHycPp6b8C51EOE70_1k4iNnnuYGzQTqAcwzqarqMejM6kO7AAgJ6P3yGP3TpQBFVhtnr7r9h-3GOFfZLmHJ1noaUR6l1OfbdvrKMjyjLoqfoaJAWo2K0Nc5Q3jpqDS-K_Q7W7eUdAFTqlk_rXhOPJZseONYmR0tIvyAbNdCGd2qNUoJIw1c9KzDdm5JOoHc",
    imageAlt: "Бокал вина",
  },
];
