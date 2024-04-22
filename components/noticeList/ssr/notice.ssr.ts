import { CardNoticeType } from '@/types/noticeTypes';
import axios from 'axios';
import { GetServerSideProps } from 'next';

export interface NoticePageProps {
  items: CardNoticeType[];
  totalCount: number;
  itemCount: number;
}

export const getServerSideProps: GetServerSideProps<
  NoticePageProps
> = async context => {
  const { query } = context;
  const itemCount = parseInt(query.count as string, 10) || 6;

  const queryString = Object.entries(query)
    .map(
      ([key, value]) =>
        `?${key}=${Array.isArray(value) ? value.join(`&${key}=`) : value}`,
    )
    .join('&');
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/notices${queryString}`;
  const response = await axios.get(url, {
    params: {
      offset: (parseInt(query.page as string, 10) - 1) * itemCount, // 계산된 offset 추가
      limit: itemCount,
    },
  });
  const { items, count } = response.data;

  return {
    props: {
      items,
      totalCount: count,
      itemCount,
    },
  };
};
