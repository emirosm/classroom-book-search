import { BookDetail } from '@/types/Book';
import styles from '../styles/components/BookLinks.module.scss';

export default function BookLinks({ book }: { book: BookDetail }) {
  if (!book.links?.length) return null;

  return (
    <section className={styles.links}>
      <h2>External Links</h2>
      <ul>
        {book.links.map((link) => (
          <li key={link.url}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
