import '../common/styles/globals.css';
import type { AppProps } from 'next/app';
import { supabase } from '../config/supabase.config';
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { DiscordSignIn } from '../features/auth';
import { Avatar } from '../common/components';

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
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
        <h1 className="text-lg font-semibold text-indigo-600">fcxiv</h1>
        {session ? (
          <Avatar />
        ) : (
          <DiscordSignIn />
        )}
      </nav>
      <Component {...pageProps} />

    </div>
  );
};

export default MyApp;
