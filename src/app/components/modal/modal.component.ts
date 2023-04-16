import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModel } from 'src/app/models/TaskModel';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() showModal: boolean = false
  @Input() taskInfo: TaskModel
  subTasks: string[]

  @Output() closeModalEvent = new EventEmitter<boolean>();

  closeModalRequest(){
    this.closeModalEvent.emit(!this.showModal)
  }

}
