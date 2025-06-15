import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const res = await axios.get(`https://openlibrary.org/works/${params.id}.json`);
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json({ error: 'Book not found' }, { status: 404 });
  }
}
