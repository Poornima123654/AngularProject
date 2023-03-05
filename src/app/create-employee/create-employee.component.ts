import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  constructor(private employeeservice:EmployeeService, private router:Router){}
employee : Employee = new Employee();


saveEmployee()
{
  this.employeeservice.createEmployee(this.employee).subscribe(data => {
    console.log(data);
     this.goToEmployeeList()
  },
  error=>console.log(error));
}

goToEmployeeList()
{
   this.router.navigate(['/employees']);
}
onSubmit()
{
  console.log(this.employee);
  this.saveEmployee();
}




}
