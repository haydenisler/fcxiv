import '../common/styles/globals.css';
import type { AppProps } from 'next/app';
import { supabase } from '../config/supabase.config';
import { CheckIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { DiscordSignIn } from '../features/auth';

function MyApp({ Component, pageProps }: AppProps) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return(
    <div>
      <nav className="flex items-center p-4 border-b border-gray-300">
        <h1 className="text-gray-500">xiv-fc</h1>
        {session ? (
          <CheckIcon className="w-6 h-6 ml-auto text-green-600 fill-current"/>
        ) : (
          <DiscordSignIn />
        )}
      </nav>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
