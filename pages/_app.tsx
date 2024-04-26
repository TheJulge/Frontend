import Footer from '@/components/commons/footer/Footer';
import Gnb from '@/components/commons/gnb/Gnb';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { CookiesProvider } from 'react-cookie';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hide =
    router.pathname === '/signin' ||
    router.pathname === '/signup' ||
    router.pathname === '/404';
  return (
    <CookiesProvider>
      {!hide && <Gnb />}
      <Component {...pageProps} />
      {!hide && <Footer />}
    </CookiesProvider>
  );
}
