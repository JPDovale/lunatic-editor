import { Slot } from '@radix-ui/react-slot';
import { HTMLAttributes } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const prefixStyles = tv({
  base: 'text-xs font-bold text-zinc-400',
});

interface InputPrefixProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof prefixStyles> {
  asChild?: boolean;
}

export function Prefix({ asChild, className, ...props }: InputPrefixProps) {
  const PrefixElement = asChild ? Slot : 'span';

  return (
    <PrefixElement className={`${prefixStyles({ className })}`} {...props} />
  );
}

Prefix.displayName = 'Input.Prefix';
