import Head from 'next/head';
import React from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import BasicInput from '@/components/commons/inputs/basicInput/BasicInput';
import MoneyInput from '@/components/commons/inputs/moneyInput/MoneyInput';
import classNames from 'classnames';
// import { useRouter } from 'next/router';
import TimeInput from '@/components/commons/inputs/timeInput/TimeInput';
import DateInput from '@/components/commons/inputs/dateInput/DateInput';
import styles from './NoticeUpdatePage.module.scss';

export default function NoticeUpdatePage() {
  // const router = useRouter();
  // const { id: shopId } = router.query;
  const methods = useForm<FieldValues>({
    mode: 'onBlur',
    defaultValues: {
      hourlyPay: '',
      startsAt: '',
      workhour: '',
      description: '',
    },
  });
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = methods;
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // try {
    //   const result = await postShopNotice(shopId, data);
    //   if (result.data) {
    //     alert('업로드 성공');
    //     // router.push('/shops/${shopId}');
    //   }
    // } catch (e) {
    //   alert('업로드 실패');
    //   console.log(e);
    // }
  };
  return (
    <FormProvider {...methods}>
      <Head>
        <title>공고 등록 | theJulge</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>공고 등록</div>
          <div className={styles.gridContainer}>
            <MoneyInput labelName="시급*" control={control} id="hourlyPay" />
            <DateInput control={control} />
            <TimeInput control={control} />
            <BasicInput
              labelName="공고 설명"
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
