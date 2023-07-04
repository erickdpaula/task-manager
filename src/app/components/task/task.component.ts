
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { faTrash, faCheck, faSquarePlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { TaskService } from 'src/app/services/task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  faTrash = faTrash
  faCheck = faCheck
  faPlus = faSquarePlus
  faInfo = faInfoCircle
  showModal: boolean = false
  taskInfo: Task
  date: Date = new Date()
  currentDate: string = this.date.toLocaleDateString()

  content:string = ''

  taskList:Task[]
  task = {} as Task

  constructor(private taskService: TaskService){}

  ngOnInit() {
    this.getAllTasks()
  }

  getAllTasks(){
    this.taskService.getAllTasks().subscribe((tasks: Task[]) => {
      this.taskList = tasks
    })
  }
  saveTask(task: Task) {
    this.taskService.saveTask(task)
    console.log(task)
  }

  addTask(){
    let newTask = new Task()
    newTask.id = this.taskList.length
    newTask.content = this.content
    newTask.completed = false
    newTask.deleted = false
    newTask.subTasks = []
    newTask.startDate = this.currentDate
    newTask.endDate = ""
    this.saveTask(newTask)
    // this.taskList.push(newTask)

    this.content = ''
  }

  removeTask(i:number){
    this.taskList[i].deleted = !this.taskList[i].deleted
    setTimeout(() => {
      this.taskList.splice(i, 1)
    }, 500)
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

  showMessage(){
    return 'Teste de Titulo'
  }

  cleanForm(form: NgForm) {
    this.getAllTasks();
    form.resetForm();
    this.task = {} as Task;
  }

}
