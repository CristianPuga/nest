import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { LibroService } from './libro.service';
import { Libro } from '../libro.entity';

@Controller('libro')
export class LibroController {
    constructor(private readonly libroService: LibroService){

    }
    

    @Post()
    create(@Body() libro: Libro): Promise<Libro> {
        return this.libroService.save(libro);
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Libro> {
        return this.libroService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() libro: Libro): Promise<Libro> {
        let dato = await  this.libroService.findById(id);
        dato.titulo= libro.titulo
        dato.autor = libro.autor
        dato.fecha = libro.fecha
        return this.libroService.save(dato);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<Libro> {return this.libroService.delete(id);
    }
}
