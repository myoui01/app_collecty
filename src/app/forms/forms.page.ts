import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Validacoes } from '../utils/validacoes'; 

@Component({
  selector: 'app-forms',
  templateUrl: 'forms.page.html',
  styleUrls: ['forms.page.scss'],
})
export class FormsPage {
  public multiForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.multiForm = this.formBuilder.group({
      etapaUm: this.formBuilder.group({
        nome: ['', Validators.compose([
          Validators.required, Validators.minLength(3), Validators.maxLength(100)
        ])],
        sobrenome: ['', Validators.compose([
          Validators.required, Validators.minLength(3), Validators.maxLength(30)
        ])],
        cpf: ['', Validators.compose([
          Validators.required, Validators.minLength(11),
          Validators.maxLength(11), Validacoes.validaCpf
        ])],
        genero: ['',  Validators.required],
        dataNascimento: ['', Validators.compose([
          Validators.required
        ])],
        email: ['', Validators.compose([
          Validators.required, Validators.email
        ])],
        senha: ['', Validators.compose([
          Validators.required, Validators.minLength(6),
          Validators.maxLength(12),
          Validacoes.senhasCombinam('senhaConfirm', true)
        ])],
        senhaConfirm: ['', Validators.compose([
          Validators.required, Validators.minLength(6),
          Validators.maxLength(12),
          Validacoes.senhasCombinam('senha')
        ])],
      }),
      etapaDois: this.formBuilder.group({
        rua: ['', Validators.compose([
          Validators.required, Validators.minLength(3), Validators.maxLength(250)
        ])],
        numero: ['0',  Validators.compose([
          Validators.required, Validators.min(1)
        ])],
        complemento: ['', Validators.compose([
          Validators.required, Validators.minLength(3), Validators.maxLength(250)
        ])],
        bairro: ['', Validators.compose([
          Validators.required, Validators.minLength(3), Validators.maxLength(250)
        ])],
        cep: ['', Validators.compose([
          Validators.required, Validators.minLength(8), Validators.maxLength(8),
          Validacoes.cepValidator
        ])],
        cidade: ['', Validators.compose([
          Validators.required, Validators.minLength(3), Validators.maxLength(250)
        ])],
        uf: ['', Validators.compose([
          Validators.required, Validators.minLength(2), Validators.maxLength(2)
        ])],
      }),
      etapaTres: this.formBuilder.group({
        curso: ['', Validators.compose([
          Validators.required, Validators.minLength(3), Validators.maxLength(250)
        ])],
        nivel: ['', Validators.required],
        profissao: ['', Validators.compose([
          Validators.required, Validators.minLength(3), Validators.maxLength(250)
        ])],
        tempoExperiencia: ['', Validators.compose([
          Validators.required, Validators.minLength(3)
        ])],
      })
    });
  }

  public getFormEtapaUm(): FormGroup {
    return this.multiForm.get('etapaUm') as FormGroup;
  }

  public getFormEtapaDois(): FormGroup {
    return this.multiForm.get('etapaDois') as FormGroup;
  }

  public getFormEtapaTres(): FormGroup {
    return this.multiForm.get('etapaTres') as FormGroup;
  }
}
