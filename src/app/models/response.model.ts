import { Task } from './task.model';

export class ResponseModel {
  public message!: String;
  public data!: Task[];
  public statusCode!: number;
}
