import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface HeadingProps {
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({ size = 'lg', children, asChild, className }: HeadingProps) {

  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-black font-sans',
        {
          'text-xxs md:text-xsm': size === 'xsm',
          'text-xsm md:text-sm': size === 'sm',
          'text-sm md:text-md': size === 'md',
          'text-md md:text-lg': size === 'lg',
          'text-lg md:text-xlg': size === 'xlg',
        },
        className
        
      )}
    >
      {children}
    </Comp>
  )
}