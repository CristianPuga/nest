import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ApiModule} from './api/api.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { LibroModule } from './libro/libro.module';

@Module({
  imports: [ApiModule, TypeOrmModule.forRoot(), LibroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
