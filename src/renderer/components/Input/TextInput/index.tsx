import { InputHTMLAttributes, forwardRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const textInputStyles = tv({
  base: 'w-full h-full bg-transparent outline-none text-sm group-aria-[disabled=true]:cursor-not-allowed placeholder:text-sm placeholder:text-zinc-400',
  variants: {
    theme: {
      dark: 'text-zinc-50',
      light: 'text-zinc-900',
    },
  },
});

interface InputTextInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textInputStyles> {}

export const TextInput = forwardRef<HTMLInputElement, InputTextInputProps>(
  ({ className, theme, ...props }, ref) => {
    return (
      <input
        className={textInputStyles({ theme, className })}
        {...props}
        ref={ref}
      />
    );
  },
);

TextInput.displayName = 'Input.TextInput';
