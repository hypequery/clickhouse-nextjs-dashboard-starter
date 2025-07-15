import { DashboardCard } from "./Card";
import { AreaChart, BarChart } from "@tremor/react";

interface ChartsGridProps {
  qpsData: { time: string; QPS: number }[];
  tableData: { name: string; size: number }[];
}

export function ChartsGrid({ qpsData, tableData }: ChartsGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <DashboardCard title="QPS Over Time">
        <AreaChart
          data={qpsData}
          index="time"
          categories={["QPS"]}
          colors={["indigo"]}
          className="h-56"
          showAnimation={true}
          animationDuration={1000}
        />
      </DashboardCard>
      <DashboardCard title="Top 5 Tables by Storage">
        <BarChart
          data={tableData}
          index="name"
          categories={["size"]}
          colors={["cyan"]}
          className="h-56"
          showAnimation={true}
          animationDuration={1000}
        />
      </DashboardCard>
    </div>
  );
} 