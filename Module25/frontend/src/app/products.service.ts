import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { prod } from './product';
import { Iprod } from './prod';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  
  temp;
  cartdet = [];
  update;
  maindataDB;
  ncart;
  user;
  id;
  //Iprod;

  dataDB() : Observable<any> {
    console.log("you  got your Products");
    var det =  this.http.get('http://127.0.0.1:4000/products');
    console.log(det);
    return det;

  }

  logOut(user) {
    console.log("product..");
    var det =  this.http.put('http://127.0.0.1:4000/logout', user);
    console.log(det);
    return det;
  }

  
  // dataDB() {
  //   //return this.http.get('http://127.0.0.1:4000/products');
  //   const headers = new HttpHeaders().set('Authorization', 'my-auth-token').set('Content-Type','application/json');
  //   var det =  this.http.post('http://127.0.0.1:4000/products', {
  //     headers: headers
  //   });

    // det.subscribe((temp) =>{this.ncart = temp;
    //   // for(let i = 0; i < this.ncart.length; i++) {
    //   //   console.log(this.ncart[i]);
    //   // }
    //   console.log(this.ncart);
    //   //console.log(this.Iprod[0].products);
    // }, ()=>{
    // });

    // return this.ncart;

  setid(idin) {
    this.id = idin;
  }

  getidinfo() {
    return this.id;
  }
  
  // getProducts() {
  //   return prod.products;
  // }

  storeDB(data) {
    console.log(data);
  }

  

  newuser(user) {
    console.log(user);
    return  this.http.post('http://127.0.0.1:4000/signup', user);
  }

  checkuser(user) {
    console.log("login..");
    console.log(user);

    //console.log(user.username+"   post");
    const headers = new HttpHeaders().set('Authorization', 'my-auth-token').set('Content-Type','application/json');
    return this.http.post('http://127.0.0.1:4000/login', user, {
      headers: headers
    });
  }

  logStatus() {
    var det =  this.http.get('http://127.0.0.1:4000/status');
    return det;
  }

  addToCart(id) {
    if(this.cartdet.indexOf(id) != -1) {
      if(this.cartdet[this.cartdet.indexOf(id)].availability >= 2) {
        this.cartdet[this.cartdet.indexOf(id)].availability--;
        this.cartdet[this.cartdet.indexOf(id)].Quantity++;
      } else if (this.cartdet[this.cartdet.indexOf(id)].availability > 0){
        this.cartdet[this.cartdet.indexOf(id)].availability--;
      } else {
        alert("Products are sold out..");
      }
    } else {
      this.cartdet.push(id);
    }
    console.log(this.cartdet);
  }

  getCart() {
    return this.cartdet;
  }


  currentuser(user) {
    this.user = user;
    console.log(this.user);
  }

  getUser() {
    //console.log(this.user);
    return this.user;
  }

}
