import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: any = [];
  public title = 'testapp';
  public colors: any =[];
  public loading : boolean = false;
  public searchText: any;
  constructor(public service: AppService) {
    this.service.fetchUsers().subscribe((users) => {
      this.data = users;
      console.log('data = ', this.data);
      this.data.feed.entry.forEach((element , i) => {
        this.colors.push(this.getColor()); 
        element.price = '$'+i;
        // element.price = element.im:price.lebel;
      });
      this.loading = true;
    });
  }
  public ngOnInit() {
    
   
  }

  public getColor(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  }
  
}
