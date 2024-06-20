import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  myName:string = "Dhanesh";

  imgPath:string = "https://i.ytimg.com/vi/95-7R9Uxq-4/mqdefault.jpg";
  imgName:string = "SpiderMan";

  greeting(){
    window.alert("You clicked da baadu!");
  }

  mydata:any

}
