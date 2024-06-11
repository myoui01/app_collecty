import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsPage } from '../forms.page';

@Component({
  selector: 'app-form-etapa-um',
  templateUrl: './form-etapa-um.component.html',
  styleUrls: ['./form-etapa-um.component.scss'],
})
export class FormEtapaUmComponent  implements OnInit {

  public formUm!: FormGroup;

  public etapa: string = 'Dados pessoais';

  constructor(private formPrincipal: FormsPage) {
    this.formUm = this.formPrincipal.getFormEtapaUm();
  }

  ngOnInit(): void {
    ;;
  }
}
