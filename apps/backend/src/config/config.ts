import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    password: process.env.POSTGRES_PASSWORD,
    username: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DATABASE,
    synchronize: process.env.NODE_ENV === 'production' ? false : true,
  } as TypeOrmModuleOptions,
});
