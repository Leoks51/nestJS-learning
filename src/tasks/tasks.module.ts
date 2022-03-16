import { Module } from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { TasksController } from './tasks.controller';

@Module({
  providers: [TasksController],
  controllers: [TaskService],
})
export class TasksModule {}
