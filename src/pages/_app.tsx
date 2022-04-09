import '../common/styles/globals.css';
import type { AppProps } from 'next/app';
import { HamburgerToggle, Header, Panel } from '../common/components';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);
  
  return(
    <div className="relative min-h-screen">
      <Header />
      <Component {...pageProps} />
      <Panel isOpen={isPanelOpen} setIsOpen={setIsPanelOpen} />
      <HamburgerToggle 
        isOpen={isPanelOpen}
        onClick={() => {
          setIsPanelOpen(!isPanelOpen);
        }}
        className="z-10"
      />
    </div>
  );
};

export default MyApp;
