import { Inject, Injectable, Param } from '@nestjs/common';
import { Movie } from 'src/db/entity/movie.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class MovieService {
    constructor(
        @Inject("MOVIE_REPOSITORY")
        private movieRepository : Repository<Movie>
    ) {}


    async findAll(): Promise<Movie[]> {
        return this.movieRepository.find();
    }

    async create(movie: Movie): Promise<Movie> {
        return await this.movieRepository.save(movie)
    }

    async findById(id: number): Promise<Movie | null> {
       return await this.movieRepository.findOneBy({id})
    }

    async findByTitle(title: string): Promise<Movie | null> {
        return await this.movieRepository.findOne({
            where: {
                title
            }
        })
    }

    async delete(@Param() id: number): Promise<DeleteResult> {
        return await this.movieRepository.delete(id)
    }
}
