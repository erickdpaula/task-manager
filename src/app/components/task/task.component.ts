import { Component } from '@angular/core';
import { TarefaModel } from 'src/app/models/TarefaModel';
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

  content:string = ''
  tarefas:TarefaModel[] = [
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

  adicionarTarefa(){
    let novaTarefa = new TarefaModel()
    novaTarefa.id = this.tarefas.length
    novaTarefa.content = this.content
    novaTarefa.completed = false
    novaTarefa.deleted = false
    this.tarefas.push(novaTarefa)

    this.content = ''
  }

  removerTarefa(i:number){
    this.tarefas[i].deleted = !this.tarefas[i].deleted
    setTimeout(() => {
      this.tarefas.splice(i, 1)
    }, 900)
  }


  isCompleted(i:number){
    this.tarefas[i].completed = !this.tarefas[i].completed
  }

  openModal(){
    this.showModal = !this.showModal
  }

  closeModal($event:any){
    this.showModal = !this.showModal
  }

  showMessage(){
    return 'Teste de Titulo'
  }

}
