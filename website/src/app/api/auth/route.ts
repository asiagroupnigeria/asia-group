import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const provider = searchParams.get('provider');

  // Sveltia CMS typically uses ?provider=github
  if (provider && provider !== 'github') {
    return new NextResponse('Only GitHub is supported', { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new NextResponse('GitHub Client ID is not configured on the server', { status: 500 });
  }

  const githubAuthUrl = new URL('https://github.com/login/oauth/authorize');
  githubAuthUrl.searchParams.set('client_id', clientId);
  githubAuthUrl.searchParams.set('scope', 'repo,user');

  return NextResponse.redirect(githubAuthUrl.toString());
}
