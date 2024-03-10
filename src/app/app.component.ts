import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ViewFamilyGroupComponent } from './view-family-group/view-family-group.component';
import { CreateFamilyGroupComponent } from './create-family-group/create-family-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatListModule, MatIconModule, ViewFamilyGroupComponent, RouterLink, CreateFamilyGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'conectandesWeb';
}
