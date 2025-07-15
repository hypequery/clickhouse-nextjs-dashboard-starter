'use client'

import { AreaChart, type CustomTooltipProps } from "@tremor/react";
import useSWR from "swr";

// Type for the API response
export type Trip = {
  pickup_datetime: string;
  dropoff_datetime: string;
  total_amount: number;
};

const fetcher = (url: string) => fetch(url).then(res => res.json() as Promise<Trip[]>);

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleString(undefined, {
    year: '2-digit', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit',
  });
}

export default function Dashboard() {
  const { data, error } = useSWR<Trip[]>("/api/trips", fetcher);

  if (error) return <div className="p-8">Error loading data</div>;
  if (!data) return <div className="p-8">Loading...</div>;

  const chartData = data.map((trip) => ({
    time: formatDate(trip.pickup_datetime),
    amount: trip.total_amount,
  }));

  return (
    <div className="container mx-auto py-8">
      <AreaChart
        data={chartData}
        index="time"
        categories={["amount"]}
        colors={["indigo"]}
        className="h-72"
        showAnimation={true}
        animationDuration={1000}
        yAxisWidth={60}
        customTooltip={(props: CustomTooltipProps) => {
          const { payload } = props;
          if (!payload || payload.length === 0 || !payload[0].payload) return null;
          const { time, amount } = payload[0].payload
          return (
            <div style={{ background: 'white', color: '#222', fontSize: 12, borderRadius: 6, boxShadow: '0 2px 8px #0001', padding: 12 }}>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>{time}</div>
              <div>Amount: <b>${amount.toFixed(2)}</b></div>
            </div>
          );
        }}
      />
    </div>
  );
}
