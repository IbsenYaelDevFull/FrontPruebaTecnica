import { Routes } from '@angular/router';
import { TaskListComponent } from '../app/components/task-list/task-list.component';
import { TaskFormComponent } from '../app/components/task-form/task-form.component';

export const routes: Routes = [
  { path: 'listTask', component: TaskListComponent },
  { path: 'addTask', component: TaskFormComponent },
];
