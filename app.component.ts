import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = ' Blog ';
  isHeader = true;
  Age : any;
  values : any;
  DataEnter=false;


  textClass(){
    return{
      ShowColor:this.isHeader,
      bold:this.isHeader,
      italic:this.isHeader,

    };
  }

  onKey(e:any) {
    return this.values = e.target.value;
  }

  calculateAge(){
     this.DataEnter =!this.DataEnter;
     return this.Age = 2021 - this.values;
  }

}
