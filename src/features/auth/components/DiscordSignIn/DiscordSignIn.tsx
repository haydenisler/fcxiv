import type { FC } from "react";
import { supabase } from "../../../../config/supabase.config";

const handleDiscordLogin = async () => {
  await supabase.auth.signIn({ provider: 'discord' });
}

export const DiscordSignIn: FC = () => {
  return (
    <button
      onClick={handleDiscordLogin} 
      className="px-4 py-2 ml-auto text-white bg-indigo-600 rounded shadow"
    >
      Sign in with Discord
    </button>
  );
}