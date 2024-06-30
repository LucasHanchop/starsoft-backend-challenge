import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/db/database.module';
import { userProviders } from './user.providers';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    ...userProviders,
    UserService
  ],
  exports: [UserService],
})
export class UserModule {}
