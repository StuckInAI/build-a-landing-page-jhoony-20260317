import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Subscriber } from '@/entities/Subscriber';
import path from 'path';

let dataSource: DataSource | null = null;

export async function getDataSource(): Promise<DataSource> {
  if (dataSource && dataSource.isInitialized) {
    return dataSource;
  }

  const dbPath = process.env.DATABASE_PATH
    ? path.resolve(process.env.DATABASE_PATH)
    : path.resolve('./database.sqlite');

  dataSource = new DataSource({
    type: 'better-sqlite3',
    database: dbPath,
    entities: [Subscriber],
    synchronize: true,
    logging: false,
  });

  await dataSource.initialize();
  return dataSource;
}
