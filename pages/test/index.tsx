import styles from '@/components/table/Table.module.scss';
import { NextPage } from 'next';
import { ApplicationPageProps } from '@/components/table/ssr/employer.ssr';
import EmployeeTable from '@/components/table/EmployeeTable';
import EmployerTable from '@/components/table/EmployerTable';

export { getServerSideProps } from '@/components/table/ssr/employer.ssr';

const Test: NextPage<ApplicationPageProps> = ({
  totalCount,
  itemCount,
  items,
}) => {
  return (
    <div className={styles.container}>
      <h2>신청자 목록</h2>
      <EmployerTable
        totalCount={totalCount}
        itemCount={itemCount}
        items={items}
      />
      <h2>알바신청내역</h2>
      <EmployeeTable
        totalCount={totalCount}
        itemCount={itemCount}
        items={items}
      />
    </div>
  );
};

export default Test;
