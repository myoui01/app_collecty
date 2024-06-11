import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsPage } from '../forms.page';

@Component({
  selector: 'app-form-etapa-dois',
  templateUrl: './form-etapa-dois.component.html',
  styleUrls: ['./form-etapa-dois.component.scss'],
})
export class FormEtapaDoisComponent  implements OnInit {

  public formDois!: FormGroup;

  public etapa: string = 'Endereço';

  constructor(private formPrincipal: FormsPage) {
    this.formDois = this.formPrincipal.getFormEtapaDois();
  }

  ngOnInit(): void {
    
  }

}
