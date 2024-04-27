import { NoticePageProps } from '@/components/noticeList/ssr/notice.ssr';
import { getUser } from '@/libs/user';
import CustomizationNotice from '@/components/noticeList/CustomizationNotice';
import AllNotice from '@/components/noticeList/AllNotice';
import { getCookieValue } from '@/utils/getCookie';
import { useEffect, useState } from 'react';

export { getServerSideProps } from '@/components/noticeList/ssr/notice.ssr';

export default function Home({
  totalCount,
  itemCount,
  items,
}: NoticePageProps) {
  const [userLocation, setUserLocation] = useState('');
  const userId = getCookieValue('userId');
  const getUserData = async () => {
    const response = await getUser(userId);
    const getData = response.data;
    if (getData.item.address) {
      setUserLocation(getData.item.address);
    } else {
      setUserLocation('pay');
    }
  };

  useEffect(() => {
    if (userId) {
      getUserData();
    } else {
      setUserLocation('pay');
    }
  }, []);
  if (!items) return null;
  return (
    <main>
      <CustomizationNotice customType={userLocation} />
      <AllNotice
        noticeData={items}
        totalCount={totalCount}
        itemCount={itemCount}
      />
    </main>
  );
}
