import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    const requestUrl = new URL(request.nextUrl);
    const code = requestUrl.searchParams.get('code');

    const baseUrl = 'https://github.com/login/oauth/access_token';
    const config = {
      client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || '',
      client_secret: process.env.GITHUB_CLIENT_SECRET || '',
      code: code || '',
      redirect_uri: 'http://localhost:3000/signin',
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;

    const data = await axios(finalUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    });

    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};
