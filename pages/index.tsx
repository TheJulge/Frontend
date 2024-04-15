import BasicInput from '@/components/commons/inputs/basicInput/BasicInput.tsx';
import MoneyInput from '@/components/commons/inputs/moneyInput/MoneyInput.tsx';
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
