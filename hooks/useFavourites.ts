import { useLocalStorage } from "./useLocalStorage";

export function useFavourites() {
  const [favourites, setFavourites] = useLocalStorage<string[]>('favourites', []);

  const toggleFavourite = (id: string) => {
    console.log("id---", id)
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const isFavourite = (id: string) => favourites.includes(id);

  return { favourites, toggleFavourite, isFavourite };
}
