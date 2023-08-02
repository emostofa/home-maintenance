

import User from "@/Models/userModel";
import  jwt  from "jsonwebtoken";
import {NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";




export async function POST(req) {
    try {
        const reqBody = await req.json()
        const {email, password} = reqBody;
         

        //check if user exists
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        
        const passValid = await bcryptjs.compare(password, user.password);
        // console.log(password, user.password);
        if(!passValid){
            console.log("Invalid password");
            return NextResponse.status(401).json({ message: "Invalid password" });
        }
        const tokenData = {
            id: user._id,
            email: user.email
        }

const token = jwt.sign(tokenData, process.env.JWT_SECRET)

        const response = NextResponse.json({
            message: "Login successful", 
            success: true,
        });

        response.cookies.set("token", token);
        return response;

    } catch (error) {
        console.log(error);
        NextResponse.status(500).json(error);
    }
    
}