// 사장입장 지원자 데이터
interface UserItem {
  id: string;
  email: string;
  type: string;
  name?: string;
  phone?: string;
  address?: string;
  bio?: string;
}

interface UserLink {
  item: UserItem;
  href: string;
}

interface ShopInfo {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

interface ShopLink {
  item: ShopInfo;
  href: string;
}

export interface NoticeItem {
  id: string;
  hourlyPay: string;
  description: string;
  startsAt: string;
  workhour: string;
  closed: boolean;
}

export interface NoticeLink {
  item: NoticeItem;
  href: string;
}

interface Link {
  rel: string;
  description: string;
  method: string;
  href: string;
  body?: Record<string, unknown>;
}

interface ApplicationLink extends Link {
  body: {
    status: 'accepted' | 'rejected';
  };
}

// 유저입장 지원 목록 GET /users/{user_id}/applications
export interface Application {
  id: string;
  status: 'pending' | 'accepted' | 'rejected' | 'canceled';
  createdAt: string;
  user: UserLink;
  shop: ShopLink;
  notice: NoticeLink;
}

export type ItemsType = Array<{
  item: Application;
  links: ApplicationLink[];
}>;

export type ItemType = {
  item: Application;
  links: ApplicationLink[];
};

interface PaginationLinks {
  self: Link;
  prev: Link;
  next: Link;
  create: Link;
  shop: Link;
  notice: Link;
}

export interface ApplicationResponse {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: ItemsType;
  links: PaginationLinks;
}
