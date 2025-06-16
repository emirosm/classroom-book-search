import axios from 'axios';
import { Book, BookDetail } from '../types/Book';

export const searchBooks = async (
  query: string,
  page: number = 1
): Promise<Book[]> => {
  const res = await axios.get(`/api/books/search?q=${query}&page=${page}`);
  return res.data;
};

export const fetchBookDetail = async (id: string): Promise<BookDetail> => {
  const res = await axios.get(`/api/books/${id}`);
  return res.data;
};
