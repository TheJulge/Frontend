import Head from 'next/head';
import React, { useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import BasicInput from '@/components/commons/inputs/basicInput/BasicInput';
import MoneyInput from '@/components/commons/inputs/moneyInput/MoneyInput';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import TimeInput from '@/components/commons/inputs/timeInput/TimeInput';
import DateInput from '@/components/commons/inputs/dateInput/DateInput';
import { postShopNotice } from '@/libs/notice';
import CompletionModal from '@/components/commons/modal/completionModal/CompletionModal';
import styles from './NoticeUpdatePage.module.scss';

export default function NoticeUpdatePage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const { id: shopId } = router.query;
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
  // const handleSuccessModalClose = () => {
  //   setShowModal(false);
  //   router.push(`/shops/${shopId}`);
  // };
  const handleModalClose = () => {
    setShowModal(false);
  };
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      const res = await postShopNotice(shopId as string, data);
      if (res.status === 200) {
        setModalMessage('등록이 완료되었습니다');
        setShowModal(true);
        router.push(`/shops/${shopId}`);
      }
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.message) {
        setModalMessage(e.response.data.message);
      } else {
        setModalMessage('등록에 실패했습니다');
      }
      setShowModal(true);
      console.log(e);
    }
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
        {showModal && (
          <CompletionModal showModal={showModal} handleClose={handleModalClose}>
            {modalMessage}
          </CompletionModal>
        )}
      </main>
    </FormProvider>
  );
}
