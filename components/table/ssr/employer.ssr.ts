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

export interface ApplicationPageProps {
  items: ItemsType;
  totalCount: number;
  itemCount: number;
}

const fetchData = async ({
  // id,notice
  offset,
  limit,
}: FetchParams): Promise<FetchData> => {
  const teamId = '4-17';
  const shopId = '0ecbcfcb-1c78-4f2b-93cd-ff6267a2099a';
  const noticeId = '06157300-6580-4d73-b1be-69df0bcda2f4';
  const noticeListUrl = `https://bootcamp-api.codeit.kr/api/${teamId}/the-julge/shops/${shopId}/notices/${noticeId}/applications`;
  return axios(noticeListUrl, {
    method: 'GET',
    params: { offset, limit },
  });
};

export const getServerSideProps: GetServerSideProps<
  ApplicationPageProps
> = async context => {
  const { query } = context;
  // const {id, notice} = query
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
