import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  cond1:boolean = true;
  cond2:boolean = false;

  bikes:string[] = ["Ktm","Yamaha","Hero","Tvs"];

  mybike:string = "Ktm";
}

