import Head from 'next/head';
import Gnb from '@/components/commons/gnb/Gnb';

export default function Home() {
  return (
    <>
      <Head>
        <title>theJulge</title>
      </Head>
      <Gnb />
    </>
  );
}
