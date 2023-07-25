import { Injectable } from '@angular/core'
import { Task } from '../models/Task'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly API_URL: string = '/api/'

  constructor(private httpClient:HttpClient){

  }

  // findAllTasks(){
  //   return this.httpClient.get<Task[]>(this.API_URL)
  // }
  // postTask(task: Task){
  //   return this.httpClient.post<Task>(this.API_URL, task)
  // }
}
