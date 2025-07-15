# ClickHouse Next.js hypequery Dashboard Starter

This project is an **example dashboard** showing how to get started with [hypequery](https://github.com/hypequery/hypequery) and [Next.js](https://nextjs.org/) for type-safe analytics on ClickHouse.

## Features
- Type-safe queries using hypequery
- Modern UI components with Next.js, shadcn/ui, and Tremor
- Data visualised from ClickHouse
- Example: NYC Taxi Trips dataset

---

## Dataset: NYC Taxi Trips

This dashboard uses the [New York Taxi Data](https://clickhouse.com/docs/getting-started/example-datasets/nyc-taxi) sample from ClickHouse:

- **3+ billion taxi and for-hire vehicle (Uber, Lyft, etc.) trips** originating in New York City since 2009
- Includes pickup/dropoff times, locations, fares, passenger counts, and more
- [Dataset documentation and schema](https://clickhouse.com/docs/getting-started/example-datasets/nyc-taxi)

**Table name:** `trips` (or `nyc_taxi.trips` in some setups)

---

## Getting Started

### 1. Clone and Install
```sh
git clone <your-repo-url>
cd clickhouse-nextjs-dashboard-starter
npm install
```

### 2. Configure ClickHouse Connection
Copy `.env.example` to `.env` and fill in your ClickHouse credentials:
```env
CLICKHOUSE_HOST=http://localhost:8123
CLICKHOUSE_USER=default
CLICKHOUSE_PASSWORD=
CLICKHOUSE_DATABASE=default
```

### 3. Generate TypeScript Types
Use the Hypequery CLI to introspect your ClickHouse schema and generate types:
```sh
npx hypequery-generate-types
```

### 4. Run the App
```sh
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to see the dashboard.

---

## How it Works
- The app uses Hypequery's type-safe query builder to fetch data from the `trips` table.
- Data is visualized using Tremor's AreaChart and shadcn/ui components.
- All queries and API routes are fully type-checked end-to-end.

---

## Learn More
- [hypequery](https://hypequery.com)
- [hypequery GitHub](https://github.com/hypequery/hypequery)
- [ClickHouse NYC Taxi Dataset Docs](https://clickhouse.com/docs/getting-started/example-datasets/nyc-taxi)
- [Next.js Documentation](https://nextjs.org/docs)

---

## License
MIT
