import { DatabaseError } from 'sequelize';
import { UserDto } from './dto';
import { User } from './user.model';
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

    async findByRole(role: string) {
        try {
            const users = await this.userRepository.findAll({
                where: { role }
            })

            return users
        } catch(error) {
            throw new DatabaseError(error)
        }
    }
}
