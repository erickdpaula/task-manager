import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { faXmarkCircle, faCheck } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  faClose = faXmarkCircle
  faCheck = faCheck

  @Input() showModal: boolean = false
  @Input() taskInfo: Task
  @Output() closeModalEvent = new EventEmitter<boolean>();

  closeModalRequest(){
    this.closeModalEvent.emit(!this.showModal)
  }

  isCompleted(i:number){
    this.taskInfo.subTasks[i].completed = !this.taskInfo.subTasks[i].completed
  }

}
