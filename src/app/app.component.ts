import { Component } from '@angular/core';
import { ProdutosService } from './service/produtos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'listaCards';

  constructor(private serviceProdutos: ProdutosService) {}

  listaDeProdutos() {
    return this.serviceProdutos.produtos;
  }

  clickSaibaMais(id: string) {
    this.serviceProdutos.produtos.forEach((produto) => {
      produto.id === id;
      console.log(id);
    });
  }
}
