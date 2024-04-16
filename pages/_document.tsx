import { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <Link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
