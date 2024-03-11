import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatIconModule, MatFormField, FormsModule, MatDialogModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit{
  constructor(public dialog: MatDialog) {}
  profile: Array<Profile> = [];

  ngOnInit() {
    this.profile.push(
      new Profile('Carlos Pérez', 'carlos.lopez@example.com', '**********')
    );
  }

  openDialog() {
    this.dialog.open(CreateFamilyGroupDialogComponent);
  }

}

class Profile {
  name:string;
  email: string;
  password: string;

  constructor (name:string, email:string, password:string){
    this.name = name;
    this.email = email;
    this.password = password;
  }

}

@Component({
  selector: 'app-create-family-group-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule, RouterModule],
  templateUrl: './edit-profile-dialog.component.html',
  styleUrl: './edit-profile.component.css'
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
