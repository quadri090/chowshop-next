import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {phonenumber, password} = reqBody;

        const user = await User.findOne({phonenumber});

        if(!user) {
            return NextResponse.json({error: "User does not exist"}, {status: 404});
        };

        const validPassword = await bcryptjs.compare(password, user.password)

        if(!validPassword) {
            return NextResponse.json({error: "Invalid Password"}, {status : 400})
        };

        const tokenData = {
            id: user._id, 
            username: user.username,
            phonenumber: user.phonenumber
        }
        console.log(tokenData)

        const token =  jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "2 days" });
        console.log(token)

        const response = NextResponse.json({
            message: "Login succesfull",
        })
        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}