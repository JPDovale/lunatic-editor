import { HTMLAttributes } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const inputStyles = tv({
  base: 'group flex items-center gap-3 rounded-sm ease-in-out duration-200 border border-transparent disabled:cursor-not-allowed disabled:opacity-30',
  variants: {
    theme: {
      dark: 'bg-zinc-700 focus-within:border-blue-700',
      light: 'bg-zinc-300 focus-within:border-blue-800',
    },
    size: {
      xxs: 'p-0.5',
      xs: 'p-1',
      sm: 'p-1.5',
      md: 'p-2.5',
      lg: 'p-3.5',
    },
  },

  defaultVariants: {
    size: 'md',
    theme: 'dark',
  },
});

interface InputInputProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputStyles> {}

export function Input({ theme, size, className, ...props }: InputInputProps) {
  return (
    <div className={`${inputStyles({ size, theme, className })} `} {...props} />
  );
}

Input.displayName = 'Input.Input';
