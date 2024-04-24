import EmptyTable from '@/components/table/emptytable/EmptyTable';
import { GetServerSideProps } from 'next';
import styles from './ShopDetails.module.scss';
import ShopDetailsCard from '@/components/shopcard/shopDetailCard/ShopDetailsCard';

export const getSeverSideProps: GetServerSideProps = async context => {
  const { params } = context;
  const shopId = params?.id;

  return { props: { id: shopId } };
};

export default function ShopDetails() {
  const isShopData = true;
  return (
    <main className={styles.wrapper}>
      <div className={styles.myShopContainer}>
        <h1>내 가게</h1>
        {isShopData ? (
          <ShopDetailsCard />
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
