import Head from 'next/head';
import Filter from '@/components/commons/filter/Filter';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>theJulge</title>
      </Head>
      <button type="button" onClick={handleOpen}>
        클릭
      </button>
      <Filter isOpen={isOpen} setIsOpen={setIsOpen} />
      <div>{/* fragment eslint 에러 방지용 태그 */}</div>
    </>
  );
}
