import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('q');
  if (!query) return NextResponse.json({ docs: [] });

  const res = await axios.get('https://openlibrary.org/search.json', {
    params: { q: query },
  });

  return NextResponse.json(res.data.docs.slice(0, 20));
}
