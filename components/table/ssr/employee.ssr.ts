import { ApplicationResponse, ItemsType } from '@/types/applicationTypes';
import axios from 'axios';
import { GetServerSideProps } from 'next';

interface FetchParams {
  offset: number;
  limit: number;
}

interface FetchData {
  data: ApplicationResponse;
}

const fetchData = async ({
  offset,
  limit,
}: FetchParams): Promise<FetchData> => {
  const teamId = '4-17';
  const userId = 'a4f2df9f-7d1a-4857-847c-068189f953f5';
  const noticeListUrl = `https://bootcamp-api.codeit.kr/api/${teamId}/the-julge/users/${userId}/applications`;
  return axios(noticeListUrl, {
    method: 'GET',
    params: { offset, limit },
  });
};

export interface ApplicationPageProps {
  items: ItemsType;
  totalCount: number;
  itemCount: number;
}

// eslint-disable-next-line import/prefer-default-export
export const getServerSideProps: GetServerSideProps<
  ApplicationPageProps
> = async context => {
  const { query } = context;
  const page = parseInt(query.page as string, 10) || 1;
  const itemCount = parseInt(query.itemCount as string, 10) || 5;
  const { data } = await fetchData({
    offset: (page - 1) * itemCount,
    limit: itemCount,
  });
  return {
    props: {
      items: data.items,
      totalCount: data.count,
      itemCount,
    },
  };
};
