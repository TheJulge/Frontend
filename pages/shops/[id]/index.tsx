import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { instance } from '@/libs';
import EmptyTable from '@/components/table/emptytable/EmptyTable';
import ShopDetailsCard from '@/components/shopcard/shopDetailCard/ShopDetailsCard';
import Card from '@/components/commons/card/Card';
import { ShopDetailType } from '@/types/shopTypes';
import { NoticesType } from '@/types/noticeTypes';
import styles from './ShopDetails.module.scss';

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context;
  const shopId = query.id as string;

  const shopResponse = await instance.get(`/shops/${shopId}`);
  const shopNoticesResponse = await instance.get(
    `/shops/${shopId}/notices?offset=0&limit=6`,
  );

  const shopData = await shopResponse.data;
  const shopNoticesData = await shopNoticesResponse.data;

  return { props: { shopId, shopData, shopNoticesData } };
};

interface ShopDetailsProps {
  shopId: string;
  shopData: ShopDetailType;
  shopNoticesData: NoticesType;
}

export default function ShopDetails({
  shopId,
  shopData,
  shopNoticesData,
}: ShopDetailsProps) {
  const [noticeList, setNoticeList] = useState(shopNoticesData.items);
  const [page, setPage] = useState(0);
  const router = useRouter();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      console.log(true);
    } else {
      console.log(false);
    }
  }, [inView]);

  return (
    <>
      <main className={styles.wrapper}>
        <div className={styles.myShopContainer}>
          <h1>내 가게</h1>
          {shopData && <ShopDetailsCard shopId={shopId} shopData={shopData} />}
        </div>
      </main>
      <section className={styles.noticeListWrapper}>
        <div className={styles.noticesContainer}>
          {shopNoticesData.count === 0 ? (
            <>
              <h2>등록한 공고</h2>
              <EmptyTable
                text="공고를 등록해 보세요."
                buttonText="공고 등록하기"
                link=""
              />
            </>
          ) : (
            <>
              <h2>내가 등록한 공고</h2>
              <div className={styles.noticeList}>
                {noticeList.map(item => {
                  const notice = item.item;
                  const shop = shopData.item;
                  return (
                    <React.Fragment key={notice.id}>
                      <Card
                        hourlyPay={notice.hourlyPay}
                        startsAt={notice.startsAt}
                        workhour={notice.workhour}
                        closed={notice.closed}
                        shopName={shop.name}
                        address={shop.address1}
                        imageUrl={shop.imageUrl}
                        originalHourlyPay={shop.originalHourlyPay}
                        links={item.links}
                        shopId={shop.id}
                        noticeId={notice.id}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
      <div ref={ref} />
    </>
  );
}
