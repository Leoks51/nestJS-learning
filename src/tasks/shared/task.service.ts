import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'tarefa 1', completed: false },
    { id: 2, description: 'tarefa 2', completed: false },
    { id: 3, description: 'tarefa 3', completed: true },
    { id: 4, description: 'tarefa 4', completed: false },
    { id: 5, description: 'tarefa 5', completed: false },
  ];
  findIndex: any;

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  create(task: Task) {
    let lastId = 0;
    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }

    task.id = lastId + 1;
    this.tasks.push(task);

    return task;
  }

  update(task: Task) {
    const taskArray = this.getById(task.id);
    if (taskArray) {
      taskArray.description = task.description;
      taskArray.completed = task.completed;
    }
    return taskArray;
  }

  delete(id: number) {
    const index = this.findIndex((value) => value.id == id);
    this.tasks.splice(index, 1);
  }
}
