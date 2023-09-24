import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../administration.service';
import { Equipment } from '../model/equipment.model';
import { PagedResults } from 'src/app/shared/model/paged-results.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateEquipmentFormComponent } from '../edit-equipment/update-equipment-form-component';


@Component({
  selector: 'xp-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: Equipment[] = [];
  

  constructor(private service: AdministrationService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEquipment();
  }
  
  deleteEquipment(id: number): void {
    this.service.deleteEquipment(id).subscribe({
      next: (result: Equipment) => {
        this.getEquipment();
      },
    })
  }

  getEquipment(): void {
    this.service.getEquipment().subscribe({
      next: (result: PagedResults<Equipment>) => {
        this.equipment = result.results;
      },
      error: (_) => {
      }
    })
  }

  onUpdateClicked(equipment: Equipment): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "700px"
    dialogConfig.height = "100px"
    dialogConfig.autoFocus = true;
    dialogConfig.data = equipment 
    const dialog = this.dialog.open(UpdateEquipmentFormComponent, dialogConfig);
    dialog.afterClosed().subscribe(_ => {
      this.getEquipment()
    })
  }
}
