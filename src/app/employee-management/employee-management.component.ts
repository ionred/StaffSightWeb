import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service'; // Uncommented this line

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss']
})
export class EmployeeManagementComponent implements OnInit {

  employees: any[] = []; // This will hold the employee data
  public totalRecords: number = 0;
  page: number = 1;      // Current page number
  pageSize: number = 10; // Number of records per page
  sortBy: string = 'empID'; // Default sort by empID
  sortDirection: string = 'asc'; // Default sort direction

  constructor(private employeeService: EmployeeDataService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees(this.page, this.pageSize, this.sortBy, this.sortDirection).subscribe((response: any) => {
      this.employees = response.data;
      this.totalRecords = response.totalRecords;
    });
  }
  
  onPageChange(page: number) {
    this.page = page;
    this.loadEmployees();
  }

  onSort(column: string) {
    if (this.sortBy === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = column;
      this.sortDirection = 'asc';
    }
    this.loadEmployees();
  }
}
