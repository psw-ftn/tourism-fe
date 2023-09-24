import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentFormComponent } from './equipment-form/equipment-form.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { MaterialModule } from 'src/app/infrastructure/material/material.module';



@NgModule({
  declarations: [
    EquipmentFormComponent,
    EquipmentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    EquipmentComponent,
    EquipmentFormComponent
  ]
})
export class AdministrationModule { }
