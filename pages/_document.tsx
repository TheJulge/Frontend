import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
