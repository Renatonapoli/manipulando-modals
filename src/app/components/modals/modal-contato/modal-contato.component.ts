import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modal-contato',
  templateUrl: './modal-contato.component.html',
  styleUrls: ['./modal-contato.component.css'],
})
export class ModalContatoComponent {
  @Input() produtoId!: string;
  @Output() fechar = new EventEmitter();

  opcaoSelecionada!: string;

  fecharModal() {
    this.fechar.emit();
  }

  radioSelecionado(valorSelecionado: string) {
    this.opcaoSelecionada = valorSelecionado;
  }
}
