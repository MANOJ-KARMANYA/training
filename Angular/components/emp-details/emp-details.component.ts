import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.css'
})
export class EmpDetailsComponent {

  emp:any = [
    {id:101, name:"Dhanesh", salary:95000, post:"Developer", address:"Chennai"},
    {id:102, name:"Ravindhiran", salary:85000, post:"Designer", address:"Mumbai"},
    {id:103, name:"Suresh", salary:75000, post:"Tester", address:"Banglore"},
    {id:104, name:"Manoj", salary:65000, post:"Devops", address:"Pune"}
  ]

}
