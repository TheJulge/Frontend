import EmptyTable from '@/components/table/emptytable/EmptyTable';
import { GetServerSideProps } from 'next';
import ShopDetailsCard from '@/components/shopcard/shopDetailCard/ShopDetailsCard';
import styles from './ShopDetails.module.scss';
import { getShop } from '@/libs/shop';

export const getServerSideProps: GetServerSideProps<any> = async context => {
  const { query } = context;
  const shopId = query.id as string;
  const shopData = getShop({ shopId: shopId });
  return { props: { shopId } };
};

interface ShopDetailsProps {
  id: string;
}

export default function ShopDetails({ id }: ShopDetailsProps) {
  console.log(id);
  const isShopData = true;
  return (
    <main className={styles.wrapper}>
      <div className={styles.myShopContainer}>
        <h1>내 가게</h1>
        {isShopData ? (
          <ShopDetailsCard id={id} />
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
