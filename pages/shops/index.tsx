import Head from 'next/head';
import React from 'react';
import BasicInput from '@/components/commons/inputs/basicInput/BasicInput';
import SelectInput from '@/components/commons/inputs/selectInput/SelectInput';
import { ADDRESS, OPTIONS } from '@/utils/constants/SELECT';
import MoneyInput from '@/components/commons/inputs/moneyInput/MoneyInput';
import classNames from 'classnames';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
// import { postShop } from '@/libs/shop';
// import { useRouter } from 'next/router';
import ImageInput from '@/components/commons/inputs/imageInput/ImageInput';
import styles from './shops.module.scss';

export default function Shops() {
  // const router = useRouter();
  const methods = useForm<FieldValues>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      category: '',
      address1: '',
      address2: '',
      description: '',
      imageUrl: '',
      originalHourlyPay: '',
    },
  });
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = methods;
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // TODO 지혜님 전송할때 시급 string => number로 형 변환해야합니다!!
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
            <ImageInput />
            <div />
            <BasicInput
              labelName="가게 설명"
              type="textarea"
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
