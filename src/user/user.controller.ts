import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

/**
 * 사용자 Controller
 */

@Controller('/api/user')
export class UserController {
  /**
   * 생성자
   * @param UserService 사용자 Services
   */
  constructor(private readonly UserService: UserService) {}
  /**
   *  사용자 생성
   * @param CreateUserDto 사용자 생성 DTO
   */
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const isDuplicateByUsername = this.UserService.isDuplicateByUsername(
      createUserDto.username,
    );
    if (isDuplicateByUsername) throw new BadRequestException();

    const user = await this.UserService.createUser(createUserDto);
    if (!user) throw new InternalServerErrorException();
    return {
      success: true,
    };
  }
}
