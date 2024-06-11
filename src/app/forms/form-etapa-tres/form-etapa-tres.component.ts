import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsPage } from '../forms.page';

@Component({
  selector: 'app-form-etapa-tres',
  templateUrl: './form-etapa-tres.component.html',
  styleUrls: ['./form-etapa-tres.component.scss'],
})
export class FormEtapaTresComponent  implements OnInit {

  public formTres!: FormGroup;

  public etapa: string = 'Dados profissionais';

  constructor(private formPrincipal: FormsPage) {
    this.formTres = this.formPrincipal.getFormEtapaTres();
  }

  ngOnInit(): void {
    
  }

}
