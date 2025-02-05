import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  produtos: any[];

  constructor() {
    this.produtos = [
      {
        id: '1',
        titulo: 'Gestão de RH',
        subtitulo:
          'Automatize e integre tecnologia á gestão do ponto de venda.',
      },
      {
        id: '2',
        titulo: 'Conteúdos',
        subtitulo:
          'Tenha acesso a conteúdo gratuito sobre empreendedorismo e gestão.',
      },
      {
        id: '3',
        titulo: 'Notícias',
        subtitulo:
          'Os temas mais importantes de mercado para alavancar seu negócio.',
      },
      {
        id: '4',
        titulo: 'Benefícios ticket',
        subtitulo: 'Alimentação, Restaurante, Flex e Superflex. Conheça!',
      },
    ];
  }
}
