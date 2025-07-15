import { KpiCard } from "./KpiCard";

interface KpiPanel {
  title: string;
  value: number | string;
  delta: string;
  badge: "up" | "down";
}

interface KpiGridProps {
  panels: KpiPanel[];
}

export function KpiGrid({ panels }: KpiGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {panels.map((kpi) => (
        <KpiCard key={kpi.title} {...kpi} />
      ))}
    </div>
  );
} 