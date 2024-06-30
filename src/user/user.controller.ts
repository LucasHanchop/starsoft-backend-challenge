import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "src/db/entity/user.entity";
import { DeleteResult } from "typeorm";
import { ApiBearerAuth, ApiBody, ApiParam } from "@nestjs/swagger";
import { AuthGuard } from "src/auth/auth.guard";


@ApiBearerAuth()
@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ){}


    @UseGuards(AuthGuard)
    @Get()
    async findAllUsers(): Promise<User[]> {
        return await this.userService.findAll()
    }

    @UseGuards(AuthGuard)
    @Get('find/:id')
    @ApiParam({name: 'id', type: Number, description: "O ID do usuário que deseja procurar"})
    async findUserByID(id: number): Promise<User| null> {
        return await this.userService.findById(id)
    }
    
    
    @Post('create')
    @ApiBody({type: User, description: "O usuário que deseja criar"})
    async createUser(@Body() user: User): Promise<User> {
        return await this.userService.create(user)
    }

    
    @UseGuards(AuthGuard)
    @Delete('delete/:id')
    @ApiParam({name: 'id', type: Number, description: "O ID do usuário que deseja deletar"})
    async deleteUserById(@Param() id: number): Promise<DeleteResult> {
        return await this.userService.delete(id)
    }
}