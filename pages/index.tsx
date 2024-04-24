import { NoticePageProps } from '@/components/noticeList/ssr/notice.ssr';
import CustomizationNotice from '@/components/noticeList/CustomizationNotice';
import AllNotice from '@/components/noticeList/AllNotice';

export { getServerSideProps } from '@/components/noticeList/ssr/notice.ssr';

export default function Home({
  totalCount,
  itemCount,
  items,
}: NoticePageProps) {
  if (!items) return null;
  return (
    <main>
      <CustomizationNotice />
      <AllNotice
        noticeData={items}
        totalCount={totalCount}
        itemCount={itemCount}
      />
    </main>
  );
}
