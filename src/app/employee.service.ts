import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {

 return this.httpClient.get<Employee[]>(`http://localhost:8080/api/v1/employees`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`http://localhost:8080/api/v1/employees`, employee);
  }

  getEmployeeById(id:number): Observable<Employee> {
    return this.httpClient.get<Employee>(`http://localhost:8080/api/v1/employees/${id}`);
  }

  updateEmployeeById(id:number,employee:Employee): Observable<Object> {
    return this.httpClient.put(`http://localhost:8080/api/v1/employees/${id}`, employee);
  }
  
  deleteEmployeebyId(id:number):Observable<object> {
    return this.httpClient.delete(`http://localhost:8080/api/v1/employees/${id}`);
  }
}
