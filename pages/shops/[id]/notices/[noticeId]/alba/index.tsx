import { useEffect } from 'react';
import NoticeDetailsContainer from '@/components/commons/details/NoticeDetailsContainer';
import RecentViewedContainer from '@/components/commons/recent/RecentViewedContainer';
import { SingleNoticeType } from '@/types/noticeTypes';
import { addNoticeToLocalStorage } from '@/utils/watchedListFunctions';
import { GetServerSideProps } from 'next';
import { getShopNotice } from '@/libs/notice';

interface DetailsProp {
  shopId: string;
  noticeId: string;
  noticeData: SingleNoticeType;
}
export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context;
  const shopId = query.id as string;
  const noticeId = query.noticeId as string;

  //추후수정
  const noticeResponse = await getShopNotice({
    shopId: shopId,
    noticeId: noticeId,
  });
  const noticeData = noticeResponse.data;
  return {
    props: {
      shopId: shopId,
      noticeId: noticeId,
      noticeData: noticeData,
    },
  };
};

export default function NoticeDetailsPage({
  shopId,
  noticeId,
  noticeData,
}: DetailsProp) {
  useEffect(() => {
    addNoticeToLocalStorage(noticeData);
    console.log(noticeData);
  }, []);
  return (
    <>
      <NoticeDetailsContainer
        shopId={shopId}
        noticeId={noticeId}
        details={noticeData}
      />
      <RecentViewedContainer />
    </>
  );
}
