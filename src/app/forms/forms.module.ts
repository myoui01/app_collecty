import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsPageRoutingModule } from './forms-routing.module';

import { FormsPage } from './forms.page';
import { FormEtapaUmComponent } from './form-etapa-um/form-etapa-um.component';
import { FormEtapaDoisComponent } from './form-etapa-dois/form-etapa-dois.component';
import { FormEtapaTresComponent } from './form-etapa-tres/form-etapa-tres.component';
import { FormEtapaFinalComponent } from './form-etapa-final/form-etapa-final.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormsPageRoutingModule
  ],
  declarations: [
    FormsPage,
    FormEtapaUmComponent,
    FormEtapaDoisComponent,
    FormEtapaTresComponent,
    FormEtapaFinalComponent
  ]
})
export class FormsPageModule {}
