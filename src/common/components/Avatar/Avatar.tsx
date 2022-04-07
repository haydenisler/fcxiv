import type { FC } from 'react';

export interface AvatarProps {
  src?: string;
}

export const Avatar: FC<AvatarProps> = ({ src }) => {
  return <div className="w-8 h-8 bg-gray-100 border border-gray-300 rounded-full" />;
}
