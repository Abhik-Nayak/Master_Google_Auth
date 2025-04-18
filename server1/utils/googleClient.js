// import { google } from 'googleapis';

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// export const oauth2Client = new google.auth.OAuth2(
//     GOOGLE_CLIENT_ID,
//     GOOGLE_CLIENT_SECRET,
//     'postmessage'
// );
// verifyGoogleToken.js

import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(); // No need to pass client ID unless doing audience check

/**
 * Verifies a Google OAuth token (e.g., from Google One Tap or Sign-In)
 * @param {string} token - The token received from client (frontend)
 * @returns {Promise<object>} - The payload if verified, or throws error
 */
export async function verifyGoogleToken(token) {
    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID, // Replace with your actual Google client ID
    });

    const payload = ticket.getPayload();
    return payload; // includes user's info like email, name, sub, etc.
  } catch (error) {
    console.error('Error verifying Google token:', error);
    throw new Error('Invalid or expired token');
  }
}
