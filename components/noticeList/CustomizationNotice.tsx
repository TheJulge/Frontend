import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getCustomNotices } from '@/libs/notice';
import { Autoplay } from 'swiper/modules';
import { CardNoticeType } from '@/types/noticeTypes';
import { useRouter } from 'next/router';
import { getCookieValue } from '@/utils/getCookie';
import Link from 'next/link';
import styles from './CustomizationNotice.module.scss';
import Card from '../commons/card/Card';
import 'swiper/css';

export default function CustomizationNotice() {
  const router = useRouter();
  const customAddress = '서울시 종로구';
  const userId = getCookieValue('userId');
  const [contents, setContents] = useState([]);
  const handleLink = () => {
    if (!userId) alert('로그인이 필요한 서비스 입니다.');
  };
  const customData = async () => {
    try {
      const response = await getCustomNotices(customAddress);
      const noticeItem = response.data.items;
      setContents(noticeItem);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    customData();
  }, []);

  if (!contents) return null;
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
            const urlCutOff = items.item.shop.href.indexOf('/shops');
            const result = items.item.shop.href.slice(urlCutOff);
            return (
              <SwiperSlide className={styles.swiperNotice} key={items.item.id}>
                <Link
                  onClick={handleLink}
                  href={
                    userId
                      ? `${result}/notices/${items.item.id}/alba`
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
