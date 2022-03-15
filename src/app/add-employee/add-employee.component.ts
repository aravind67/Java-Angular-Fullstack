import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee:Employee={
    id: 0,
    firstName: '',
    lastName: '',
    emailId: ''
  };
  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.employeeService.createEmployee(this.employee).subscribe((data)=>{
      console.log(data);
      this.NavigateToEmployeeList();
    });
  }

  NavigateToEmployeeList() {
    this.router.navigate(["/employees"]);
  }

}
