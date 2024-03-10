import { Routes } from '@angular/router';
import { ViewFamilyGroupComponent } from './view-family-group/view-family-group.component';
import { CreateFamilyGroupComponent } from './create-family-group/create-family-group.component';

export const routes: Routes = [
  { path: 'view-family-group', title: 'View Family Group', component: ViewFamilyGroupComponent },
  { path: 'create-family-group', title: 'Create Family Group', component: CreateFamilyGroupComponent }
];
