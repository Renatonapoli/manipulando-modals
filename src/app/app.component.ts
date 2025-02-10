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

  constructor(private serviceProdutos: ProdutosService) {}

  listaDeProdutos() {
    return this.serviceProdutos.produtos;
  }

  clickSaibaMais(id: string) {
    this.produtoSelecionadoId = id;
    console.log(this.produtoSelecionadoId);
  }

  fecharModal() {
    this.produtoSelecionadoId = null;
  }
}
