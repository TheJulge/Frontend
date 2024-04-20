import Gnb from '@/components/commons/gnb/Gnb';
import Footer from '@/components/commons/footer/Footer';
import { NoticePageProps } from '@/components/noticeList/ssr/notice.ssr';
import CustomizationNotice from '@/components/noticeList/CustomizationNotice';
import AllNotice from '@/components/noticeList/AllNotice';

export { getServerSideProps } from '@/components/noticeList/ssr/notice.ssr';

export default function NoticeList({
  totalCount,
  itemCount,
  items,
}: NoticePageProps) {
  if (!items) return null;
  return (
    <>
      <Gnb />
      <main>
        <CustomizationNotice />
        <AllNotice
          noticeData={items}
          totalCount={totalCount}
          itemCount={itemCount}
        />
      </main>
      <Footer />
    </>
  );
}
