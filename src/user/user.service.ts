import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

/**
 * 사용자 Service
 */
@Injectable()
export class UserService {
  /**
   * 생성자
   * @param userModel 사용자 모델
   */
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  /**
   * 사용자 생성
   * @returns 사용자
   */
  async findOne(username: string) {
    return await this.userModel.findOne({ username }).lean();
  }
  async createUser(CreateUserDto: CreateUserDto) {
    return await this.userModel.create({
      ...CreateUserDto,
    });
  }

  async countUserByUsername(username: string) {
    return await this.userModel.find({ username }).countDocuments();
  }

  async isDuplicateByUsername(username: string) {
    return (await this.countUserByUsername(username)) > 0;
  }
}
