import Gnb from '@/components/commons/gnb/Gnb';
import CustomizationNotice from '@/components/noticeList/CustomizationNotice';
import { CardNoticeType } from '@/types/noticeTypes';
import axios from 'axios';
import AllNotice from '@/components/noticeList/AllNotice';
import { GetServerSidePropsContext } from 'next';

interface NoticeProps {
  noticeData: CardNoticeType[];
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const q = context.query;
  console.log(q);
  let noticeData;
  try {
    const res = await axios.get(
      'https://bootcamp-api.codeit.kr/api/4-17/the-julge/notices',
      {
        params: {
          limit: 6,
        },
      },
    );
    noticeData = res.data.items;
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      noticeData,
    },
  };
}

export default function NoticeList({ noticeData }: NoticeProps) {
  if (!noticeData) return null;
  return (
    <>
      <Gnb />
      <main>
        <CustomizationNotice />
        <AllNotice noticeData={noticeData} />
      </main>
    </>
  );
}
