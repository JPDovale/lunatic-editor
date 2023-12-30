import * as SelectPrimitive from '@radix-ui/react-select';
import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import { tv } from 'tailwind-variants';

const triggerStyles = tv({
  base: 'flex h-3 w-full items-center justify-between rounded-md bg-transparent p-1 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
});

export const Trigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={triggerStyles({ className })}
    {...props}
  >
    {children}

    <SelectPrimitive.Icon asChild>
      <LuChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
