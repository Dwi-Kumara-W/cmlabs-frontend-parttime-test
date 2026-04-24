Nama : Dwi Kumara Widyatna

# MealApp - CMLabs Frontend Parttime Test

Aplikasi pencarian makanan berbasis bahan (ingredients) yang dibangun menggunakan **Next.js 14**, **Tailwind CSS**, dan **TheMealDB API**. Project ini menerapkan **Atomic Design System** untuk struktur komponen yang modular dan _scalable_.

## Fitur Utama

- **Daftar Bahan:** Menampilkan daftar bahan makanan lengkap dengan gambar asli.
- **Pencarian Real-time:** Filter bahan makanan secara instan.
- **Atomic Design:** Struktur folder terbagi menjadi Atoms, Molecules, dan Organisms.
- **Responsive Design:** Tampilan optimal di perangkat mobile, tablet, dan desktop.

## Prasyarat (Prerequisites)

Sebelum menjalankan project, pastikan Anda sudah menginstal:

- [Node.js](https://nodejs.org/) (Versi 24.x atau terbaru)
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)
- Next.js (Versi 16.x)

## Petunjuk Menjalankan Project (Local Development)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
## Konfigurasi Environment

Aplikasi ini memerlukan koneksi ke TheMealDB API. Ikuti langkah-langkah di bawah ini untuk mengatur variabel lingkungan (environment variables):

1.  Buat file baru bernama **`.env`** di root direktori project (sejajar dengan `package.json`).
2.  Salin dan tempel kode berikut ke dalam file tersebut:

    ```env
    NEXT_PUBLIC_MEAL_API_URL=[https://www.themealdb.com/api/json/v1/1](https://www.themealdb.com/api/json/v1/1)
    ```

npm install

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
