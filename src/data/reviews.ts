export type Review = {
  id: string;
  author: string;
  date: string;
  avatarSrc: string;
  text: string;
};

export const reviews: Review[] = [
  {
    id: "1",
    author: "Анна Скорова",
    date: "12 марта 2026",
    avatarSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC73axarFVWnwa_kZn_QZo4IsQ8X0RSk8JrnxgUrWWvcsxu5eOYxWnCPhvdbBrhhhOIkpzTwK4AZREs3a6teEpKeCI0o7nATT0MObXe40SdtAYs0kPExOgScu32VvI7LiO3G8W3z_VCQwHCj3tGWWEh_yGbK23Ylga9pA_ZiOJKcLO2caWXhfimBk53q94b_lsDzXDfbwoUFb6Jkoj6VKQVDjorwUJ8V45pQ430Ln_bRkRC6P6XLuXXWOu3uj-alYM6fnzcXYFA8dY",
    text: "«Невероятная атмосфера и безупречный сервис. Кухня AURUM — это настоящее искусство, которое снимает страх неизвестности: всё предсказуемо премиально.»",
  },
  {
    id: "2",
    author: "Елена Муратова",
    date: "3 марта 2026",
    avatarSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALFAVrdwNbcEnWbgleRyoCqjTVMMe8agDyY0jSMGOztUblwqp7G_1f4LBhil7yiKI6-LjT6ZUVlTMkytPE_nJDjrBnqgPh9R6n7fxQZfQmrzwoNg18u25CM6BfTnZTUhASdtD98yaoGWz264EuDCtaqEEk3UljciY1i2mzK09Mp9pbm0zfAbEt5feWZCB1CHQ6rlXQk9GpH-q7t2pZ-6FLx9yWS-S0rL2-wLC3UcKvhmYQgBU2IzkXW7x4wTLN-bkxDCREw5DcbsI",
    text: "«Место, где приватность встречается с роскошью. Идеально для деловых встреч и романтического вечера — качество и атмосфера на высоте.»",
  },
  {
    id: "3",
    author: "Дмитрий Калиев",
    date: "18 февраля 2026",
    avatarSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCX50MIh1z8LZNjtTJOnVEwYnY101hD38kNQ1WzuJdGnvlwQfxtS2ZMB52aK0tTLeeHsjbekC015UsdHycPp6b8C51EOE70_1k4iNnnuYGzQTqAcwzqarqMejM6kO7AAgJ6P3yGP3TpQBFVhtnr7r9h-3GOFfZLmHJ1noaUR6l1OfbdvrKMjyjLoqfoaJAWo2K0Nc5Q3jpqDS-K_Q7W7eUdAFTqlk_rXhOPJZseONYmR0tIvyAbNdCGd2qNUoJIw1c9KzDdm5JOoHc",
    text: "«Коктейльная карта поражает воображением. Каждый напиток — история, а персонал внимателен к деталям.»",
  },
  {
    id: "4",
    author: "Мария Тлеуберген",
    date: "5 февраля 2026",
    avatarSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB159ri026H--w9AcMo_ToYe8LQUY-z3kTfI_YddHTxDdEgiUn6sgiwX5clM8dWjVtcbkEsBP445MHJsDVrHH2XocIgCuUVETRslZvjdkmK7iVwGGCpiQjYCzeSgFXxNoGs6KDgVEtPYpRNwuJU1D_KyQnmWDI79WOcI7DsgPeh99ScreKN5Be-P45OT-VzjrhD17SbM7ALxYAUMeHM4F1zZNl7DSW-O7oqOwbSIK94Tpbyy2-wKA6Uhw4k0Oj_d44bj2iSpZ7lq0I",
    text: "«Отмечали годовщину — сервис безупречный, блюда яркие и запоминающиеся. Обязательно вернёмся.»",
  },
];
