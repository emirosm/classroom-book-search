// app/favourites/page.tsx
'use client';

import FavouritesList from "@/components/favourites/FavouritesList";

export default function FavouritesPage() {
  return (
    <>
      <h1>❤️ Your Favourites</h1>
      <FavouritesList />
    </>
  );
}
