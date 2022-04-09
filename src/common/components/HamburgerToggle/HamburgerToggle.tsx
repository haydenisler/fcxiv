import type { FC, MouseEventHandler } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

export interface HamburgerToggleMenu {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const HamburgerToggle: FC<HamburgerToggleMenu> = ({ isOpen, onClick, className }) => {
  return (
    <button 
      onClick={onClick}
      className={clsx(
        'absolute flex items-center justify-center bg-indigo-600 rounded-full shadow md:hidden w-12 h-12 bottom-6 right-6',
        className
      )}
    >
      {isOpen && (
        <XIcon className="w-6 h-6 text-white fill-current" />
      )}
      {!isOpen && (
        <MenuIcon className="w-6 h-6 text-white fill-current" />
      )}
    </button>
  );
}