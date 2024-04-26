import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { getShop } from '@/libs/shop';
import { getShopNotices } from '@/libs/notice';
import EmptyTable from '@/components/table/emptytable/EmptyTable';
import ShopDetailsCard from '@/components/shopcard/shopDetailCard/ShopDetailsCard';
import styles from './ShopDetails.module.scss';
import { shopData } from './shopDetailsMocks';
import { shopNoticesData } from './shopDetailsMocks';

// export const getServerSideProps: GetServerSideProps<any> = async context => {
//   const { query } = context;
//   const shopId = query.id as string;
//   let shopData = null;
//   let shopNoticesData = null;
//   try {
//     const shopResponse = await getShop({ shopId: shopId });
//     if (shopResponse.status !== 200) {
//       throw new Error('shop data fetch error');
//     }
//     shopData = await shopResponse.data;
//   } catch (error) {
//     shopData = { error: 'fetch error' };
//   }

//   try {
//     const shopNoticesResponse = await getShopNotices({ shopId: shopId });
//     if (shopNoticesResponse.status !== 200) {
//       throw new Error('shop notices data fetch error');
//     }
//     shopNoticesData = shopNoticesResponse.data;
//   } catch (error) {
//     shopNoticesData = { error: 'fetch error' };
//   }

//   return { props: { shopId, shopData, shopNoticesData } };
// };

interface ShopDetailsProps {
  shopId: string;
  //타입정의 하기
  shopData: any;
  shopNoticesData: any;
}

export default function ShopDetails(
  {
    // shopId,
    // shopData,
    // shopNoticesData,
  }: ShopDetailsProps,
) {
  const shopId = '4490151c-5217-4157-b072-9c37b05bed47';

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
          <h2>등록한 공고</h2>
          {shopNoticesData.count === 0 ? (
            <EmptyTable
              text="공고를 등록해 보세요."
              buttonText="공고 등록하기"
            />
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </>
  );
}
