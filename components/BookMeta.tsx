import { BookDetail } from '@/types/Book';
import styles from '../styles/components/BookMeta.module.scss';

export default function BookMeta({ book }: { book: BookDetail }) {
  const description =
    typeof book.description === 'string' ? book.description : book.description?.value;

  return (
    <section className={styles.meta}>
      <h1>{book.title}</h1>
      {book.first_publish_date && (
        <p><strong>First Published:</strong> {book.first_publish_date}</p>
      )}
      {description && <p>{description}</p>}
      {book.excerpts?.[0] && (
        <blockquote>
          <em>{book.excerpts[0].excerpt}</em>
          {book.excerpts[0].comment && <div>— {book.excerpts[0].comment}</div>}
        </blockquote>
      )}
    </section>
  );
}
