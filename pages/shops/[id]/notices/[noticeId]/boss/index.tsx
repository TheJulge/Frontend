import { NextPage } from 'next';
import EmployerTable from '@/components/table/EmployerTable';
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
    <main>
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
                <div className={styles.emptyBox}>
                  <p>아직 신청자가 없어요.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyNoticeDetailPage;
