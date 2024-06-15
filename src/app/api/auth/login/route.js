import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/Heros';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();

  try {
    const user = await User.findOne({ email });
    // console.log(user);
    if (!user) {
      return NextResponse.json({ success: false, error: 'Invalid email or password' }, { status: 401 });
    }

    // Since password is stored in plain text, directly compare
    if (password !== user.password) {
      return NextResponse.json({ success: false, error: 'Invalid email or password' }, { status: 401 });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return NextResponse.json({ success: true, token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}