import { useQuery } from '@tanstack/react-query';
import { searchBooks } from '../api/openLibrary';

export const useBookSearch = (query: string) => {
  return useQuery({
    queryKey: ['books', query],
    queryFn: () => searchBooks(query),
    enabled: !!query,
  });
};
