import { ssrInstance } from '@/libs';
import { GetServerSidePropsContext } from 'next';
import findCookieValue from './findCookieValue';

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
