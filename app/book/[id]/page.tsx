'use client';

import { useParams } from 'next/navigation';
import { useBookDetail } from '@/hooks/useBookDetail';
import BookMeta from '@/components/books/BookMeta';
import BookLinks from '@/components/books/BookLinks';
import BookSubjects from '@/components/books/BookSubjects';
import FavouriteButton from '@/components/favourites/FavouriteButton';
import NotesEditor from '@/components/notes/NotesEditor';
import NotesList from '@/components/notes/NotesList';

export default function BookDetailPage() {
  const { id } = useParams() as { id: string };
  console.log("id",id);

  const { data, isLoading, isError } = useBookDetail(id);
  console.log("data",data);
  if (isLoading) return <p>Loading book details...</p>;
  if (isError || !data) return <p>Failed to load book.</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: 800 }}>
      <BookMeta book={data} />
      <BookLinks book={data} />
      <BookSubjects book={data} />
      <FavouriteButton id={data.key.match(/\/works\/(.+)/)?.[1] || null} />
      <NotesEditor bookId={data.key} />
      <NotesList bookId={data.key} />
    </div>
  );
}
