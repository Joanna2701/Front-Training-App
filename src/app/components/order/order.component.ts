import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  dateOrder : Date = new Date();
  customer : Customer | undefined;
  constructor(public cartService : CartService, private router : Router) { }

  ngOnInit(): void {
    this.customer = this.cartService.getCustomer();
  }

  onOrder(){
    if(confirm("Aujourd'hui c'est gratuit, merci de votre visite :)")){
        this.cartService.clearLocalStorage();
        this.router.navigateByUrl('');
    }
  }
}
