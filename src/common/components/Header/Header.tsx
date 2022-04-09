import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { DiscordSignIn } from '../../../features/auth';
import { Avatar } from '../../components';
import { supabase } from '../../../config/supabase.config';
import { Session } from '@supabase/supabase-js';

export const Header: FC = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
      <h1 className="text-lg font-semibold text-indigo-600">fcxiv</h1>
      {session ? (
        <Avatar />
      ) : (
        <DiscordSignIn />
      )}
    </nav>
  );
};