import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

infodata;
cart = [];
ncart = [];
fcart = [];

  constructor(private service: ProductsService, private route: ActivatedRoute) { 
    this.route.params.subscribe(data => {this.infodata = this.route.snapshot.paramMap.get("c.id");
      
    }
    )
  }

  ngOnInit() { 
    this.infodata = this.route.snapshot.paramMap.get("c.id");
    //this.cart = this.service.getProducts();

    var det = this.service.dataDB();
    //console.log("hello");
    //console.log(this.service.dataDB());

    det.subscribe((temp) =>{this.ncart = temp;
      console.log("hii");
      this.fcart = this.ncart[0].products;
      console.log(this.fcart);
      console.log(this.ncart[0].products[0]);
    }, ()=>{
    });
    

    this.infodata = this.service.getidinfo();
    
  }

  

  
  




}
