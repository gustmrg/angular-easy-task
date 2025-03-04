import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Design user interface',
      summary:
        'Create wireframes and design the user interface for the new app.',
      dueDate: '2024-07-01',
    },
    {
      id: 't5',
      userId: 'u4',
      title: 'Optimize database queries',
      summary: 'Analyze and optimize the performance of database queries.',
      dueDate: '2024-08-15',
    },
    {
      id: 't6',
      userId: 'u5',
      title: 'Implement authentication',
      summary:
        'Set up user authentication and authorization for the application.',
      dueDate: '2024-09-30',
    },
    {
      id: 't7',
      userId: 'u6',
      title: 'Write API documentation',
      summary: 'Document all API endpoints and provide usage examples.',
      dueDate: '2024-10-15',
    },
    {
      id: 't8',
      userId: 'u1',
      title: 'Conduct user testing',
      summary: 'Organize and conduct user testing sessions for feedback.',
      dueDate: '2024-11-01',
    },
    {
      id: 't9',
      userId: 'u2',
      title: 'Deploy to production',
      summary:
        'Prepare and execute the deployment of the application to production.',
      dueDate: '2024-12-01',
    },
    {
      id: 't10',
      userId: 'u4',
      title: 'Monitor application performance',
      summary:
        'Set up monitoring tools to track application performance and errors.',
      dueDate: '2025-01-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: `t${this.tasks.length + 1}`,
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
