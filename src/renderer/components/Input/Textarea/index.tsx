import { TextareaHTMLAttributes, forwardRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const textareaStyles = tv({
  base: 'w-full h-full min-h-[16rem] bg-transparent outline-none tex-sm group-aria-[disabled=true]:cursor-not-allowed placeholder:text-sm placeholder:text-zinc-400 resize-none',
  variants: {
    theme: {
      dark: 'text-zinc-50',
      light: 'text-zinc-900',
    },
  },
});

interface InputTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaStyles> {}

export const Textarea = forwardRef<HTMLTextAreaElement, InputTextareaProps>(
  ({ className, theme, ...props }, ref) => {
    return (
      <textarea
        className={textareaStyles({ theme, className })}
        {...props}
        ref={ref}
      />
    );
  },
);

Textarea.displayName = 'Input.Textarea';
