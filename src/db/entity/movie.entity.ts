import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";





@Entity()
export class Movie {

    @PrimaryGeneratedColumn()
    @ApiProperty({required: false})
    id: number

    @Column({length: 200})
    @ApiProperty()
    title: string

    @Column()
    @ApiProperty()
    year: number

    @Column({length: 200})
    @ApiProperty()
    author: string

    @Column({length: 500})
    @ApiProperty()
    genres: string
}