import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

connect()

export async function POST(request: NextRequest) {
try {
    const reqBody = await request.json();
    const {userId, userLocation} = reqBody;

    const user = await User.findOne({_id: userId});

    if (!user) {
        return NextResponse.json({error: "Invalid token"}, {status: 400})
    }

    const locationToken = {
        id: user._id, 
        location: userLocation
    };

    console.log(locationToken);
    

    const token =  jwt.sign(locationToken, process.env.TOKEN_SECRET!, { expiresIn: "10 days" });

    console.log(token)
    

    const response = NextResponse.json({message: "User location set", success: true})

    response.cookies.set("locationToken", token, {
        httpOnly: true,
    });

    return response

    



} catch (error: any) {
    return NextResponse.json({error: error.message}, {status: 400})
    }
}

//i am getting the token from the frontend and signing it with jwt, but somehow, a second jwt token isnt coming up in the browser as i want it to