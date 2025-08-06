import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto) {
    const newTask = await this.prisma.task.create({
      data: createTaskDto,
    });

    if (!newTask) {
      throw new Error('Failed to create task');
    }

    console.log('newTask', newTask);

    return newTask;
  }

  async findAll() {
    const tasks = await this.prisma.task.findMany();

    if (!tasks) {
      throw new Error('Failed to find tasks');
    }

    console.log('tasks', tasks);

    return tasks;
  }

  async findOne(id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new Error('Task not found');
    }

    console.log('task', task);

    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const updatedTask = await this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });

    if (!updatedTask) {
      throw new Error('Failed to update task');
    }

    console.log('updatedTask', updatedTask);

    return updatedTask;
  }

  async remove(id: string) {
    const removedTask = await this.prisma.task.delete({
      where: { id },
    });

    if (!removedTask) {
      throw new Error('Failed to remove task');
    }

    console.log('removedTask', removedTask);

    return removedTask;
  }
}
