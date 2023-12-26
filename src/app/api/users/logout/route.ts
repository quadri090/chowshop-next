import { NextResponse  } from "next/server";

export async function GET() {
    try {
        const response  = NextResponse.json({
            message: "logout successful",
            success: true
        })

        response.cookies.delete("token");
        
        return response
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}