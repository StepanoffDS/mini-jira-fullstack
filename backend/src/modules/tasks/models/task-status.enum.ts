import { registerEnumType } from '@nestjs/graphql';
import { TaskStatus } from 'prisma/generated/prisma';

registerEnumType(TaskStatus, {
  name: 'TaskStatus',
  description: 'The status of a task',
});
