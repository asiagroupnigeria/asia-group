import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return new NextResponse('Authorization code is missing from GitHub redirect', { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new NextResponse('GitHub App credentials (Client ID or Secret) are not configured on the server', { status: 500 });
  }

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json', // Force GitHub to return JSON
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      console.error('GitHub token exchange error:', tokenData);
      return new NextResponse(tokenData.error_description || tokenData.error, { status: 400 });
    }

    const accessToken = tokenData.access_token;
    
    // Render the HTML page that uses window.postMessage to send the token back to the CMS window
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Authorizing with GitHub</title>
      </head>
      <body>
        <p>Authorizing...</p>
        <script>
          const receiveMessage = (message) => {
            window.opener.postMessage(
              'authorization:github:success:{"token":"${accessToken}","provider":"github"}',
              message.origin
            );
            window.removeEventListener("message", receiveMessage, false);
          };
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage("authorizing:github", "*");
        </script>
      </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('OAuth token exchange failed:', error);
    return new NextResponse('Authentication failed during token exchange', { status: 500 });
  }
}
