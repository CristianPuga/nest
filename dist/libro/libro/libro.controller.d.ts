import { LibroService } from './libro.service';
import { Libro } from '../libro.entity';
export declare class LibroController {
    private readonly libroService;
    constructor(libroService: LibroService);
    create(libro: Libro): Promise<Libro>;
    findOne(id: number): Promise<Libro>;
    update(id: number, libro: Libro): Promise<Libro>;
    remove(id: number): Promise<Libro>;
}
