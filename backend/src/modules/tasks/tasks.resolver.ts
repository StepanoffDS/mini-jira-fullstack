import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { TaskModel } from './models/task.model';
import { TasksService } from './tasks.service';

@Resolver('Tasks')
export class TasksResolver {
  public constructor(private readonly tasksService: TasksService) {}

  @Query(() => [TaskModel], { name: 'findAllTasks' })
  public async findAll() {
    return this.tasksService.findAll();
  }

  @Query(() => TaskModel, { name: 'findOneTask' })
  public async findOne(@Args('id', { type: () => String }) id: string) {
    return this.tasksService.findOne(id);
  }

  @Mutation(() => TaskModel, { name: 'createTask' })
  public async create(@Args('data') data: CreateTaskDto) {
    return this.tasksService.create(data);
  }

  @Mutation(() => TaskModel, { name: 'updateTask' })
  public async update(
    @Args('id', { type: () => String }) id: string,
    @Args('data') data: UpdateTaskDto,
  ) {
    return this.tasksService.update(id, data);
  }

  @Mutation(() => TaskModel, { name: 'deleteTask' })
  public async delete(@Args('id', { type: () => String }) id: string) {
    return this.tasksService.delete(id);
  }
}
