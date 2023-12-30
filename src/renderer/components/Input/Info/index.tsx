import { Slot } from '@radix-ui/react-slot';
import { HTMLAttributes } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const infoStyles = tv({
  base: 'text-sm mt-4',
  variants: {
    theme: {
      dark: 'text-gray-50/50',
      light: 'text-zinc-900/70 font-bold',
    },
  },
  defaultVariants: {
    theme: 'dark',
  },
});

interface InputInfoProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof infoStyles> {
  asChild?: boolean;
}

export function Info({
  asChild = false,
  theme,
  className,
  ...props
}: InputInfoProps) {
  const InfoElement = asChild ? Slot : 'span';

  return (
    <InfoElement className={infoStyles({ theme, className })} {...props} />
  );
}

Info.displayName = 'Input.Info';
