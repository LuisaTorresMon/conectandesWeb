import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-family-group',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, RouterModule],
  templateUrl: './view-family-group.component.html',
  styleUrl: './view-family-group.component.css'
})
export class ViewFamilyGroupComponent {

}
