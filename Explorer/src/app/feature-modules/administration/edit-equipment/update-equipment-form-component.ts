import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdministrationService } from '../administration.service';
import { Equipment } from '../model/equipment.model';

@Component({
  selector: 'xp-edit-equipment',
  templateUrl: './update-equipment-form.component.html',
  styleUrls: ['./update-equipment-form.component.css']
})
export class UpdateEquipmentFormComponent {

  @Output() equimpentUpdated = new EventEmitter<null>();

  constructor(private service: AdministrationService, @Inject(MAT_DIALOG_DATA) public data: Equipment,
  private dialogRef: MatDialogRef<UpdateEquipmentFormComponent>) { 
    this.equipmentForm.patchValue(data);
  }

  equipmentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  updateEquipment(): void {
    const equipment: Equipment = {
      name: this.equipmentForm.value.name || "",
      description: this.equipmentForm.value.description || "",
    };
    equipment.id = this.data.id;
    this.service.updateEquipment(equipment).subscribe({
      next: (_) => { this.equimpentUpdated.emit(); this.dialogRef.close();}
    });
    
  }
}
