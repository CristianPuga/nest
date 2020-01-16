import { Repository } from 'typeorm';
import { Libro } from '../libro.entity';
export declare class LibroService {
    private readonly libroRepository;
    constructor(libroRepository: Repository<Libro>);
}
