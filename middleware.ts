import { NextRequest, NextResponse } from 'next/server';

// 1. protected Page 와 public Page 분류
// const PROTECTED_PAGES = [''];  // TODO
const PUBLIC_PAGES = ['/signin', '/signup'];

export default async function middleware(request: NextRequest) {
  // 2. 경로 확인해서 auth Page 와 public Page인지 구분
  const { nextUrl, cookies } = request;
  const path = nextUrl.pathname;
  // const isProtectedPage = PROTECTED_PAGES.includes(path); // TODO: PROTECTED_PAGES 배열 추가 후 사용
  const isPublicPage = PUBLIC_PAGES.includes(path);

  // 3. cookies에서 accessToken 꺼내기
  const accessToken = cookies.get('accessToken');

  // 5. 로그인 안된 상태로 보안 페이지 접근 시 리다이렉션
  // if (isProtectedPage && !accessToken) {
  //   return NextResponse.redirect(new URL('/signin', request.nextUrl));
  // }

  // 6. 로그인 상태 일 때 로그인, 회원가입 페이지 접근 시 메인 페이지로 리다이렉션
  if (isPublicPage && accessToken) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  return NextResponse.next();
}
