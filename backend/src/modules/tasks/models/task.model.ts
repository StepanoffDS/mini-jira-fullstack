import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Priority, TaskStatus } from 'prisma/generated/prisma';

@ObjectType()
export class TaskModel {
  @Field(() => ID)
  public id: string;

  @Field(() => String)
  public title: string;

  @Field(() => String, { nullable: true })
  public description?: string;

  @Field(() => TaskStatus)
  public status: TaskStatus;

  @Field(() => Priority)
  public priority: Priority;

  @Field(() => Date)
  public createdAt: Date;

  @Field(() => Date)
  public updatedAt: Date;
}
