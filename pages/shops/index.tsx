import Head from 'next/head';
import React, { useState } from 'react';
import BasicInput from '@/components/commons/inputs/basicInput/BasicInput';
import SelectInput from '@/components/commons/inputs/selectInput/SelectInput';
import { ADDRESS, OPTIONS } from '@/utils/constants/SELECT';
import MoneyInput from '@/components/commons/inputs/moneyInput/MoneyInput';
import AddImage from '@/public/images/updateShop/addImage.svg';
import styles from './shops.module.scss';

export default function Shops() {
  const [shopName, setShopName] = useState<string>('');
  const [select, setSelect] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [money, setMoney] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  return (
    <>
      <Head>
        <title>가게 정보 등록 | theJulge</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>가게 정보</div>
          <div className={styles.gridContainer}>
            <BasicInput
              labelName="가게 이름*"
              value={shopName}
              setValue={setShopName}
            />
            <SelectInput
              labelName="분류*"
              options={OPTIONS}
              value={select}
              setValue={setSelect}
            />
            <SelectInput
              labelName="주소*"
              options={ADDRESS}
              value={address}
              setValue={setAddress}
            />
            <BasicInput
              labelName="상세 주소*"
              value={shopName}
              setValue={setShopName}
            />
            <MoneyInput
              labelName="기본 시급*"
              value={money}
              setValue={setMoney}
            />
            <div />
            <div className={styles.imageInput}>
              <div className={styles.inputTitle}>가게 이미지</div>
              <div className={styles.shopImage}>
                <AddImage viewBox="0 0 110 63" />
              </div>
            </div>
            <div />
            <BasicInput
              labelName="가게 설명"
              value={description}
              setValue={setDescription}
            />
          </div>
          <div className={styles.flexContainer}>
            <button type="submit" className={styles.submitButton}>
              등록하기
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
