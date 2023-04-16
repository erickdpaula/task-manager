import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModel } from 'src/app/models/TaskModel';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  task: TaskModel

  @Input() showModal: boolean = false
  @Input() taskModal: string

  @Output() closeModalEvent = new EventEmitter<boolean>();

  closeModalRequest(){
    this.closeModalEvent.emit(!this.showModal)
  }

}
