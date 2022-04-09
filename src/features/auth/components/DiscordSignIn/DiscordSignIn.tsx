import type { FC } from 'react';
import { supabase } from '../../../../config/supabase.config';
import DiscordLogo from '../../../../common/svg/discord-logo.svg';
import clsx from 'clsx';

const handleDiscordLogin = async () => {
  await supabase.auth.signIn({ provider: 'discord' });
};

export interface DiscordSignInProps {
  className?: string;
}

export const DiscordSignIn: FC<DiscordSignInProps> = ({ className }) => {
  return (
    <button
      onClick={handleDiscordLogin} 
      className={clsx(
        "flex items-center px-4 py-2 ml-auto space-x-2 bg-indigo-600 rounded shadow",
        className
      )}
    >
      <DiscordLogo className="w-[1.25rem] h-[1.25rem] text-white fill-current stroke-current" />
      <span className="text-sm font-medium text-white">Sign In</span>
    </button>
  );
};