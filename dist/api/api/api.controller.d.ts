import { Libro } from '../../libro';
export declare class ApiController {
    libro1: Libro;
    libro2: Libro;
    libro3: Libro;
    librosArray: Libro[];
    getLibros(): Libro[];
    subirLibro(): Libro;
    getLibroId(params: any): Libro;
    modificar(param: any, libro: Libro): Libro;
    deleteLibro(params: any): Libro[];
}
