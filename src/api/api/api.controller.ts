import { Controller, Get, Post, Param, Put, Delete, Body } from '@nestjs/common';
import { Libro } from '../../libro';
import e = require('express');

@Controller('api')
export class ApiController {

    /*librosArray : Libro[]=[];

    constructor(){
        this.librosArray = [{id: 1, titulo: 'Los mundos magicos', autor: 'Charlestone A', fecha: new Date()},
    {id: 2, titulo: 'Chamorron el piedras', autor: 'Welcome A', fecha: new Date()},
    {id: 3, titulo: 'Los matados del futbol', autor: 'Junloki A', fecha: new Date()}];

*/

    libro1:Libro = {id: 1, titulo: 'Los mundos magicos', autor: 'Charlestone A', fecha: new Date()};
    libro2:Libro =  {id: 2, titulo: 'Chamorron el piedras', autor: 'Welcome A', fecha: new Date()};
    libro3:Libro = {titulo: 'Pilotes que son de bones', autor:'Niño Mallorquino', fecha: new Date()};

    librosArray:Libro[] = [this.libro1, this.libro2]

    

    @Get()
    getLibros(): Libro[]{
    return this.librosArray;
    }

    @Post()
    subirLibro(): Libro{
        //this.librosArray.push(this.libro3);
        return this.libro3
    }

    @Get(':id')
    getLibroId(@Param() params){
        
       return this.librosArray.find((element) => element.id == params.id);
    }

    @Put(":id")
    modificar(@Param() param, @Body() libro: Libro): Libro{
        let index = this.librosArray.findIndex((e) => e.id == param.id)
        console.log(param.id)
        console.log(libro)
        this.librosArray[index] = libro;
        console.log(this.librosArray[index])
        return libro;
        
    }

    @Delete(':id')
    deleteLibro(@Param() params){
        let index = this.librosArray.findIndex((e) => e.id == params.id)
        this.librosArray.splice(index, 1)
        return this.librosArray;
    }
}

