import { NextPage } from 'next';
import EmployerTable from '@/components/table/EmployerTable';
import EmptyTable from '@/components/table/emptytable/EmptyTable';
import ShopCard from '@/components/shopcard/ShopCard';
import { NoticeDetailPageProps } from '@/ssr/noticeDetailSsr';
import styles from './MyNoticeDetailPage.module.scss';

export { getServerSideProps } from '@/ssr/noticeDetailSsr';

// eslint-disable-next-line react/function-component-definition
const MyNoticeDetailPage: NextPage<NoticeDetailPageProps> = ({
  totalCount,
  itemCount,
  items,
  shop,
  notice,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.profileWrraper}>
          <div className={styles.profile}>
            <p className={styles.category}>{shop.category}</p>
            <h2>{shop.name}</h2>
            <ShopCard
              data={notice}
              url={shop.imageUrl}
              address={shop.address1}
              originalHourlyPay={shop.originalHourlyPay}
            />
            <div className={styles.descriptionBox}>
              <p>공고 설명</p>
              <div>{shop.description}</div>
            </div>
          </div>
        </div>
        <div className={styles.tableWrraper}>
          <div className={styles.table}>
            <h2>신청자 목록</h2>
            {items ? (
              <EmployerTable
                totalCount={totalCount}
                itemCount={itemCount}
                items={items}
              />
            ) : (
              <EmptyTable text="신청자가 없어요." buttonText="공고 등록하기" />
            )}
          </div>
          <EmptyTable text="신청자가 없어요." buttonText="공고 등록하기" />
        </div>
      </div>
    </div>
  );
};

export default MyNoticeDetailPage;
