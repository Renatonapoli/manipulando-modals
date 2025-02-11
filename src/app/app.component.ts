import { Component } from '@angular/core';
import { ProdutosService } from './service/produtos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'listaCards';
  produtoSelecionadoId: string | null = null;
  modalDeSucesso: boolean = false;

  constructor(private serviceProdutos: ProdutosService) {}

  listaDeProdutos() {
    return this.serviceProdutos.produtos;
  }

  clickSaibaMais(id: string) {
    this.produtoSelecionadoId = id;
  }

  fecharModal() {
    this.produtoSelecionadoId = null;
    this.modalDeSucesso = false;
  }

  mostrarModalSucesso() {
    this.modalDeSucesso = true;
  }
}
