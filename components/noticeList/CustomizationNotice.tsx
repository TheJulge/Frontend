import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './CustomizationNotice.module.scss';

export default function CustomizationNotice() {
  return (
    <article className={styles.noticeTop}>
      <section>
        <h2>맞춤 공고</h2>
        <Swiper spaceBetween={50} slidesPerView={3}>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </section>
    </article>
  );
}
