import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getCustomNotices, getPayNotices } from '@/libs/notice';
import { Autoplay } from 'swiper/modules';
import { CardNoticeType } from '@/types/noticeTypes';
import { useRouter } from 'next/router';
import { getCookieValue } from '@/utils/getCookie';
import Link from 'next/link';
import styles from './CustomizationNotice.module.scss';
import Card from '../commons/card/Card';
import 'swiper/css';

/**
 * 맞춤 공고 컴포넌트 입니다.
 * @param {string} props.customType 선호 지역의 값 또는 pay를 갖고 있습니다.
 */
interface CustomProps {
  customType: string;
}

export default function CustomizationNotice({ customType }: CustomProps) {
  const router = useRouter();
  const userId = getCookieValue('userId');
  const [contents, setContents] = useState([]);
  const handleLink = () => {
    if (!userId) alert('로그인이 필요한 서비스 입니다.');
  };

  // 맞춤 공고를 기준으로 할 type을 비교해서 데이터를 가져오는 함수입니다.
  // 타입이 pay라면 시급이 높은 순으로 정렬되어 있는 데이터를 받아옵니다.
  // 타입이 선호지역이라면 선호지역으로 정렬되어 있는 데이터를 받아옵니다.
  const customGetData = async () => {
    try {
      let response;
      if (customType === 'pay' || !customType) {
        response = await getPayNotices(customType);
      } else {
        response = await getCustomNotices(customType);
      }
      const noticeItem = response.data.items;
      setContents(noticeItem);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (customType) {
      customGetData();
    }
  }, [customType]);

  if (!contents) return null;
  // 검색 했을 때 렌더링 금지
  if (router.query.keyword) return null;
  return (
    <article className={styles.noticeTop}>
      <section>
        <h2>맞춤 공고</h2>
        <Swiper
          spaceBetween={4}
          slidesPerView="auto"
          breakpoints={{
            768: {
              spaceBetween: 14,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {contents.map((items: CardNoticeType) => {
            const noticeId = items.item.id;
            const shopId = items.item.shop.item.id;
            return (
              <SwiperSlide className={styles.swiperNotice} key={items.item.id}>
                <Link
                  onClick={handleLink}
                  href={
                    userId
                      ? `/shops/${shopId}/notices/${noticeId}/alba`
                      : `/signin`
                  }
                >
                  <Card noticeInfo={items} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </article>
  );
}
