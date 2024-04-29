import EmptyTable from '@/components/table/emptytable/EmptyTable';
import { GetServerSidePropsContext } from 'next';
import findCookieValue from '@/utils/findCookieValue';
import styles from './ProfileEmptypage.module.scss';

interface EmptypageType {
  title: string;
  link: string;
  buttonText: string;
  text: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const cookies = req.headers.cookie;
  let type = null;
  if (cookies) {
    type = findCookieValue(cookies, 'type');
  }
  let title = '';
  let link = '';
  let buttonText = '';
  let text = '';

  if (type === 'employee') {
    title = '내 프로필';
    link = '/profile';
    buttonText = '내 프로필 등록하기';
    text = '내 프로필을 등록하고 원하는 가게에 지원해 보세요.';
  } else if (type === 'employer') {
    title = '내 가게';
    link = '/shops';
    buttonText = '가게 등록하기';
    text = '내 가게를 소개하고 공고도 등록해 보세요.';
  }
  return {
    props: { title, link, buttonText, text }, // 페이지 컴포넌트로 props 전달
  };
}

function ProfileEmptypage({ title, link, buttonText, text }: EmptypageType) {
  return (
    <main>
      <div>
        <div className={styles.container}>
          <div className={styles.Box}>
            <h2>{title}</h2>
            <EmptyTable link={link} buttonText={buttonText} text={text} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfileEmptypage;
