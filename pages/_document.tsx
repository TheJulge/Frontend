import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* pretendard 폰트 추가 */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.css"
          integrity="sha512-NzqTHTrO48HsIamogmIaVhTXoSgRF24Cn+ynrNYrFuKrY0AdDbmcNieiOHsQARS/r0Gax9VwV3/rVMHs3ipUlg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Kakao SDK 설치 */}
        <script
          defer
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js"
          integrity={process.env.NEXT_PUBLIC_KAKAO_INTEGRITY_VALUE}
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
