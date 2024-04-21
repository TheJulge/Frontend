import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getCustomNotices } from '@/libs/notice';
import { Autoplay } from 'swiper/modules';
import { CardNoticeType } from '@/types/noticeTypes';
import styles from './CustomizationNotice.module.scss';
import Card from '../commons/card/Card';
import 'swiper/css';

export default function CustomizationNotice() {
  const customAddress = '서울시 종로구';
  const [contents, setContents] = useState([]);
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
  return (
    <article className={styles.noticeTop}>
      <section>
        <h2>맞춤 공고</h2>
        <Swiper
          spaceBetween={14}
          slidesPerView="auto"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {contents.map((items: CardNoticeType) => {
            return (
              <SwiperSlide className={styles.swiperNotice} key={items.item.id}>
                <Card noticeInfo={items} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </article>
  );
}
