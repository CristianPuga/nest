import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()

export class Libro {
@PrimaryGeneratedColumn()
 id: number;
 @Column({ length: 500 })
 titulo: string;
 @Column('text')
 autor: string;
 @Column('text')
 fecha: Date;

constructor(){}

}

