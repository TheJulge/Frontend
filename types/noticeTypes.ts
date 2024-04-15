//공고 기본 타입
export interface NoticeItemBaseType {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
}

//links 의 각 요소의 타입
interface LinkType {
  rel: string;
  description: string;
  method: string;
  href: string;
}
