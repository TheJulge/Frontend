import Head from 'next/head';
import React, { useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import BasicInput from '@/components/commons/inputs/basicInput/BasicInput';
import MoneyInput from '@/components/commons/inputs/moneyInput/MoneyInput';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import TimeInput from '@/components/commons/inputs/timeInput/TimeInput';
import DateInput from '@/components/commons/inputs/dateInput/DateInput';
import {
  ShopNoticeProps,
  getShopNotice,
  postShopNotice,
  putShopNotice,
} from '@/libs/notice';
import CompletionModal from '@/components/commons/modal/completionModal/CompletionModal';
import { GetServerSidePropsContext } from 'next';
import styles from './NoticeUpdatePage.module.scss';

interface NoticeUpdatePageProps {
  shopId: string;
  noticeId: string;
  defaultValues: ShopNoticeProps;
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { id: shopId, noticeId } = query;
  const defaultValues = {
    hourlyPay: '',
    startsAt: '',
    workhour: '',
    description: '',
  };

  if (shopId && noticeId) {
    const res = await getShopNotice(shopId as string, noticeId as string);
    const noticeData = res.data.item;
    defaultValues.hourlyPay = noticeData.hourlyPay;
    defaultValues.startsAt = noticeData.startsAt;
    defaultValues.workhour = noticeData.workhour;
    defaultValues.description = noticeData.description;
    return {
      props: {
        shopId,
        noticeId,
        defaultValues,
      },
    };
  }
  return {
    props: {
      shopId,
      defaultValues,
    },
  };
}

export default function NoticeUpdatePage({
  shopId,
  noticeId,
  defaultValues,
}: NoticeUpdatePageProps) {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const methods = useForm<FieldValues>({
    mode: 'onBlur',
    defaultValues,
  });
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = methods;
  const handleModalClose = () => {
    setShowModal(false);
  };
  const onSubmit = async (data: FieldValues) => {
    if (!noticeId) {
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
        }
        setShowModal(true);
      }
    } else {
      try {
        const res = await putShopNotice(
          shopId as string,
          noticeId as string,
          data,
        );
        if (res.status === 200) {
          setModalMessage('편집이 완료되었습니다');
          setShowModal(true);
          router.push(`/shops/${shopId}`);
        }
      } catch (e: any) {
        if (e.response && e.response.data && e.response.data.message) {
          setModalMessage(e.response.data.message);
        }
        setShowModal(true);
      }
    }
  };
  return (
    <FormProvider {...methods}>
      <Head>
        <title>공고 등록 | the Julge</title>
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
