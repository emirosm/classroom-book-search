'use client';
import { useFavourites } from "@/hooks/useFavourites";

export default function FavouriteButton({ id }: { id: string }) {
  const { isFavourite, toggleFavourite } = useFavourites();
  return (
    <button onClick={() => toggleFavourite(id)}>
      {isFavourite(id) ? '💖 Unfavourite' : '🤍 Favourite'}
    </button>
  );
}
