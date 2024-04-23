import Head from 'next/head';
import React from 'react';
import BasicInput from '@/components/commons/inputs/basicInput/BasicInput';
import SelectInput from '@/components/commons/inputs/selectInput/SelectInput';
import { ADDRESS, OPTIONS } from '@/utils/constants/SELECT';
import MoneyInput from '@/components/commons/inputs/moneyInput/MoneyInput';
import AddImage from '@/public/images/updateShop/addImage.svg';
import classNames from 'classnames';
import { FormProvider, useForm } from 'react-hook-form';
// import { postShop } from '@/libs/shop';
// import { useRouter } from 'next/router';
import styles from './shops.module.scss';

export interface NoticeData {
  name: string;
  category: string;
  address1: string;
  address2: string;
  description?: string;
  imageUrl?: string;
  originalHourlyPay: number;
}
export default function Shops() {
  // const router = useRouter();
  const methods = useForm({
    mode: 'onBlur',
  });
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = methods;

  const onSubmit = async (data: NoticeData) => {
    console.log(data);
    // try {
    //   const result = await postShop(data);
    //   if (result.data) {
    //     alert('업로드 성공');
    //     // router.push('/가게 정보 상세');
    //   }
    // } catch (e) {
    //   alert('업로드 실패');
    //   console.log(e);
    // }
  };
  // const handleImageUpload = event => {
  //   const file = event.target.files[0];
  //   // 파일을 업로드하는 로직을 추가
  // };
  return (
    <FormProvider {...methods}>
      <Head>
        <title>가게 정보 등록 | theJulge</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>가게 정보</div>
          <div className={styles.gridContainer}>
            <BasicInput labelName="가게 이름*" id="name" />
            <SelectInput
              labelName="분류*"
              options={OPTIONS}
              name="category"
              control={control}
            />
            <SelectInput
              labelName="주소*"
              options={ADDRESS}
              name="address1"
              control={control}
            />
            <BasicInput labelName="상세 주소*" id="address2" />
            <MoneyInput
              labelName="기본 시급*"
              control={control}
              id="originalHourlyPay"
            />
            <div />
            <div className={styles.imageInput}>
              <div className={styles.inputTitle}>가게 이미지</div>
              <div className={styles.shopImage}>
                {/* <div
                  className={styles.imagePreview}
                  style={{ backgroundImage: `url(${imageUrl})` }}
                  id="imageUrl"
                /> */}
                <AddImage viewBox="0 0 110 63" />
              </div>
              {/* <input
                id="imageUpload"
                type="file"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              /> */}
            </div>
            <div />
            <BasicInput
              labelName="가게 설명"
              defaultValue=""
              id="description"
            />
          </div>
          <div className={styles.flexContainer}>
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className={classNames(styles.disabledButton, {
                [styles.activeButton]: isValid,
              })}
              disabled={!isValid}
            >
              등록하기
            </button>
          </div>
        </div>
      </main>
    </FormProvider>
  );
}
