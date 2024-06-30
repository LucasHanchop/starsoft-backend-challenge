import { Movie } from "src/db/entity/movie.entity";
import { DataSource } from "typeorm";


export const movieProviders = [
    {
        provide: "MOVIE_REPOSITORY",
        useFactory: (dataSource : DataSource) => dataSource.getRepository(Movie),
        inject: ["DATA_SOURCE"]
    }
]