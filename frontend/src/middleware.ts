import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Ignore public assets and api routes
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/favicon.ico') ||
        pathname.startsWith('/globals.css')
    ) {
        return NextResponse.next()
    }

    const token = request.cookies.get('auth_token')?.value
    const role = request.cookies.get('vai_tro_id')?.value

    const isAuthRoute = pathname.startsWith('/login') || pathname.startsWith('/register')

    // If unauthenticated and trying to access protected routes
    if (!token && !isAuthRoute && pathname !== '/') {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // If authenticated and trying to access login/register
    if (token && isAuthRoute) {
        if (role === '1') return NextResponse.redirect(new URL('/admin', request.url))
        if (role === '2') return NextResponse.redirect(new URL('/lecturer', request.url))
        if (role === '3') return NextResponse.redirect(new URL('/student', request.url))
        return NextResponse.redirect(new URL('/', request.url))
    }

    // Role-based protection
    if (pathname.startsWith('/admin') && role !== '1') {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (pathname.startsWith('/lecturer') && role !== '2') {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (pathname.startsWith('/student') && role !== '3') {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
