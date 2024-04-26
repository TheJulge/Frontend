import { useEffect } from 'react';
import NoticeDetailsContainer from '@/components/commons/details/NoticeDetailsContainer';
import RecentViewedContainer from '@/components/commons/recent/RecentViewedContainer';
import { SingleNoticeType } from '@/types/noticeTypes';
import { addNoticeToLocalStorage } from '@/utils/watchedListFunctions';
import { GetServerSidePropsContext } from 'next';
import findCookieValue from '@/utils/findCookieValue';
import { ssrInstance } from '@/libs';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const shopId = query.id as string;
  const noticeId = query.noticeId as string;

  const noticeResponse = await ssrInstance.get(
    `/shops/${shopId}/notices/${noticeId}`,
  );
  const noticeData = noticeResponse.data;

  const cookies = context.req.headers.cookie;
  if (!cookies) {
    return {
      props: {
        isProfile: false,
        shopId: shopId,
        noticeId: noticeId,
        noticeData: noticeData,
      },
    };
  } else {
    const isProfile = findCookieValue(cookies, 'isProfile') ? true : false;

    return {
      props: {
        isProfile: isProfile,
        shopId: shopId,
        noticeId: noticeId,
        noticeData: noticeData,
      },
    };
  }
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
