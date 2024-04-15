import { ShopBaseType } from './shopTypes';

//links 의 각 요소의 타입
interface LinkType {
  rel: string;
  description: string;
  method: string;
  href: string;
}

//가게의 특정 공고를 조회할때 "item" 내부에 currentUserApplication 데이터 타입
interface CurrentUserApplicationItemType {
  id: string;
  status: 'pending' | 'accepted' | 'rejected' | 'canceled';
  createdAt: string;
}

//특정 공고를 조회할때 "item" 에 들어가는 타입
export interface NoticeItemType {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: {
    item: ShopBaseType;
    href: string;
  };
  currentUserApplication: {
    item: CurrentUserApplicationItemType;
  };
}

//특정 공고를 조회할때의 데이터 타입
// GET "/shops/{shop_id}/notices/{notice_id}" 요청성공시 반환하는 데이터 타입
export interface SingleNoticeType {
  item: NoticeItemType;
  links: LinkType[];
}

//가게의 공고 목록을 조회할때의 데이터타입
//GET "/shops/{shop_id}/notices" 요청 성공시 반환하는 데이터 타입
export interface NoticesType {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  //아직 타입 미완성
}
