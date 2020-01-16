import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Libro } from '../libro.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LibroService {

    constructor(
        @InjectRepository(Libro)
        private readonly libroRepository: Repository<Libro>,
        ) {}
}
