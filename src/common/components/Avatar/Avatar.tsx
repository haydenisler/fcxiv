import type { FC } from 'react';
import clsx from 'clsx';

export interface AvatarProps {
  src?: string;
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({ src, className }) => {
  return ( 
    <div 
      className={clsx(
        "w-8 h-8 bg-gray-100 border border-gray-300 rounded-full",
        className
      )} 
    />
  );
}
