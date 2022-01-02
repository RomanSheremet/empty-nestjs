import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./Dto/CreateUser.dto";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {}

    createUser(dto: CreateUserDto) {
        const user = this.userRepository.create(dto)
        return user;
    }

    getAllUsers() {
        const users = this.userRepository.findAll();
        return users;
    }
}
