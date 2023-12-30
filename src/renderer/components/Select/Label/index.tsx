import { Label as PrimitiveLabel } from '@radix-ui/react-select';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { tv } from 'tailwind-variants';

const labelStyles = tv({
  base: 'py-1.5 pl-8 pr-2 text-sm font-semibold',
});

export const Label = forwardRef<
  ElementRef<typeof PrimitiveLabel>,
  ComponentPropsWithoutRef<typeof PrimitiveLabel>
>(({ className, ...props }, ref) => (
  <PrimitiveLabel ref={ref} className={labelStyles({ className })} {...props} />
));
