import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { MatTableModule } from '@angular/material/table';
import { TaskService } from '../../services/task.service';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule],
  providers: [TaskService],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks: Task[] = [];
  displayedColumns: string[] = ['title', 'description', 'completed', 'actions'];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data.data;
    });
  }

  toggleCompletion(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTask(task.id, task).subscribe();
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }
}
