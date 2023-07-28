
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { faTrash, faCheck, faSquarePlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { TaskService } from 'src/app/services/task-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  yellow = 'yellow'

  faTrash = faTrash
  faCheck = faCheck
  faPlus = faSquarePlus
  faInfo = faInfoCircle
  showModal: boolean = false
  taskInfo: Task
  date: Date = new Date()
  currentDate: string = this.date.toLocaleDateString()

  content:string = ''

  emptyMessage: string = 'Digite uma tarefa ...'
  isEmptyInput: boolean = false

  taskList:Task[] = []

  constructor(private taskService: TaskService){ }

  ngOnInit(){
    this.getTasks()
  }

  addTask(){
    if(this.content == ''){
      this.isEmptyInput = true
      setTimeout(() => {
        this.isEmptyInput = false
      }, 1000)
    }else{
      console.log(this.content)
      this.postTask(this.content)
    }

    this.content = ''
  }

  removeTask(i:number){
    this.taskList[i].deleted = !this.taskList[i].deleted
    setTimeout(() => {
      this.taskList.splice(i, 1)
    }, 200)
  }

  isCompleted(i:number){
    this.taskList[i].completed = !this.taskList[i].completed
    this.removeTask(i)
  }

  openModal(task: Task){
    this.showModal = !this.showModal
    this.taskInfo = task
  }

  closeModal($event:any){
    this.showModal = !this.showModal
  }

  getTasks(): void{
    this.taskService.getTasks().subscribe((taskList) => {
      console.log(taskList)
      this.taskList = taskList
    })
  }
  postTask(content: string): void{
    const data = { content: content }

    this.taskService.postTask(data).subscribe(
      (response) => {
        this.taskList.push(response)
        console.log(response)
      }
    )
  }

}
