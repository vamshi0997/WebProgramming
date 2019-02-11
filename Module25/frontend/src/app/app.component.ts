import { Component } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1';
  search;

  constructor(private service: ProductsService) {

  }
  username;
  password;

  logout() {
    //var details = {username: this.username, password: this.password}
    // console.log("appc");
    // var id = "hii";
    var det = this.service.logOut(true);
  }
}
