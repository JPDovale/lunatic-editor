import { Slot } from '@radix-ui/react-slot';
import { HTMLAttributes } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const inputIconStyles = tv({
  base: 'flex items-center w-3.5 h-3.5 text-gray-50',
});

interface InputIconProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputIconStyles> {
  asChild?: boolean;
}

export function Icon({ asChild = false, className, ...props }: InputIconProps) {
  const IconElement = asChild ? Slot : 'div';

  return <IconElement className={inputIconStyles({ className })} {...props} />;
}

Icon.displayName = 'Input.Icon';
