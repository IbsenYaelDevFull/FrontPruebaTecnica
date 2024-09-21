import { Component } from '@angular/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbar, MatToolbarRow, RouterLink, TaskListComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {}
