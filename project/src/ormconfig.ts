import { DataSource } from 'typeorm';

require('dotenv').config();

export const AppDataSource = new DataSource({
  name: 'default',
  type: 'mysql',
  replication: {
    master: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    slaves: [
      {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
      },
    ],
  },
  synchronize: false,
  migrationsRun: false,
  logging: [],
  //logging: ["query", "error"],
  migrations: [process.env.BUILD_DIR + '/migration/**/*{.ts,.js}'],
  subscribers: [process.env.BUILD_DIR + '/subscriber/**/*{.ts,.js}'],
});