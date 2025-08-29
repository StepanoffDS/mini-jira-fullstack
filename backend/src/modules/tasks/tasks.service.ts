import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { UpdateTaskDto } from './dto';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  public constructor(private readonly prisma: PrismaService) {}

  public async findAll() {
    const tasks = await this.prisma.task.findMany();

    if (!tasks) {
      throw new NotFoundException('Tasks not found');
    }

    return tasks;
  }

  public async findOne(id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  public async create(data: CreateTaskDto) {
    const task = await this.prisma.task.create({ data });

    if (!task) {
      throw new NotFoundException('Task not created');
    }

    return task;
  }

  public async update(id: string, data: UpdateTaskDto) {
    await this.findOne(id);

    const updatedTask = await this.prisma.task.update({
      where: { id },
      data,
    });

    if (!updatedTask) {
      throw new NotFoundException('Task not updated');
    }

    return updatedTask;
  }

  public async delete(id: string) {
    await this.findOne(id);

    const deletedTask = await this.prisma.task.delete({ where: { id } });

    if (!deletedTask) {
      throw new NotFoundException('Task not deleted');
    }

    return deletedTask;
  }
}
