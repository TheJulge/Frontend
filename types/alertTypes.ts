interface ApplicationItem {
  id: string;
  status: 'pending | accepted | rejected';
}

interface Application {
  href: string;
  item: ApplicationItem;
}

interface NoticeItem {
  closed: boolean;
  description: string;
  hourlyPay: number;
  id: string;
  startsAt: string;
  workhour: number;
}

interface Notice {
  href: string;
  item: NoticeItem;
}

interface ShopItem {
  address1: string;
  address2: string;
  category: string;
  description: string;
  id: string;
  imageUrl: string;
  originalHourlyPay: number;
}

interface Shop {
  href: string;
  item: ShopItem;
}

interface AlertItem {
  application: Application;
  createdAt: string;
  id: string;
  notice: Notice;
  read: boolean;
  result: 'accepted' | 'rejected';
  shop: Shop;
}

interface LinkType {
  rel: string;
  description: string;
  method: string;
  href: string;
  body?: Record<string, unknown>;
  query?: Record<string, unknown>;
}

export interface Alert {
  item: AlertItem;
  link: LinkType;
}
