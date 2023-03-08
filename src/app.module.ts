import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaModule } from './filekita/filekita.module';
import { FileKita } from "./filekita/entities/filekita.entity";
import { DataSource } from "typeorm";
import 'dotenv/config';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      dropSchema: false,
      logging: true,
      entities: [FileKita],
    }),
    FilekitaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, { 
      /* Penambahan Custom Error dari class HttpErrorFilter yang telah dibuat. */
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    }
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
