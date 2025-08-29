import { Module } from '@nestjs/common';
import './models/priority.enum';
import './models/task-status.enum';
import { TasksResolver } from './tasks.resolver';
import { TasksService } from './tasks.service';

@Module({
  providers: [TasksResolver, TasksService],
  exports: [TasksService],
})
export class TasksModule {}
