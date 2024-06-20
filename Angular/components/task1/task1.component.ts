import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css'
})
export class Task1Component {

  img1Path:string = "https://deadline.com/wp-content/uploads/2024/04/GettyImages-1230377831-e1712667868902.jpg?w=681&h=383&crop=1";
  img1Name:string = "Jackie Chan"; 
  img1Text:string = "Jackie Chan";


  img2Path:string = "https://www.addictioncenter.com/cdn-cgi/image/width=300,height=300,fit=cover,format=auto,quality=75/app/uploads/2021/08/bruce_lee_letters.png";
  img2Name:string = "bruece Lee";
  img2Text:string = "Bruce Lee";

  value:boolean = true;
  toggleImg(){
    this.value = !this.value;
  }
}
