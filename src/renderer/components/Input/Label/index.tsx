import { Slot } from '@radix-ui/react-slot';
import { LabelHTMLAttributes } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const labelStyles = tv({
  base: 'text-sm font-bold',
  variants: {
    theme: {
      dark: 'text-zinc-100/50',
      light: 'text-zinc-900/50',
    },
  },
});

interface InputLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelStyles> {
  asChild?: boolean;
}

export function Label({
  asChild = false,
  theme,
  className,
  ...props
}: InputLabelProps) {
  const LabelElement = asChild ? Slot : 'label';

  return (
    <LabelElement className={labelStyles({ theme, className })} {...props} />
  );
}

Label.displayName = 'Input.Label';
