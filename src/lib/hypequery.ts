import { createQueryBuilder } from "@hypequery/clickhouse";
import { IntrospectedSchema } from "../../generated-schema";

export const clickhouse = createQueryBuilder<IntrospectedSchema>({
  host: process.env.CLICKHOUSE_HOST!,
  username: process.env.CLICKHOUSE_USER,
  password: process.env.CLICKHOUSE_PASSWORD,
  database: process.env.CLICKHOUSE_DATABASE,
});
