import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BilletManagementComponent } from './billet-management/billet-management.component';
import { TrainingClassesComponent } from './training-classes/training-classes.component';
import { ShiftManagementComponent } from './shift-management/shift-management.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { CommonModule } from '@angular/common';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    BilletManagementComponent,
    TrainingClassesComponent,
    ShiftManagementComponent,
    AuditTrailComponent,
    EmployeeManagementComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
