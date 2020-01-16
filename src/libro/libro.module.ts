import { Module } from '@nestjs/common';
import { LibroController } from './libro/libro.controller';
import { LibroService } from './libro/libro.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './libro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Libro])],
  exports: [TypeOrmModule],
  controllers: [LibroController],
  providers: [LibroService]
})
export class LibroModule {}
