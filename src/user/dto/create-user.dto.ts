import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: '아이디를 입력해주세요' })
  username: string;

  @IsNotEmpty({ message: '비밀번호를 입력해주세요' })
  password: string;

  @IsNotEmpty({ message: '닉네임을 입력해주세요' })
  nickname: string;
}
