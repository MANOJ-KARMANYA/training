import { Component } from '@angular/core';

@Component({
  selector: 'app-mypipe',
  templateUrl: './mypipe.component.html',
  styleUrl: './mypipe.component.css'
})
export class MypipeComponent {

  msg:string = "Hello friends, hold my pipe!";

  emp:any = {
    id:101,
    name:"Dhanesh",
    salary:85000
  }

  dateObj = new Date();
}
