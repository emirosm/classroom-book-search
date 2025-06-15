// NotesList.tsx
import { useNotes } from '@/hooks/useNotes';

export default function NotesList({ bookId }: { bookId: string }) {
  const { notes } = useNotes(bookId);
  return (
    <ul>
      {notes.map((note, i) => (
        <li key={i}>{note}</li>
      ))}
    </ul>
  );
}
