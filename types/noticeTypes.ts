import { ShopBaseType } from './shopTypes';

//links 의 각 요소의 타입
interface LinkType {
  rel: string;
  description: string;
  method: string;
  href: string;
  body?: Record<string, unknown>;
}

//가게의 특정 공고를 조회할때 "item" 내부에 currentUserApplication 데이터 타입
interface CurrentUserApplicationItemType {
  id: string;
  status: 'pending' | 'accepted' | 'rejected' | 'canceled';
  createdAt: string;
}
//다양한 공고 데이터 타입의 베이스가 되는 타입
export interface NoticeBaseType {
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
}

//특정 공고를 조회할때 "item" 에 들어가는 타입
export interface NoticeItemType extends NoticeBaseType {
  currentUserApplication: {
    item: CurrentUserApplicationItemType;
  };
}

//특정 공고를 상세 조회할때의 데이터 타입
// GET "/shops/{shop_id}/notices/{notice_id}" 요청성공시 반환하는 데이터 타입
export interface SingleNoticeType {
  item: NoticeItemType;
  links: LinkType[];
}

//Card 컴포넌트에 Prop에 해당하는 데이터 타입
//GET "/notices" 로 불러온 데이터의 "items" 배열요소의 낱개 데이터 타입
export interface CardNoticeType {
  item: NoticeBaseType;
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
  address: string[];
  keyword?: string;
  items: {
    item: NoticeBaseType;
    links: LinkType[];
  }[];
  links: LinkType[];
}
