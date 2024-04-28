import Head from 'next/head';
import React, { useRef, useState } from 'react';
import BasicInput from '@/components/commons/inputs/basicInput/BasicInput';
import SelectInput from '@/components/commons/inputs/selectInput/SelectInput';
import { ADDRESS, OPTIONS } from '@/utils/constants/SELECT';
import MoneyInput from '@/components/commons/inputs/moneyInput/MoneyInput';
import classNames from 'classnames';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { postShop } from '@/libs/shop';
import { GetServerSidePropsContext } from 'next';
import { getUser } from '@/libs/user';
import findCookieValue from '@/utils/findCookieValue';
import CompletionModal from '@/components/commons/modal/completionModal/CompletionModal';
import Image from 'next/image';
import { getPresignedUrl } from '@/libs/image';
import { instance } from '@/libs';
import styles from './shops.module.scss';

interface ShopData {
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

interface ServerSideProps {
  shopId: string;
  defaultValues: ShopData;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = context.req.headers.cookie;

  if (!cookies) {
    return;
  }

  const userId = findCookieValue(cookies, 'userId');
  const defaultValues = {
    name: '',
    category: '',
    address1: '',
    address2: '',
    description: '',
    imageUrl: '',
    originalHourlyPay: '',
  };
  const response = await getUser(userId);
  if (response.data.item.shop) {
    const shop = response.data.item.shop?.item;
    const shopId = shop.id || '';
    defaultValues.name = shop.name || '';
    defaultValues.category = shop.category || '';
    defaultValues.address1 = shop.address1 || '';
    defaultValues.address2 = shop.address2 || '';
    defaultValues.description = shop.description || '';
    defaultValues.imageUrl = shop.imageUrl || '';
    defaultValues.originalHourlyPay = shop.originalHourlyPay || '';
    // eslint-disable-next-line consistent-return
    return {
      props: {
        shopId,
        defaultValues,
      },
    };
  }
  // eslint-disable-next-line consistent-return
  return {
    props: {
      defaultValues,
    },
  };
}
const cutUrl = (url: string) => {
  const index = url.indexOf('?');
  if (index !== -1) {
    return url.substring(0, index);
  }
  return url;
};
export default function Shops({ shopId, defaultValues }: ServerSideProps) {
  const router = useRouter();
  const [image, setImage] = useState<string>(
    '/images/updateShop/uploadImage.png',
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const fileInput = useRef<HTMLInputElement>(null);
  const methods = useForm<FieldValues>({
    mode: 'onBlur',
    defaultValues,
  });
  const {
    handleSubmit,
    control,
    formState: { isValid },
    register,
    setValue,
  } = methods;

  const handleImage = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    const formData = new FormData();
    reader.readAsDataURL(file);
    formData.append('name', file.name);

    reader.onload = async (event: any) => {
      if (reader.readyState === 2) {
        // 파일 onLoad가 성공하면 2, 진행 중은 1, 실패는 0 반환
        setImage(event.target.result);
        try {
          const presignedUrl = await getPresignedUrl(formData);
          const res = await instance.put(presignedUrl, file);
          if (res.status === 200) {
            const cutImageUrl = cutUrl(presignedUrl);
            setValue('imageUrl', cutImageUrl);
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    if (shopId) {
      console.log('편집', shopId);
      // try{
      //   const res = await putShop(data);
      // }
    }
    try {
      const res = await postShop(data);
      const newShopId = res.data.item.id;
      if (res.data) {
        console.log(data);
        setModalMessage('등록이 완료되었습니다.');
        setShowModal(true);
        router.push(`/shops/${newShopId}`);
      }
    } catch (e: any) {
      setModalMessage(e.response.data.message);
      setShowModal(true);
      console.log(e);
    }
  };
  const handleModalClose = () => {
    setShowModal(false);
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
            <div className={styles.imageInput}>
              <label htmlFor="가게 이미지" className={styles.inputTitle}>
                가게 이미지
              </label>
              <button
                type="button"
                className={styles.shopImage}
                onClick={() => fileInput.current?.click()}
              >
                <Image
                  className={styles.image}
                  src={image}
                  width={483}
                  height={276}
                  alt="이미지 추가하기"
                />
              </button>
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={e => {
                  register('imageUrl');
                  handleImage(e);
                }}
                ref={fileInput}
              />
            </div>
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
        {showModal && (
          <CompletionModal showModal={showModal} handleClose={handleModalClose}>
            {modalMessage}
          </CompletionModal>
        )}
      </main>
    </FormProvider>
  );
}
