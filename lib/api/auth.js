// lib/api.js (or utils/api.js)
'use server'
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export async function signInUser(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/user/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to sign in');
    }

    return await response.json();
  } catch (error) {
    console.error('Error signing in:', error);
    console.error('Incorrect email or password you are not allowed to sign sign in ');
    throw error;
  }
}
