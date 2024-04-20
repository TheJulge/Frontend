import { CardNoticeType, NoticesType } from '@/types/noticeTypes';
import axios from 'axios';
import { GetServerSideProps } from 'next';

interface FetchParams {
  offset?: number;
  limit?: number;
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: number;
  sort?: string;
}

interface FetchData {
  data: NoticesType;
}

export interface NoticePageProps {
  items: CardNoticeType[];
  totalCount: number;
  itemCount: number;
}

const fetchData = async ({
  // id,notice
  offset,
  limit,
  address,
  keyword,
  startsAtGte,
  hourlyPayGte,
  sort,
}: FetchParams): Promise<FetchData> => {
  const teamId = '4-17';
  const noticeListUrl = `https://bootcamp-api.codeit.kr/api/${teamId}/the-julge/notices`;
  const params: FetchParams = {
    offset,
    limit,
    keyword,
    startsAtGte,
    hourlyPayGte,
    sort,
  };

  // address가 존재하는 경우에만 주소를 추가
  if (address) {
    params.address = address;
  } else if (sort) {
    params.sort = sort;
  }

  return axios(noticeListUrl, {
    method: 'GET',
    params,
  });
};

export const getServerSideProps: GetServerSideProps<
  NoticePageProps
> = async context => {
  const { query } = context;
  // const {id, notice} = query
  const page = parseInt(query.page as string, 10) || 1;
  const itemCount = parseInt(query.count as string, 10) || 6;
  const { data } = await fetchData({
    offset: (page - 1) * itemCount,
    limit: itemCount,
    address: query.address as string,
    sort: query.sort as string,
  });
  return {
    props: {
      items: data.items,
      totalCount: data.count,
      itemCount,
    },
  };
};
