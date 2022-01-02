import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: "roma.sheremet.91@mail.ru", description: "имейл пользователя"})
    email: string;
    @ApiProperty({example: "sgsdfFDGSGgfgGFG543", description: "пароль пользователя"})
    password: string;
}