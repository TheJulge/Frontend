import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>theJulge</title>
      </Head>
      <div>{/* fragment eslint 에러 방지용 태그 */}</div>
    </>
  );
}
