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

    // user.location = userLocation
    // await user.save()

    const newTokenData = {
        id: user._id, 
        username: user.username,
        phonenumber: user.phonenumber,
        email: user.email,
        location: userLocation
    };

    console.log(newTokenData);

    const encodedToken = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(encodedToken, process.env.TOKEN_SECRET!);

    const token =  jwt.sign(newTokenData, process.env.TOKEN_SECRET!, { expiresIn: "2 days" });
    

    return NextResponse.json({message: "User location set", success: true})



} catch (error: any) {
    return NextResponse.json({error: error.message}, {status: 400})
    }
}