import User from "@/Models/userModel";
import jwt from "jsonwebtoken";
import  { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    const passValid = await bcryptjs.compare(password, user.password);
    // console.log(password, user.password);
    if (!passValid) {
      return NextResponse.json({error: "Invalid email/password"}, {status: 401});
    }
    const tokenData = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET);

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token);
    return response;
  } catch (error) {
    NextResponse.status(500).json(error);
  }
}
