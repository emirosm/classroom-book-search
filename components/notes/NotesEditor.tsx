// NotesEditor.tsx
'use client';
import { useState } from 'react';
import { useNotes } from '@/hooks/useNotes';

export default function NotesEditor({ bookId }: { bookId: string }) {
  const { addNote } = useNotes(bookId);
  const [text, setText] = useState('');

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => { addNote(text); setText(''); }}>
        Add Note
      </button>
    </div>
  );
}


