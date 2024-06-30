import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { DatabaseModule } from 'src/db/database.module';
import { movieProviders} from './movie.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MovieController],
  providers: [
    ...movieProviders,
    MovieService
  ],
  exports: [MovieService],
})
export class MovieModule {}
