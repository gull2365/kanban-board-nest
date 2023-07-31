import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  /**
   * 아이디
   */
  @Prop({ type: String, required: true })
  username: string;
  /**
   * 비밀번호
   */
  @Prop({ type: String, required: true })
  password: string;
  /**
   * 닉네임
   */
  @Prop({ type: String, required: true })
  nickname: string;
  /**
   * 생성일시
   */
  @Prop({ type: Date, required: true, default: new Date() })
  createAt: Date;
  /**
   * 업데이트 일시
   */
  @Prop({ type: Date, required: true, default: new Date() })
  updateAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
