import { ShopBaseType } from './shopTypes';

//유저 기본 타입
export interface UserBaseType {
  id: string;
  email: string;
  type: 'employer' | 'employee';
  name?: string;
  phone?: string;
  address?: string;
  bio?: string;
}

//유저 정보 타입(아래 인터페이스) 의 item 속성에 들어갈 타입
export interface UserInfoItemType extends UserBaseType {
  shop: {
    item: ShopBaseType;
  } | null;
}
