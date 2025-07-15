import { DashboardCard } from "./Card";
import { Badge } from "@/components/ui/badge";
import { Metric } from "@tremor/react";

interface KpiCardProps {
  title: string;
  value: number | string;
  delta: string;
  badge: "up" | "down";
}

export function KpiCard({ title, value, delta, badge }: KpiCardProps) {
  return (
    <DashboardCard title={title}>
      <div className="flex items-center justify-between">
        <Badge variant={badge === "up" ? "default" : "destructive"}>{delta}</Badge>
      </div>
      <Metric className="text-3xl font-bold">{value}</Metric>
    </DashboardCard>
  );
} 