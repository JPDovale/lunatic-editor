import { Slot } from '@radix-ui/react-slot';
import { HTMLAttributes } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const errorStyles = tv({
  base: 'text-xs font-bold text-red-600',
});

interface InputErrorProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof errorStyles> {
  asChild?: boolean;
}

export function Error({
  asChild = false,
  className,
  children,
  ...props
}: InputErrorProps) {
  if (!children) return null;

  const ErrorElement = asChild ? Slot : 'span';

  return (
    <ErrorElement className={errorStyles({ className })} {...props}>
      {children}
    </ErrorElement>
  );
}

Error.displayName = 'Input.Error';
