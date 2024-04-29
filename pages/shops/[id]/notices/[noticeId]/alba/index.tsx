import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';
import { ssrInstance } from '@/libs';
import NoticeDetailsContainer from '@/components/commons/details/NoticeDetailsContainer';
import RecentViewedContainer from '@/components/commons/recent/RecentViewedContainer';
import { addNoticeToLocalStorage } from '@/utils/watchedListFunctions';
import { SingleNoticeType } from '@/types/noticeTypes';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const shopId = query.id as string;
  const noticeId = query.noticeId as string;

  const noticeResponse = await ssrInstance.get(
    `/shops/${shopId}/notices/${noticeId}`,
  );
  const noticeData = noticeResponse.data;

  return {
    props: {
      shopId,
      noticeId,
      noticeData,
    },
  };
}

interface DetailsProp {
  shopId: string;
  noticeId: string;
  noticeData: SingleNoticeType;
}

export default function NoticeDetailsPage({
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
        shopId={shopId}
        noticeId={noticeId}
        details={noticeData}
      />
      <RecentViewedContainer />
    </>
  );
}
