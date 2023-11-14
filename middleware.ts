import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    const userData = request.cookies.get('todo-token')?.value

    if (!userData) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: '/',
}
