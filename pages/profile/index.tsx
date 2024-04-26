import Head from 'next/head';
import BasicInput from '@/components/commons/inputs/basicInput/BasicInput';
import styles from '@/pages/profile/profile.module.scss';
import { ADDRESS } from '@/utils/constants/SELECT';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import SelectInput from '@/components/commons/inputs/selectInput/SelectInput';
import { getUser, putUser } from '@/libs/user';
import { useState } from 'react';
import CompletionModal from '@/components/commons/modal/completionModal/CompletionModal';
import { GetServerSidePropsContext } from 'next';
import findCookieValue from '@/utils/findCookieValue';
import { useRouter } from 'next/router';
import PhoneInput from '@/components/commons/inputs/phoneInput/PhoneInput';

interface UserData {
  name: string;
  phone: string;
  address: string;
  bio?: string;
}

interface ServerSideProps {
  userId: string;
  previewValues: UserData;
}

// 프로필 등록에 필요한 userId 쿠키에서 값 가져오기
// 프로필 수정일 경우 이전에 값 불러오기 위해 SSR 사용
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = context.req.headers.cookie;

  if (!cookies) {
    return;
  }

  const userId = findCookieValue(cookies, 'userId');
  const isProfile = findCookieValue(cookies, 'isProfile');

  const previewValues = {
    name: '',
    phone: '',
    address: '',
    bio: '',
  };

  if (isProfile) {
    const response = await getUser({ userId });

    previewValues.name = response.data.item.name;
    previewValues.phone = response.data.item.phone;
    previewValues.address = response.data.item.address;
    previewValues.bio = response.data.item.bio;
  }

  // eslint-disable-next-line consistent-return
  return {
    props: {
      userId,
      previewValues,
    },
  };
}

export default function Profile({ userId, previewValues }: ServerSideProps) {
  const router = useRouter();
  const [status, setStatus] = useState<string>('idle');
  const [showModal, setShowModal] = useState<boolean>(false);
  const methods = useForm<UserData>({
    mode: 'onBlur',
    defaultValues: previewValues,
  });
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = methods;
  const handleSuccessModalClose = () => {
    setShowModal(false);

    if (previewValues.name !== '') {
      router.push(`/users/${userId}`);
    }
    router.push('/');
  };
  const handleErrorModalClose = () => {
    setShowModal(false);
  };
  const onSubmit: SubmitHandler<UserData> = async (data: UserData) => {
    setStatus('fetching');
    try {
      const response = await putUser({ userId }, data);
      if (response.status === 200) {
        setStatus('success');
        setShowModal(true);
        document.cookie = 'isProfile=true; secure';
      }
    } catch (error) {
      setStatus('error');
      setShowModal(true);
    }
  };
  return (
    <FormProvider {...methods}>
      <Head>
        <title>내 프로필 등록 | theJulge</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.headLine}>내 프로필</div>
            <div className={styles.contain}>
              <div className={styles.box}>
                <BasicInput labelName="이름*" id="name" />
                {/* <BasicInput labelName="연락처*" id="phone" /> */}
                <PhoneInput
                  labelName="연락처*"
                  name="phone"
                  control={control}
                />
                <SelectInput
                  labelName="선호 지역*"
                  options={ADDRESS}
                  name="address"
                  control={control}
                />
              </div>
              <BasicInput labelName="소개" id="bio" type="textarea" />
            </div>
            <button
              className={styles.submitButton}
              disabled={!isValid || status === 'fetching'}
              type="submit"
            >
              등록하기
            </button>
          </form>
        </div>
        {showModal && status === 'success' && (
          <CompletionModal
            showModal={showModal}
            handleClose={handleSuccessModalClose}
          >
            등록이 완료되었습니다.
          </CompletionModal>
        )}
        {showModal && status === 'error' && (
          <CompletionModal
            showModal={showModal}
            handleClose={handleErrorModalClose}
          >
            등록에 실패하였습니다.
          </CompletionModal>
        )}
      </main>
    </FormProvider>
  );
}
