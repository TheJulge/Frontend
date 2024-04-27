import { LinkType } from './noticeTypes';
import { UserBaseType } from './userTypes';

// 가게 정보 기본 타입
export interface ShopBaseType {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}
interface ShopDetailBaseType extends ShopBaseType {
  user: {
    item: UserBaseType;
    href: string;
  };
}
export interface ShopDetailType {
  item: ShopDetailBaseType;
  links: LinkType[];
}
