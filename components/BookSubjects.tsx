import { BookDetail } from '@/types/Book';
import styles from '../styles/components/BookSubjects.module.scss';

export default function BookSubjects({ book }: { book: BookDetail }) {
  return (
    <section className={styles.subjects}>
      {book.subjects?.length && (
        <>
          <h2>Subjects</h2>
          <p>{book.subjects.slice(0, 10).join(', ')}</p>
        </>
      )}
      {book.subject_places?.length && (
        <>
          <h2>Places</h2>
          <p>{book.subject_places.join(', ')}</p>
        </>
      )}
      {book.subject_people?.length && (
        <>
          <h2>People</h2>
          <p>{book.subject_people.join(', ')}</p>
        </>
      )}
      {book.subject_times?.length && (
        <>
          <h2>Times</h2>
          <p>{book.subject_times.join(', ')}</p>
        </>
      )}
    </section>
  );
}
