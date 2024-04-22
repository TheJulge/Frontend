import Head from 'next/head';
import React from 'react';
import BasicInput from '@/components/commons/inputs/basicInput/BasicInput';
import SelectInput from '@/components/commons/inputs/selectInput/SelectInput';
import { ADDRESS, OPTIONS } from '@/utils/constants/SELECT';
import MoneyInput from '@/components/commons/inputs/moneyInput/MoneyInput';
import AddImage from '@/public/images/updateShop/addImage.svg';
import classNames from 'classnames';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './shops.module.scss';

export default function Shops() {
  const onSubmit = (data): any => {
    console.log(data);
  };

  const methods = useForm({
    mode: 'onBlur',
  });
  const {
    /* eslint-disable-next-line */
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = methods;
  return (
    <FormProvider {...methods}>
      <Head>
        <title>가게 정보 등록 | theJulge</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>가게 정보</div>
          <div className={styles.gridContainer}>
            <BasicInput
              labelName="가게 이름*"
              error={errors.labelName && '가게 이름을 입력해주세요'}
            />
            <SelectInput
              labelName="분류*"
              options={OPTIONS}
              error={errors.labelName && '가게 이름을 입력해주세요'}
            />
            <SelectInput
              labelName="주소*"
              options={ADDRESS}
              error={errors.labelName && '가게 이름을 입력해주세요'}
            />
            <BasicInput
              labelName="상세 주소*"
              error={errors.labelName && '상세 주소를 입력해주세요'}
            />
            <MoneyInput labelName="기본 시급*" control={control} />
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
              error={errors.labelName && '가게 이름을 입력해주세요'}
            />
          </div>
          <div className={styles.flexContainer}>
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className={classNames(styles.activeButton, {
                [styles.disabledButton]: !isValid,
              })}
            >
              등록하기
            </button>
          </div>
        </div>
      </main>
    </FormProvider>
  );
}
