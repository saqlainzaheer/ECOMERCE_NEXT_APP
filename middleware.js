import { NextResponse } from 'next/server';
import { parse } from 'cookie'; // You'll need to install the 'cookie' package if you haven't

// Define the middleware function
export async function middleware(request) {
  const { cookies } = request;
  const token = cookies['jwt']; // Adjust this to your cookie name

  // If the token is present, allow access to the /admin route
  if (token) {
    // Optionally, verify the token here and handle any errors

    // If verification is successful, proceed to the /admin route
    return NextResponse.next();
  } else {
    // Redirect to the login page or another route if not authenticated
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Define the configuration for the middleware
export const config = {
  matcher: '/admin', // Apply this middleware to the /admin route
};
