import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const cookie = req.cookies;
  console.log('cookie' + cookie);
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
