import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>theJulge</title>
      </Head>
      <main>{/* fragment eslint 에러 방지용 태그 */}</main>
    </>
  );
}
