import { DatabaseError } from 'sequelize';
import { UserDto } from './dto';
import { User } from './user.entity';
import { Injectable, Inject } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';

@Injectable()
export class UserService {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) {}

    async create(user: UserDto) {
        try {
            const createdUser = await this.userRepository.create<User>(user)

            return createdUser
        } catch(error) {
            throw new DatabaseError(error)
        }
    }

    async findByRole(role: string, offset: number, limit: number) {
        try {
            const users = await this.userRepository.findAll<User>({
                where: { role },
                offset,
                limit
            })

            return users
        } catch(error) {
            throw new DatabaseError(error)
        }
    }
}
