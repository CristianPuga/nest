import { Repository } from 'typeorm';
import { Libro } from '../libro.entity';
export declare class LibroService {
    private readonly libroRepository;
    constructor(libroRepository: Repository<Libro>);
    save(libro: Libro): Promise<Libro>;
    findById(id: number): Promise<Libro>;
    delete(id: number): Promise<Libro>;
}
