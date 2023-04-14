import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TarefaModel } from 'src/app/models/TarefaModel';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() showModal: boolean = false

  closeModal: boolean = false
  @Output() closeModalEvent = new EventEmitter<boolean>();

  tarefa: TarefaModel

  closeModalRequest(){
    this.closeModalEvent.emit(!this.showModal)
  }

}
