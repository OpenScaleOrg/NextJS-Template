
import { NextResponse } from 'next/server';
import UnverifiedUser from '@/lib/models/unverifieduser';
import User from '@/lib/models/user';
import connectDB from '@/lib/mongodb';

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    const token = searchParams.get('token');

    if (!email || !token) {
      return NextResponse.json({ error: 'Invalid or missing parameters' }, { status: 400 });
    }

    // Find the user in unverified users collection
    const unverifiedUser = await UnverifiedUser.findOne({ _id: token, email });
    
    if (!unverifiedUser) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 });
    }

    // Create a new user in the Users collection
    await User.create({ email: email, password: unverifiedUser.hashedPassword, firstName: unverifiedUser.firstName, lastName: unverifiedUser.lastName });

    // Remove the user from UnverifiedUsers collection
    await UnverifiedUser.deleteOne({ _id: token });

    return NextResponse.redirect(new URL('/success', req.url));
  } catch (error) {
    console.error('Verification Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
