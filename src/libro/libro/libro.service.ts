import { Injectable, Put, Body, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Libro } from '../libro.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LibroService {

    constructor(
        @InjectRepository(Libro)
        private readonly libroRepository: Repository<Libro>,
        ) {}

        save(libro: Libro): Promise<Libro> {
            return this.libroRepository.save(libro);
        }

        findById(id: number): Promise<Libro> {
            return this.libroRepository.findOne(id);
        }


        async delete(id: number): Promise<Libro> {
            const promesaObjeto = await this.libroRepository.findOne(id);
            return this.libroRepository.remove(promesaObjeto)
        }

       
}
