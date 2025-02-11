import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modal-sucesso',
  templateUrl: './modal-sucesso.component.html',
  styleUrls: ['./modal-sucesso.component.css'],
})
export class ModalSucessoComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';

  @Output() fecharModal = new EventEmitter();

  modal() {
    this.fecharModal.emit();
  }
}
