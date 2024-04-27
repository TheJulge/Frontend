import { getCookieValue } from '@/utils/getCookie';
import { useEffect, useState } from 'react';
import { getUser } from '@/libs/user';
import { getAlert } from '@/libs/alert';
import axios from 'axios';
import Link from 'next/link';
import NotiIcon from '@/public/images/gnb/notification.svg';
import NotiActiveIcon from '@/public/images/gnb/notification-active.svg';
import styles from './GnbUser.module.scss';
import SignOutButton from './SignOutButton';
import NotificationModal from '../modal/notification/NotificationModal';

export default function GnbUser() {
  const [mount, setMount] = useState(false);
  const [shopId, setShopId] = useState();
  const [notiData, setNotiData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState<number>(0);
  const type = getCookieValue('type');
  const userId = getCookieValue('userId');
  const isProfile = getCookieValue('isProfile');
  const accessToken = getCookieValue('accessToken');

  const notification = false;
  const getUserData = async () => {
    const response = await getUser(userId);
    const getData = response.data.item.shop?.item.id;
    setShopId(getData);
  };
  useEffect(() => {
    if (type === 'employer') {
      getUserData();
    }
    setMount(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getNotifiData = async () => {
    const response = await axios.get(
      `https://bootcamp-api.codeit.kr/api/4-17/the-julge/users/${userId}/alerts`,
      {
        headers: {
          Authorization: `bearer ${accessToken}`,
        },
      },
    );
    const { data } = response;
    setNotiData(data.items);
    setCount(data.count);
  };
  console.log(notiData);
  console.log(count);
  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    getNotifiData();
  }, []);
  return (
    mount && (
      <div className={styles.headerMenu}>
        {type === 'employee' && (
          <>
            <Link href={isProfile ? `/users/${userId}` : `/profile`}>
              내 프로필
            </Link>
            <SignOutButton />
            <button
              type="button"
              onClick={handleOpen}
              className={styles.notification}
            >
              {notification ? (
                <NotiActiveIcon viewBox="0 0 24 24" />
              ) : (
                <NotiIcon viewBox="0 0 24 24" />
              )}
            </button>
          </>
        )}
        {type === 'employer' && (
          <>
            <Link href={shopId ? `/shops/${shopId}` : '/shops'}>내 가게</Link>
            <SignOutButton />
            <button type="button" className={styles.notification}>
              {notification ? (
                <NotiActiveIcon viewBox="0 0 24 24" />
              ) : (
                <NotiIcon viewBox="0 0 24 24" />
              )}
            </button>
          </>
        )}
        {type !== 'employee' && type !== 'employer' && (
          <>
            <Link href="/signin">로그인</Link>
            <Link href="/signup">회원가입</Link>
          </>
        )}
        {showModal && (
          <NotificationModal
            showModal={showModal}
            handleClose={handleClose}
            count={count}
            notiDatas={notiData}
          />
        )}
      </div>
    )
  );
}
