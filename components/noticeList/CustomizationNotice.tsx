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

interface CustomProps {
  customType: string;
}

export default function CustomizationNotice({ customType }: CustomProps) {
  const router = useRouter();
  const customData = customType;
  const userId = getCookieValue('userId');
  const [contents, setContents] = useState([]);
  const handleLink = () => {
    if (!userId) alert('로그인이 필요한 서비스 입니다.');
  };
  const customGetData = async () => {
    try {
      let response;
      if (customData === 'pay' || !customData) {
        response = await getPayNotices(customData);
      } else {
        response = await getCustomNotices(customData);
      }
      const noticeItem = response.data.items;
      setContents(noticeItem);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (customData) {
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
                      ? `/shop/${shopId}/notices/${noticeId}/alba`
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
