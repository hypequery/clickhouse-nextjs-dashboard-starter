import { clickhouse } from '@/lib/hypequery';

export async function GET() {

  // Example: Fetchtrips
  const results = await clickhouse
    .table('trips')
    .select(['pickup_datetime', 'dropoff_datetime', 'total_amount'])
    .where('total_amount', 'gte', 50)
    .orderBy('pickup_datetime', 'DESC')
    .limit(100)
    .execute();

  return Response.json(results);
} 