import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id:number=0;
employee:Employee={
  id: 0,
  firstName: '',
  lastName: '',
  emailId: ''
}
  constructor(private route:ActivatedRoute, private employeeService:EmployeeService,private router:Router) { 

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.employeeService.getEmployeeById(this.id).subscribe((data)=> {
      this.employee = data;
    }, error=> console.log(error)
    )
  }

  onSubmit(){
  this.employeeService.updateEmployeeById(this.id,this.employee).subscribe(()=>{
    this.router.navigate(["/employees"]);
  });
    
  }
}
