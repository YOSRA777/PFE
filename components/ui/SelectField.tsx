import { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  compact?: boolean;
  options: string[];
};

export function SelectField({ label, compact = false, options, className, ...props }: SelectFieldProps) {
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
      <select
        className={cn(
          'w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition-all',
          'focus:border-orange-vif focus:ring-2 focus:ring-orange-vif/20',
          compact ? 'py-2.5' : 'py-3',
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
