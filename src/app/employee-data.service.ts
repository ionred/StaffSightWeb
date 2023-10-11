import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private apiUrl = 'https://localhost:7208/api'; // Replace with your API endpoint

  constructor(private httpClient: HttpClient) { }

  // Example method to get employees
  getEmployees(page: number, pageSize: number, sortBy: string, sortDirection: string): Observable<any> {
    let params = new HttpParams()
      .set('pageNumber', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortBy', sortBy)
      .set('sortDirection', sortDirection);

      return this.httpClient.get<any>(this.apiUrl, { params: params });
    }

  // Add more methods to interact with your API as needed
}
