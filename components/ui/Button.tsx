import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'dark' | 'ghost';
};

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold transition-all',
        variant === 'primary' && 'bg-orange-vif text-white hover:bg-orange-600 shadow-orange',
        variant === 'dark' && 'bg-midnight text-white hover:bg-slate-800',
        variant === 'ghost' && 'bg-transparent text-slate-700 hover:bg-slate-100',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
