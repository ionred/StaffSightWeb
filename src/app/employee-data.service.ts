import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private apiUrl = 'https://localhost:7208/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Example method to get employees
  getEmployees() {
    return this.http.get(`${this.apiUrl}/EmployeePreHire`); // Adjust endpoint as necessary
  }

  // Add more methods to interact with your API as needed
}
