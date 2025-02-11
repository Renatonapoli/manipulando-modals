import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'modal-contato',
  templateUrl: './modal-contato.component.html',
  styleUrls: ['./modal-contato.component.css'],
})
export class ModalContatoComponent {
  @Input() produtoId!: string;
  @Output() fechar = new EventEmitter();
  @Output() abrirModalSucesso = new EventEmitter();
  @ViewChild('modalSucesso') modalSucesso!: ElementRef;

  formulario = this.fs.group({
    telefone: [
      '',
      [Validators.required, Validators.pattern(/^\(\d{2}\)\d{5}-\d{4}$/)],
    ],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fs: FormBuilder) {}

  opcaoSelecionada!: string;

  fecharModal() {
    this.fechar.emit();
  }

  radioSelecionado(valorSelecionado: string) {
    this.opcaoSelecionada = valorSelecionado;
  }

  isValid(campo: string): boolean {
    const control = this.formulario.get(campo);
    return control?.invalid && control.touched ? true : false;
  }

  get isFormularioValido(): boolean {
    const telefoneValido = !!this.formulario.get('telefone')?.valid;
    const emailValido = !!this.formulario.get('email')?.valid;
    return telefoneValido || emailValido;
  }

  ngAfterViewInit() {
    this.modalSucesso;
  }

  solicitaContato() {
    if (this.isFormularioValido) {
      this.fecharModal();
      this.abrirModalSucesso.emit();
    }
  }
}
