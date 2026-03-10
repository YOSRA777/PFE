import { TrendingDown, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/cn';

type KpiBadgeProps = {
  trend: number;
};

export function KpiBadge({ trend }: KpiBadgeProps) {
  const isPositive = trend >= 0;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold',
        isPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700',
      )}
    >
      {isPositive ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
      {isPositive ? '+' : ''}
      {trend}%
    </span>
  );
}
