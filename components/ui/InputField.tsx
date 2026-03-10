import { InputHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: LucideIcon;
  compact?: boolean;
};

export function InputField({ label, icon: Icon, className, compact = false, ...props }: InputFieldProps) {
  return (
    <label className="space-y-1.5">
      <span
        className={cn(
          'ml-1 text-slate-600',
          compact ? 'text-xs font-bold uppercase tracking-wider' : 'text-sm font-medium',
        )}
      >
        {label}
      </span>
      <div className="relative">
        {Icon ? <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /> : null}
        <input
          className={cn(
            'w-full rounded-xl border border-slate-200 bg-white text-sm outline-none transition-all',
            'focus:border-orange-vif focus:ring-2 focus:ring-orange-vif/20',
            Icon ? 'pl-10 pr-4' : 'px-3',
            compact ? 'py-2.5' : 'py-3',
            className,
          )}
          {...props}
        />
      </div>
    </label>
  );
}
