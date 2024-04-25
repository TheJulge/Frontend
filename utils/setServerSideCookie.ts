import { ssrInstance } from '@/libs';
import { GetServerSidePropsContext } from 'next';
import findCookieValue from './findCookieValue';

/**
 * getServerSideProps 사용 시 instance의 Authorization header에 쿠키값 넣어주는 함수
 * @param context getServerSideProps의 context 넣기
 */

export function setServerSideCookie(context: GetServerSidePropsContext) {
  const cookies = context.req.headers.cookie;

  if (!cookies) {
    return;
  }

  const accessToken = findCookieValue(cookies, 'accessToken');

  if (accessToken !== '') {
    ssrInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }
}
