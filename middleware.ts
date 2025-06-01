// NOTE: Middleware is disabled because it's not compatible with Next.js static export (output: export)
// See: https://nextjs.org/docs/advanced-features/static-html-export

/*
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const pathname = request.nextUrl.pathname
  
  // Set canonical URL based on current path
  const canonicalUrl = `https://builtit.dev${pathname === '/' ? '' : pathname}`
  requestHeaders.set('x-canonical-url', canonicalUrl)
  
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

// Match all request paths except for API routes, static files, etc.
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)',
  ],
}
*/
