import { Separator as PrimitiveSeparator } from '@radix-ui/react-select';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { tv } from 'tailwind-variants';

const separatorStyle = tv({
  base: '-mx-1 my-1 h-px bg-muted',
});

export const Separator = forwardRef<
  ElementRef<typeof PrimitiveSeparator>,
  ComponentPropsWithoutRef<typeof PrimitiveSeparator>
>(({ className, ...props }, ref) => (
  <PrimitiveSeparator
    ref={ref}
    className={separatorStyle({ className })}
    {...props}
  />
));
