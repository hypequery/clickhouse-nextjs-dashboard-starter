import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { DashboardCard } from "./Card";
import { Badge } from "@/components/ui/badge";

interface RecentQuery {
  query: string;
  time: string;
  status: string;
  user: string;
}

interface RecentQueriesTableProps {
  recentQueries: RecentQuery[];
}

export function RecentQueriesTable({ recentQueries }: RecentQueriesTableProps) {
  return (
    <DashboardCard title="Recent Queries">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Query</TableHead>
            <TableHead>Execution Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>User</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentQueries.map((row, i) => (
            <TableRow key={i}>
              <TableCell className="max-w-xs truncate" title={row.query}>{row.query}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>
                <Badge variant={row.status === "Success" ? "default" : "destructive"}>{row.status}</Badge>
              </TableCell>
              <TableCell>{row.user}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DashboardCard>
  );
} 