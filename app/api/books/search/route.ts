import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('q');
  const page = parseInt(req.nextUrl.searchParams.get('page') || '1', 10);
  const limit = 12;
  const offset = (page - 1) * limit;

  const res = await fetch(
    `https://openlibrary.org/search.json?q=${query}&limit=${limit}&offset=${offset}`
  );
  const data = await res.json();

  const books = data.docs.map((doc: any) => ({
    key: doc.key,
    title: doc.title,
    author_name: doc.author_name,
    cover_i: doc.cover_i,
  }));

  return NextResponse.json({
    books,
    total: data.numFound,
  });
}
