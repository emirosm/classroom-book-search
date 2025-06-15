import { useLocalStorage } from './useLocalStorage';

export function useNotes(bookId: string) {
  const [notes, setNotes] = useLocalStorage<Record<string, string[]>>(
    'notes',
    {}
  );

  const addNote = (text: string) => {
    setNotes((prev) => ({
      ...prev,
      [bookId]: [...(prev[bookId] || []), text],
    }));
  };

  return { notes: notes[bookId] || [], addNote };
}
