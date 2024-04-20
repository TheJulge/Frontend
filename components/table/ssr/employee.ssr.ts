import {
  ApplicationResponse,
  ItemsType,
} from '@/components/table/applicationTypes';
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
  const userId = '88879132-0eb8-4c79-a43e-b18b06a06654';
  const noticeListUrl = `https://bootcamp-api.codeit.kr/api/${teamId}/the-julge/users/${userId}/applications`;
  return axios(noticeListUrl, {
    method: 'GET',
    params: { offset, limit },
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4ODg3OTEzMi0wZWI4LTRjNzktYTQzZS1iMThiMDZhMDY2NTQiLCJpYXQiOjE3MTMzMzMwMjl9.N8OiyYmXVG81vwCiNhZHoHbJ8k2sTAh6J7toJhcwOGI',
    },
  });
};

export interface ApplicationPageProps {
  items: ItemsType;
  totalCount: number;
  itemCount: number;
}

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
