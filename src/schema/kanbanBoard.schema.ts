import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { User } from './user.schema';

export type UserDocument = HydratedDocument<KanbanBoard>;

@Schema()
export class KanbanBoard {
  /**
   * 제목
   */
  @Prop({ type: String, default: '' })
  title: string;
  /**
   * 내용
   */

  @Prop({ type: String, default: '' })
  content: string;

  /**
   * 상태
   */
  @Prop({
    type: String,
    enum: ['TODO', 'IN_PROGRESS', 'DONE'],
    default: 'TODO',
  })
  status: string;

  /**
   *  활성화 여부
   */
  @Prop({ type: Boolean, default: true })
  isActivate: boolean;

  /**
   * 생성자
   */

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: User.name,
  })
  createBy: Types.ObjectId;

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

export const KanbanBoardSchema = SchemaFactory.createForClass(KanbanBoard);
