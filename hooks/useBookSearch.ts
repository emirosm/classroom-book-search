// hooks/useBookSearch.ts
import { useQuery } from '@tanstack/react-query';
import { searchBooks } from '@/api/openLibrary';
import { Book } from '@/types/Book';

export const useBookSearch = (query: string, page: number = 1) => {
  return useQuery<Book[], Error>({
    queryKey: ['search', query, page],
    queryFn: () => searchBooks(query, page),
    enabled: !!query,
    placeholderData: (previousData) => previousData,
  });
};
