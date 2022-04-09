import '../common/styles/globals.css';
import type { AppProps } from 'next/app';
import { HamburgerToggle, Header } from '../common/components';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div className="relative min-h-screen">
      <Header />
      <Component {...pageProps} />
      <HamburgerToggle />
    </div>
  );
};

export default MyApp;
