import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ['/','/auth/login','/auth/register']

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;

    const isPublicPath = PUBLIC_PATHS.includes(pathname) ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/static/') ||
    pathname.startsWith('/favicon.ico');

    const isAuthenticated = Boolean(request.cookies.get('is_logged_in')
    ?.value) || Boolean(request.cookies.get('token')?.value);

    if(!isAuthenticated && !isPublicPath){
        const loginUrl = new URL('/auth/login',request.url);
        loginUrl.searchParams.set('redirect',pathname);
        return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
}
    export const config = {
        matcher : [
            '/((?!api|_next/static|_next/image|favicon.ico).*)'
        ]
    }
