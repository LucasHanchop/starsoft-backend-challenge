import { Inject, Injectable } from '@nestjs/common'
import { encryptionFc } from 'encryption'
import { User } from 'src/db/entity/user.entity'
import { DeleteResult, Repository } from 'typeorm'


@Injectable()
export class UserService {
    constructor(
        @Inject("USER_REPOSITORY")
        private userRepository: Repository<User>
    ){}

    async findAll(): Promise<User[]>{ 
        return await this.userRepository.find()
    }

    async create(user: User): Promise<User> {
        let { password } = user
        
        const newPassword = await encryptionFc(password)

        user.password = newPassword.toString()

        return await this.userRepository.save(user)
    }

    async findById(id: number): Promise<User | null> {
        return await this.userRepository.findOneBy({id})
    }

    async findOne(username: string): Promise<User | null> {
        return await this.userRepository.findOne({
            where: {
               username
            }
        })
    }

    async delete(id: number): Promise<DeleteResult> {
       return await this.userRepository.delete(id)
    }

}

