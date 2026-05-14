export type Review = {
  id: string;
  author: string;
  date: string;
  /** Omit for locally submitted reviews (placeholder avatar in UI). */
  avatarSrc?: string;
  text: string;
  rating?: number;
};

export const SEED_REVIEW_IDS = ["1", "2", "3", "4"] as const;

export const SEED_REVIEW_AVATARS: Record<(typeof SEED_REVIEW_IDS)[number], string> = {
  "1": "https://lh3.googleusercontent.com/aida-public/AB6AXuC73axarFVWnwa_kZn_QZo4IsQ8X0RSk8JrnxgUrWWvcsxu5eOYxWnCPhvdbBrhhhOIkpzTwK4AZREs3a6teEpKeCI0o7nATT0MObXe40SdtAYs0kPExOgScu32VvI7LiO3G8W3z_VCQwHCj3tGWWEh_yGbK23Ylga9pA_ZiOJKcLO2caWXhfimBk53q94b_lsDzXDfbwoUFb6Jkoj6VKQVDjorwUJ8V45pQ430Ln_bRkRC6P6XLuXXWOu3uj-alYM6fnzcXYFA8dY",
  "2": "https://lh3.googleusercontent.com/aida-public/AB6AXuALFAVrdwNbcEnWbgleRyoCqjTVMMe8agDyY0jSMGOztUblwqp7G_1f4LBhil7yiKI6-LjT6ZUVlTMkytPE_nJDjrBnqgPh9R6n7fxQZfQmrzwoNg18u25CM6BfTnZTUhASdtD98yaoGWz264EuDCtaqEEk3UljciY1i2mzK09Mp9pbm0zfAbEt5feWZCB1CHQ6rlXQk9GpH-q7t2pZ-6FLx9yWS-S0rL2-wLC3UcKvhmYQgBU2IzkXW7x4wTLN-bkxDCREw5DcbsI",
  "3": "https://lh3.googleusercontent.com/aida-public/AB6AXuCX50MIh1z8LZNjtTJOnVEwYnY101hD38kNQ1WzuJdGnvlwQfxtS2ZMB52aK0tTLeeHsjbekC015UsdHycPp6b8C51EOE70_1k4iNnnuYGzQTqAcwzqarqMejM6kO7AAgJ6P3yGP3TpQBFVhtnr7r9h-3GOFfZLmHJ1noaUR6l1OfbdvrKMjyjLoqfoaJAWo2K0Nc5Q3jpqDS-K_Q7W7eUdAFTqlk_rXhOPJZseONYmR0tIvyAbNdCGd2qNUoJIw1c9KzDdm5JOoHc",
  "4": "https://lh3.googleusercontent.com/aida-public/AB6AXuB159ri026H--w9AcMo_ToYe8LQUY-z3kTfI_YddHTxDdEgiUn6sgiwX5clM8dWjVtcbkEsBP445MHJsDVrHH2XocIgCuUVETRslZvjdkmK7iVwGGCpiQjYCzeSgFXxNoGs6KDgVEtPYpRNwuJU1D_KyQnmWDI79WOcI7DsgPeh99ScreKN5Be-P45OT-VzjrhD17SbM7ALxYAUMeHM4F1zZNl7DSW-O7oqOwbSIK94Tpbyy2-wKA6Uhw4k0Oj_d44bj2iSpZ7lq0I",
};
