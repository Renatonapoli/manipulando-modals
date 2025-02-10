import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from './components/card/card-produto/card-produto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalContatoComponent } from './components/modals/modal-contato/modal-contato.component';

@NgModule({
  declarations: [AppComponent, CardProdutoComponent, ModalContatoComponent],
  imports: [BrowserModule, CommonModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
