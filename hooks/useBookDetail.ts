import { useQuery } from '@tanstack/react-query';
import { fetchBookDetail } from '../api/openLibrary';

export const useBookDetail = (id: string) =>
  useQuery({
    queryKey: ['book', id],
    queryFn: () => fetchBookDetail(id),
    enabled: !!id,
  });
