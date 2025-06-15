'use client';

import { Book } from '@/types/Book';
import BookCard from './BookCard';
import styles from '@/styles/components/BookList.module.scss';

export default function BookList({ books }: { books: Book[] }) {
  return (
    <div className={styles.grid}>
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}
