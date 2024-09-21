import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { ResponseModel } from '../models/response.model';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8080/api/tasks';

  getTasks(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${this.apiUrl}/getAll`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(id: number, task: Task): Observable<ResponseModel> {
    task.id = id;
    return this.http.put<ResponseModel>(`${this.apiUrl}/update`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
