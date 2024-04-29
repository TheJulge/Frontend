import { getCookieValue } from '@/utils/getCookie';
import { useEffect, useState } from 'react';
import { getUser } from '@/libs/user';
import { getAlert } from '@/libs/alert';
import Link from 'next/link';
import NotiIcon from '@/public/images/gnb/notification.svg';
import NotiActiveIcon from '@/public/images/gnb/notification-active.svg';
import styles from './GnbUser.module.scss';
import SignOutButton from './SignOutButton';
import NotificationModal from '../modal/notification/NotificationModal';

export default function GnbUser() {
  const [mount, setMount] = useState(false);
  const [shopId, setShopId] = useState();
  const [notiData, setNotiData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState<number>(0);
  const type = getCookieValue('type');
  const userId = getCookieValue('userId');
  const isProfile = getCookieValue('isProfile');
  const accessToken = getCookieValue('accessToken');

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
    try {
      const response = await getAlert(userId, accessToken);
      const { data } = response;
      setNotiData(data.items);
      const unreadItemCount = data.items.filter(
        (itemData: any) => !itemData.item.read,
      ).length;
      setCount(unreadItemCount);
    } catch (err) {
      console.log(err);
    }
  };
  const handleOpen = () => {
    setShowModal(!showModal);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    if (userId) {
      getNotifiData();
    }
  }, [showModal]);
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
              {count > 0 ? (
                <NotiActiveIcon viewBox="0 0 24 24" />
              ) : (
                <NotiIcon viewBox="0 0 24 24" />
              )}
            </button>
            {showModal && (
              <NotificationModal
                handleClose={handleClose}
                count={count}
                notiDatas={notiData}
              />
            )}
          </>
        )}
        {type === 'employer' && (
          <>
            <Link href={shopId ? `/shops/${shopId}` : '/shops'}>내 가게</Link>
            <SignOutButton />
          </>
        )}
        {type !== 'employee' && type !== 'employer' && (
          <>
            <Link href="/signin">로그인</Link>
            <Link href="/signup">회원가입</Link>
          </>
        )}
      </div>
    )
  );
}
