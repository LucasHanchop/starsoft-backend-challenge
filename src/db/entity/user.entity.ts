import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";




@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty({required: false})
    id: number
    
    @Column({length: 200})
    @ApiProperty()
    name: string

    @Column({length: 500})
    @ApiProperty()
    username: string 


    @Column({length: 100})
    @ApiProperty()
    password: string

}