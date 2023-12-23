import { NextURL } from "next/dist/server/web/next-url"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const isNotPublicPath = path === "/ordersuccessful" || "/orderfailed" || "/verification" 

    const token = request.cookies.get("token")?.value || ""

    // if(!token && isNotPublicPath) {
    //     return NextResponse.redirect(new URL('/login', request.nextUrl))
    // }
}