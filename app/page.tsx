import { BarChart3, Clock, Zap } from 'lucide-react';
import { AuthPanel } from '@/components/auth/AuthPanel';
import { ChartContainer } from '@/components/kpi/ChartContainer';
import { KpiCard } from '@/components/kpi/KpiCard';
import { FeatureItem } from '@/components/marketing/FeatureItem';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white md:flex">
      <section className="relative hidden w-1/3 overflow-hidden border-r border-slate-100 bg-white p-10 text-slate-900 md:flex md:flex-col md:justify-center lg:p-16">
        <div className="absolute left-0 top-0 h-full w-full">
          <div className="absolute -left-[15%] -top-[15%] h-[60%] w-[80%] rounded-full bg-orange-vif/60 blur-[100px]" />
          <div className="absolute -bottom-[15%] -right-[15%] h-[60%] w-[80%] rounded-full bg-orange-vif/50 blur-[100px]" />
        </div>

        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-vif shadow-orange">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              SocialAI <span className="text-orange-vif">Manager</span>
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight">
            L&apos;IA qui propulse votre présence <span className="italic text-orange-vif">sociale</span>.
          </h1>

          <div className="space-y-6">
            <FeatureItem icon={<Clock className="h-5 w-5 text-orange-vif" />} title="Planification" desc="L'IA suggère les meilleurs moments." />
            <FeatureItem icon={<BarChart3 className="h-5 w-5 text-orange-vif" />} title="KPIs Data" desc="Tableaux de bord temps réel." />
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50/50 p-8 md:w-2/3 lg:p-16 xl:p-20">
        <div className="mx-auto w-full max-w-6xl">
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
    <AuthPanel />
  </div>
</div>
      </section>
    </main>
  );
}
