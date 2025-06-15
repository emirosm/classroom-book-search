'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Book } from '@/types/Book';
import styles from '@/styles/components/BookCard.module.scss';

export default function BookCard({ book }: { book: Book }) {
  const id = book.key.replace('/works/', '');
  console.log("book",book);
  const cover = book.cover_i
  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
  : book.covers
    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`
    : '/no-cover.png';


  return (
    <Link href={`/book/${id}`} className={styles.card}>
      <Image
        src={cover}
        alt={book.title}
        width={128}
        height={192}
        className={styles.image}
      />
      <div className={styles.details}>
        <h3>{book.title}</h3>
        <p>{book.author_name?.join(', ')}</p>
        <span>{book.first_publish_year}</span>
      </div>
    </Link>
  );
}
