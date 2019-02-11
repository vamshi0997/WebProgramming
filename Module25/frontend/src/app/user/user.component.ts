import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  nuser: Object =[];
  fuser = [];
  constructor(private service: ProductsService) {
   }

  ngOnInit() {
    console.log(this.service.logStatus());

    var det = this.service.logStatus();
    //console.log("hello");
    //console.log(this.service.dataDB());

    det.subscribe((temp) =>{this.nuser[0] = temp;
      console.log(this.nuser);
    }, ()=>{
    });
  }

}
