import { registerEnumType } from '@nestjs/graphql';
import { Priority } from 'prisma/generated/prisma';

registerEnumType(Priority, {
  name: 'Priority',
  description: 'The priority level of a task',
});
