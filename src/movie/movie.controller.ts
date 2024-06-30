import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from 'src/db/entity/movie.entity';
import { ApiBasicAuth, ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiBearerAuth()
@Controller('movie')
export class MovieController {
    constructor(
        private movieService: MovieService
    ){}

    @UseGuards(AuthGuard)
    @Get()  
    async findAllMovies(): Promise<Movie[]> {
        return await this.movieService.findAll()
    }

    @UseGuards(AuthGuard)
    @Get('find/:id')
    @ApiParam({name: 'id', type: Number, description: "O ID do filme que deseja procurar"})
    async findMovieById(id: number): Promise<Movie | null> {
        return await this.movieService.findById(id)
    }
    
    @UseGuards(AuthGuard)
    @Post('create')
    @ApiBody({type: Movie, description: "O filme que deseja criar"})
    async createMovie(@Body() movie: Movie): Promise<Movie> {
        return await this.movieService.create(movie)
    }

    @UseGuards(AuthGuard)
    @Delete('delete/:id')
    @ApiParam({name: 'id', type: Number, description: "O ID do filme que deseja deletar"})
    async deleteMovieById(id: number): Promise<DeleteResult> {
        return await this.movieService.delete(id)
    } 

}
