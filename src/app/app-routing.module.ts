import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { BilletManagementComponent } from './billet-management/billet-management.component';
import { TrainingClassesComponent } from './training-classes/training-classes.component';
import { ShiftManagementComponent } from './shift-management/shift-management.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomepageComponent },
  { path: 'employee-management', component: EmployeeManagementComponent },
  { path: 'billet-management', component: BilletManagementComponent },
  { path: 'training-classes', component: TrainingClassesComponent },
  { path: 'shift-management', component: ShiftManagementComponent },
  { path: 'audit-trail', component: AuditTrailComponent },
  // Add other routes as you create more components
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
