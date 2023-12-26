import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const isLoggedInUserPath = path === "/ordersuccessful" || path === "/orderfailed" || path === "/verification" 

    const token = request.cookies.get("token")?.value || undefined

    if(token && path === "/login" || path === "/signup") {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if(!token && isLoggedInUserPath) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

export const config = {
    matcher: [
      '/ordersuccessful',
      '/orderfailed',
      '/verification',
      '/login',
      '/signup'
    ]
  }