import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Create middleware client
  const response = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res: response })
  
  // Check if user is authenticated
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Get the pathname
  const { pathname } = request.nextUrl

  // Define protected routes
  const protectedRoutes = ['/dashboard', '/account', '/game']
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  )

  // Auth routes that should redirect logged-in users to dashboard
  const authRoutes = ['/auth/login', '/auth/signup']
  const isAuthRoute = authRoutes.includes(pathname)

  // Redirect logic
  if (isProtectedRoute && !session) {
    // User not authenticated, redirect to login
    const redirectUrl = new URL('/auth/login', request.url)
    redirectUrl.searchParams.set('redirectTo', pathname)
    return NextResponse.redirect(redirectUrl)
  }

  if (isAuthRoute && session) {
    // User is authenticated, redirect to dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return response
}

// Only run middleware on specific paths
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/account/:path*',
    '/game/:path*',
    '/auth/login',
    '/auth/signup',
  ],
} 