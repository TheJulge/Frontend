import Head from 'next/head';
import React, { useState } from 'react';
import BasicInput from '@/components/commons/inputs/basicInput/BasicInput';
import styles from './shops.module.scss';

export default function Shops() {
  const [shopName, setShopName] = useState('');
  return (
    <>
      <Head>
        <title>가게 정보 등록 | theJulge</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>가게 정보</div>
        <BasicInput
          labelName="가게 이름*"
          value={shopName}
          setValue={setShopName}
        />
        <BasicInput
          labelName="상세 주소*"
          value={shopName}
          setValue={setShopName}
        />
      </main>
    </>
  );
}
