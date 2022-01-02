import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreationAttributes {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttributes>{
    @ApiProperty({example: "01", description: "айдишник пользователя"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "roma.sheremet.91@mail.ru", description: "имейл пользователя"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: "dgfFDGgfdg74645$#dfgds", description: "пароль пользователя"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: "false", description: "забанен ли пользователь"})
    @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
    isBanned: boolean;

    @ApiProperty({example: "Оскорблял других людей", description: "причина бана"})
    @Column({type: DataType.STRING})
    banReason: string;
}