import type { FC, MouseEventHandler } from 'react';
import { MenuIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

export interface HamburgerToggleMenu {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const HamburgerToggle: FC<HamburgerToggleMenu> = ({ onClick, className }) => {
  return (
    <button 
      onClick={onClick}
      className={clsx(
        'absolute flex items-center justify-center border border-gray-300 rounded-full shadow md:hidden w-12 h-12 bottom-6 right-6',
        className
      )}
    >
      <MenuIcon className="w-6 h-6 text-gray-500 fill-current" />
    </button>
  );
}