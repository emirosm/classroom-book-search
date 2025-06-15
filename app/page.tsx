'use client';

import { useState } from 'react';
import SearchBar from '@/components/books/SearchBar';
import BookList from '@/components/books/BookList';
import { useBookSearch } from '@/hooks/useBookSearch';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const { data, isLoading } = useBookSearch(query);

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      {isLoading && <p>Loading...</p>}
      {data && <BookList books={data} />}
    </>
  );
}
