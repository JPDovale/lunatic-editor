import * as SelectPrimitive from '@radix-ui/react-select';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const contentStyles = tv({
  base: 'relative max-h-[22rem] z-50 min-w-[8rem] overflow-hidden border border-purple400 rounded-br-md rounded-bl-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  variants: {
    theme: {
      dark: 'bg-zinc-950 text-zinc-50',
      light: 'bg-zinc-100 text-zinc-900',
    },
    position: {
      popper:
        'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
      'item-aligned': '',
    },
  },

  defaultVariants: {
    position: 'popper',
    theme: 'dark',
  },
});

const viewportStyles = tv({
  base: 'px-4 py-3',

  variants: {
    position: {
      popper:
        'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] flex flex-col gap-1.5',
      'item-aligned': '',
    },
  },
});

type ContentProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Content> &
  VariantProps<typeof contentStyles>;

export const Content = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ContentProps
>(
  (
    { className, children, position = 'popper', theme = 'dark', ...props },
    ref,
  ) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={contentStyles({ className, position, theme })}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport className={viewportStyles({ position })}>
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  ),
);
