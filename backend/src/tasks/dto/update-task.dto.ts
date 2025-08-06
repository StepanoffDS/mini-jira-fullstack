import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Priority, TaskStatus } from 'generated/prisma';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'Название задачи',
    example: 'Исправить баг в авторизации',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Описание задачи',
    example: 'Пользователи не могут войти в систему через Google OAuth',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Статус задачи',
    example: 'IN_PROGRESS',
    required: false,
  })
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @ApiProperty({
    description: 'Приоритет задачи',
    example: 'HIGH',
    required: false,
  })
  @IsEnum(Priority)
  priority: Priority;
}
