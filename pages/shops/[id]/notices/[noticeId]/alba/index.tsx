import { useEffect } from 'react';
import NoticeDetailsContainer from '@/components/commons/details/NoticeDetailsContainer';
import RecentViewedContainer from '@/components/commons/recent/RecentViewedContainer';
import { SingleNoticeType } from '@/types/noticeTypes';
import { addNoticeToLocalStorage } from '@/utils/watchedListFunctions';
import { GetServerSidePropsContext } from 'next';
import { getShopNotice } from '@/libs/notice';
import findCookieValue from '@/utils/findCookieValue';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const shopId = query.id as string;
  const noticeId = query.noticeId as string;

  const cookies = context.req.headers.cookie;
  if (!cookies) {
    return;
  }
  const isProfile = findCookieValue(cookies, 'isProfile') ? true : false;

  const noticeResponse = await getShopNotice({
    shopId: shopId,
    noticeId: noticeId,
  });
  const noticeData = noticeResponse.data;
  return {
    props: {
      isProfile: isProfile,
      shopId: shopId,
      noticeId: noticeId,
      noticeData: noticeData,
    },
  };
}

interface DetailsProp {
  isProfile: boolean;
  shopId: string;
  noticeId: string;
  noticeData: SingleNoticeType;
}

export default function NoticeDetailsPage({
  isProfile,
  shopId,
  noticeId,
  noticeData,
}: DetailsProp) {
  useEffect(() => {
    addNoticeToLocalStorage(noticeData);
  }, []);
  return (
    <>
      <NoticeDetailsContainer
        isProfile={isProfile}
        shopId={shopId}
        noticeId={noticeId}
        details={noticeData}
      />
      <RecentViewedContainer />
    </>
  );
}
