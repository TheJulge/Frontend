import Head from 'next/head';
import Filter from '@/components/commons/filter/Filter';

export default function Home() {
  return (
    <>
      <Head>
        <title>theJulge</title>
      </Head>
      <Filter />
    </>
  );
}
