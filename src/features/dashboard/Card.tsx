import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function DashboardCard({ title, children, className = "" }: DashboardCardProps) {
  return (
    <div className={`flex flex-col gap-2 p-6 rounded-lg bg-background shadow border ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-semibold">{title}</span>
      </div>
      {children}
    </div>
  );
} 