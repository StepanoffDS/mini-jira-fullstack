import { Field, InputType } from '@nestjs/graphql';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Priority, TaskStatus } from 'prisma/generated/prisma';

@InputType()
export class CreateTaskDto {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public title: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  public description?: string;

  @Field(() => TaskStatus, { nullable: true })
  @IsOptional()
  @IsEnum(TaskStatus)
  public status?: TaskStatus;

  @Field(() => Priority, { nullable: true })
  @IsOptional()
  @IsEnum(Priority)
  public priority?: Priority;
}
