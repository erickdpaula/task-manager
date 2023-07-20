import { Injectable } from '@angular/core'
import { Task } from '../models/Task'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly API_URL: string = '/assets/data/tasks.json'

  constructor(private httpClient:HttpClient){

  }

  taskList(){

    return this.httpClient.get<Task[]>(this.API_URL)

  }
}
