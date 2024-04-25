import EmptyTable from '@/components/table/emptytable/EmptyTable';
import { GetServerSideProps } from 'next';
import ShopDetailsCard from '@/components/shopcard/shopDetailCard/ShopDetailsCard';
import { getShop } from '@/libs/shop';
import { getShopNotices } from '@/libs/notice';
import styles from './ShopDetails.module.scss';

export const getServerSideProps: GetServerSideProps<any> = async context => {
  const { query } = context;
  const shopId = query.id as string;

  const shopResponse = await getShop({ shopId: shopId });
  const shopNoticesResponse = await getShopNotices({ shopId: shopId });

  const shopData = shopResponse.data;
  const shopNoticesData = shopNoticesResponse.data;
  return { props: { shopId, shopData, shopNoticesData } };
};

interface ShopDetailsProps {
  shopId: string;
  //타입정의 하기
  shopData: any;
  shopNoticesData: any;
}

export default function ShopDetails({
  shopId,
  shopData,
  shopNoticesData,
}: ShopDetailsProps) {
  const isShopData = true;
  return (
    <main className={styles.wrapper}>
      <div className={styles.myShopContainer}>
        <h1>내 가게</h1>
        {shopData ? (
          <ShopDetailsCard shopId={shopId} shopData={shopData} />
        ) : (
          <EmptyTable
            text="내 가게를 소개하고 공고도 등록해 주세요."
            buttonText="가게 등록하기"
          />
        )}
      </div>
    </main>
  );
}
