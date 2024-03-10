import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-family-group',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule, CommonModule],
  templateUrl: './create-family-group.component.html',
  styleUrl: './create-family-group.component.css'
})
export class CreateFamilyGroupComponent {
  constructor(public dialog: MatDialog) {}

  miembroArray: Array<MiembroFamilia> = [];

  openDialog() {
    this.dialog.open(CreateFamilyGroupDialogComponent);
  }

  agregarMiembro() {
    this.miembroArray.push(
      new MiembroFamilia('Luisa', 'hija')
    );
  }

  ngOnInit() {
    this.miembroArray.push(
      new MiembroFamilia('', '')
    );
  }
}

@Component({
  selector: 'app-create-family-group-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule, RouterModule],
  templateUrl: './create-family-group-dialog.component.html',
  styleUrl: './create-family-group.component.css'
})
export class CreateFamilyGroupDialogComponent {
}

class MiembroFamilia {
  nombre:string;
  rol: string;

  constructor (nombre:string, rol:string){
    this.nombre = nombre;
    this.rol = rol;
  }

}
