'use client';

import { useState } from 'react';
import SearchBar from '@/components/books/SearchBar';
import BookList from '@/components/books/BookList';
import Pagination from '@/components/books/Pagination';
import { useBookSearch } from '@/hooks/useBookSearch';

const BOOKS_PER_PAGE = 12;

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useBookSearch(query, page);

  const total = data?.total || 0;
  const totalPages = Math.ceil(total / BOOKS_PER_PAGE);

  return (
    <>
      <SearchBar query={query} setQuery={(q) => {
        setQuery(q);
        setPage(1);
      }} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Failed to load books.</p>}
      {data?.books && (
        <>
          <BookList books={data.books} />
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        </>
      )}
    </>
  );
}
