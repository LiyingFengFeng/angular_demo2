import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World Liying';
  counter =0;

  sizeChanged(size){
    console.log('font size->'+size);
    this.counter=this.counter+1;
  }

}
