import axios from 'axios';
import { Book } from '../types/Book';

export const searchBooks = async (query: string): Promise<Book[]> => {
  const response = await axios.get('https://openlibrary.org/search.json', {
    params: { q: query },
  });

  return response.data.docs.slice(0, 20); 
};
