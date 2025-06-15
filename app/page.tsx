'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useBookSearch } from '../hooks/useBookSearch';
import { Book } from '../types/Book';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const { data, isLoading } = useBookSearch(query);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books..."
      />

      {isLoading && <p>Loading...</p>}

      <ul>
        {data?.map((book: Book) => (
          <li key={book.key}>
              <Image
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                width={80}
                height={120}
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            <div>
              <strong>{book.title}</strong>
              <br />
              {book.author_name?.join(', ')}
              <br />
              {book.first_publish_year}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
