import {
  ApplicationResponse,
  ItemsType,
} from '@/components/table/applicationTypes';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { API } from '@/utils/constants/API';
import { authInstance } from '@/libs';
import { ShopBaseType } from '@/types/shopTypes';
import { NoticeBaseType } from '@/types/noticeTypes';

export interface NoticeDetailPageProps {
  items: ItemsType;
  totalCount: number;
  itemCount: number;
  shop: ShopBaseType;
  notice: NoticeBaseType;
}

interface FetchTableParams {
  offset: number;
  limit: number;
  shopId: string;
  noticeId: string;
}

interface FetchData {
  data: ApplicationResponse;
}

interface ErrorData {
  message: string;
}

interface ItemIncludeDataType<T> {
  item: T;
}

export interface ApplicationPageProps {
  items: ItemsType;
  totalCount: number;
  itemCount: number;
}
const fetchNoticeData = async ({
  noticeId,
  shopId,
}: {
  shopId: string;
  noticeId: string;
}): Promise<{ data: ItemIncludeDataType<NoticeBaseType> } | ErrorData> => {
  const url = `${API.shop}/${shopId}${API.notice}/${noticeId}`;
  try {
    return await authInstance.get(url);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        message: error.response?.data?.message ?? error.response?.status,
      };
    }
    return { message: '데이터를 불러오는 데 실패했습니다.' };
  }
};

const fetchShopData = async ({
  shopId,
}: {
  shopId: string;
}): Promise<{ data: ItemIncludeDataType<ShopBaseType> } | ErrorData> => {
  const url = `${API.shop}/${shopId}`;
  try {
    return await authInstance.get(url);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        message: error.response?.data?.message ?? error.response?.status,
      };
    }
    return { message: '데이터를 불러오는 데 실패했습니다.' }; // 오류 메시지
  }
};

const fetchTableData = async ({
  offset,
  limit,
  shopId,
  noticeId,
}: FetchTableParams): Promise<FetchData | ErrorData> => {
  const url = `${API.shop}/${shopId}${API.notice}/${noticeId}${API.application}`;

  try {
    return await authInstance.get(url, {
      params: { offset, limit },
    }); // API 호출 성공
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        message: error.response?.data?.message ?? error.response?.status,
      }; // API 오류 메시지 반환 오류날 경우 API에서 message를 넘겨줌
    }
    return { message: '데이터를 불러오는 데 실패했습니다.' }; // 오류 메시지
  }
};

export const getServerSideProps: GetServerSideProps<
  ApplicationPageProps
> = async context => {
  const { query } = context;
  const shopId = query.id as string;
  const noticeId = query.noticeId as string;

  const page = parseInt(query.page as string, 10) || 1;
  const itemCount = parseInt(query.itemCount as string, 10) || 5;

  const result = await fetchTableData({
    offset: (page - 1) * itemCount,
    limit: itemCount,
    shopId,
    noticeId,
  });
  const shopData = await fetchShopData({ shopId });
  const noticeData = await fetchNoticeData({ shopId, noticeId });

  // const promiseData = await Promise.all([
  //   fetchTableData({
  //     offset: (page - 1) * itemCount,
  //     limit: itemCount,
  //     shopId,
  //     noticeId,
  //   }),
  //   fetchShopData({ shopId }),
  //   fetchNoticeData({ shopId, noticeId }),
  // ]);

  // const [result, shopData, noticeData] = promiseData;
  const shopInfo = 'message' in shopData ? {} : shopData.data.item;
  const noticeInfo = 'message' in noticeData ? {} : noticeData.data.item;

  if ('message' in result) {
    return {
      props: {
        notice: noticeInfo ?? {},
        shop: shopInfo ?? {},
        items: [],
        totalCount: 0,
        itemCount: 0,
        error: result.message ?? null, // 오류 메시지를 props로 전달
      },
    };
  }

  return {
    props: {
      notice: noticeInfo,
      shop: shopInfo,
      items: result.data.items,
      totalCount: result.data.count,
      itemCount,
    },
  };
};
