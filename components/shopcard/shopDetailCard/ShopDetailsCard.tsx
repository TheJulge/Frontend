import Image from 'next/image';
import LocationIcon from '@/public/images/card/locationIcon.svg';
import styles from './ShopDetailsCard.module.scss';
import Link from 'next/link';

const MOCK = {
  item: {
    id: '4490151c-5217-4157-b072-9c37b05bed47',
    name: '진주회관',
    category: '한식',
    address1: '서울시 중구',
    address2: '세종대로11길 26',
    description: '콩국수 맛집 인정따리',
    imageUrl:
      'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/1bdb43c8-ff08-4a46-81b0-7f91efced98c-jinju4.png',
    originalHourlyPay: 10000,
    user: {
      item: {
        id: '4e560aa8-ae5a-40e1-a6e0-2a1e8b866d17',
        email: 'test-employer1@codeit.com',
        type: 'employer',
      },
      href: '/api/0-1/the-julge/users/4e560aa8-ae5a-40e1-a6e0-2a1e8b866d17',
    },
  },
  links: [
    {
      rel: 'self',
      description: '가게 정보',
      method: 'GET',
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47',
    },
    {
      rel: 'update',
      description: '가게 정보 수정',
      method: 'PUT',
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47',
      body: {
        name: 'string',
        category: '한식 | 중식 | 일식 | 양식 | 분식 | 카페 | 편의점 | 기타',
        address1:
          '서울시 종로구 | 서울시 중구 | 서울시 용산구 | 서울시 성동구 | 서울시 광진구 | 서울시 동대문구 | 서울시 중랑구 | 서울시 성북구 | 서울시 강북구 | 서울시 도봉구 | 서울시 노원구 | 서울시 은평구 | 서울시 서대문구 | 서울시 마포구 | 서울시 양천구 | 서울시 강서구 | 서울시 구로구 | 서울시 금천구 | 서울시 영등포구 | 서울시 동작구 | 서울시 관악구 | 서울시 서초구 | 서울시 강남구 | 서울시 송파구 | 서울시 강동구',
        address2: 'string',
        description: 'string',
        imageUrl: 'string',
        originalHourlyPay: 'number',
      },
    },
    {
      rel: 'user',
      description: '가게 주인 정보',
      method: 'GET',
      href: '/api/0-1/the-julge/users/4e560aa8-ae5a-40e1-a6e0-2a1e8b866d17',
    },
    {
      rel: 'notices',
      description: '공고 목록',
      method: 'GET',
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47/notices',
      query: {
        offset: 'undefined | number',
        limit: 'undefined | number',
      },
    },
  ],
};
interface ShopDetailsCardProps {
  id: string;
}
export default function ShopDetailsCard({ id }: ShopDetailsCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.cardImg}>
        <Image src={MOCK.item.imageUrl} alt="shop image" fill />
      </div>
      <div className={styles.contents}>
        <div className={styles.information}>
          <div className={styles.title}>
            <p>식당</p>
            <span>{MOCK.item.name}</span>
          </div>
          <div className={styles.location}>
            <LocationIcon />
            <p>{MOCK.item.address1}</p>
          </div>
          <p className={styles.description}>{MOCK.item.description}</p>
        </div>
        <div className={styles.links}>
          <Link className={styles.editLink} href={`/`}>
            편집하기
          </Link>
          <Link
            className={styles.noticeEnterLink}
            href={`/shops/${id}/notices`}
          >
            공고 등록하기
          </Link>
        </div>
      </div>
    </div>
  );
}
