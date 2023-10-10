import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service'; // Assuming you have this service

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss']
})
export class EmployeeManagementComponent implements OnInit {

  employees: any[] = []; // This will hold the employee data

  constructor(private employeeService: EmployeeDataService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data: any) => {
      this.employees = data;
    });
  }
}
