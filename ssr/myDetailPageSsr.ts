import {
  ApplicationResponse,
  ItemsType,
} from '@/components/table/applicationTypes';
import { API } from '@/utils/constants/API';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { authInstance, instance, nextInstance } from '@/libs';
import { UserBaseType } from '@/types/userTypes';

export interface MyDetailPageProps {
  items: ItemsType;
  totalCount: number;
  itemCount: number;
  user: UserBaseType;
}

interface FetchParams {
  offset: number;
  limit: number;
  userId: string;
}

interface FetchData {
  data: ApplicationResponse;
}

interface ErrorData {
  message: string;
}

export interface ApplicationPageProps {
  items: ItemsType;
  totalCount: number;
  itemCount: number;
}

interface ItemIncludeDataType<T> {
  item: T;
}

const fetchUserData = async ({
  userId,
}: {
  userId: string;
}): Promise<{ data: ItemIncludeDataType<UserBaseType> } | ErrorData> => {
  const url = `${API.user}/${userId}`;
  try {
    return await instance.get(url);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        message: error.response?.data?.message ?? error.response?.status,
      };
    }
    return { message: '데이터를 불러오는 데 실패했습니다.' };
  }
};

const fetchTableData = async ({
  offset,
  limit,
  userId,
}: FetchParams): Promise<FetchData | ErrorData> => {
  const noticeListUrl = `${API.user}/${userId}${API.application}`;
  // 토큰 형식 바꿀곳
  // const employeeToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwNjJkM2YyOS0wZDQ1LTQ3MjMtYWY1OS03NGI1YzQxZWM0MjUiLCJpYXQiOjE3MTMzMzI5Njh9.Mrb5prS4ZjQDoZycz4CXLGk069fXXby_H26yrLYwd_I';
  try {
    return await authInstance.get(noticeListUrl, {
      params: { offset, limit },
      // headers: {
      //   Authorization: `Bearer ${employeeToken}`,
      // },
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
  const userId = query.id as string;
  const page = parseInt(query.page as string, 10) || 1;
  const itemCount = parseInt(query.itemCount as string, 10) || 5;
  const result = await fetchTableData({
    offset: (page - 1) * itemCount,
    limit: itemCount,
    userId,
  });
  const userData = await fetchUserData({ userId });
  const userInfo = 'message' in userData ? {} : userData.data.item;

  if ('message' in result) {
    return {
      props: {
        user: userInfo ?? {},
        items: [],
        totalCount: 0,
        itemCount: 0,
        error: result.message ?? null,
      },
    };
  }
  return {
    props: {
      user: userInfo,
      items: result.data.items,
      totalCount: result.data.count,
      itemCount,
    },
  };
};
