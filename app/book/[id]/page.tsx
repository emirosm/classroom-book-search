'use client';

import { useParams } from 'next/navigation';
import { useBookDetail } from '../../../hooks/useBookDetail';
import BookMeta from '@/components/BookMeta';
import BookLinks from '@/components/BookLinks';
import BookSubjects from '@/components/BookSubjects';

export default function BookDetailPage() {
  const { id } = useParams() as { id: string };
  const { data, isLoading, isError } = useBookDetail(id);

  if (isLoading) return <p>Loading book details...</p>;
  if (isError || !data) return <p>Failed to load book.</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: 800 }}>
      <BookMeta book={data} />
      <BookLinks book={data} />
      <BookSubjects book={data} />
    </div>
  );
}
