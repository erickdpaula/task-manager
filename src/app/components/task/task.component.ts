import { Component } from '@angular/core';
import { TaskModel } from 'src/app/models/TaskModel';
import { faTrash, faCheck, faSquarePlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  faTrash = faTrash
  faCheck = faCheck
  faPlus = faSquarePlus
  faInfo = faInfoCircle
  showModal: boolean = false
  taskInfo: string

  content:string = ''
  taskList:TaskModel[] = [
    {
      id: 0,
      content: "Estudar Angular",
      completed: false,
      deleted: false
    },
    {
      id: 1,
      content: "Criar API Tarefas",
      completed: false,
      deleted: false
    },
    {
      id: 2,
      content: "Implementar API Tarefas",
      completed: false,
      deleted: false
    },
    {
      id: 3,
      content: "Criar banco de dados",
      completed: false,
      deleted: false
    },
    {
      id: 4,
      content: "Adicionar Projeto TaskManager no Portifolio",
      completed: false,
      deleted: false
    },
  ]

  addTask(){
    let newTask = new TaskModel()
    newTask.id = this.taskList.length
    newTask.content = this.content
    newTask.completed = false
    newTask.deleted = false
    this.taskList.push(newTask)

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

  openModal(content: string){
    this.showModal = !this.showModal
    this.taskInfo = content
  }

  closeModal($event:any){
    this.showModal = !this.showModal
  }

  showMessage(){
    return 'Teste de Titulo'
  }

}
