import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
})
export class CardProdutoComponent {
  faChevronRight = faChevronRight;

  @Input() titulo = '';
  @Input() subtitulo = '';
  @Output() saibaMais = new EventEmitter();

  botaoSaibaMais(id: string) {
    this.saibaMais.emit(id);
  }
}
