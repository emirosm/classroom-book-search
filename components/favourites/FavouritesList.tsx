'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFavourites } from '@/hooks/useFavourites';
import BookCard from '@/components/books/BookCard';
import styles from '@/styles/components/BookList.module.scss';
import { Book } from '@/types/Book';

export default function FavouritesList() {
  const { favourites } = useFavourites();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchBooks() {
      setLoading(true);
      try {
        const responses = await Promise.all(
          favourites.map((id) =>
            axios.get(`/api/books/${id}`).then((res) => res.data)
          )
        );
        console.log("responses",responses);
        setBooks(responses);
      } catch (err) {
        console.error('Error fetching favourites:', err);
      } finally {
        setLoading(false);
      }
    }

    if (favourites.length > 0) fetchBooks();
    else setLoading(false);
  }, [favourites]);

  if (loading) return <p>Loading...</p>;
  if (favourites.length === 0) return <p>You have no favourites yet.</p>;
  console.log("favourites", favourites)
  return (
    <div className={styles.grid}>
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}
