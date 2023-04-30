import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { User } from 'src/app/model/User';
import { CartService } from 'src/app/services/Cart-Service';
import { ProductService } from 'src/app/services/Product-Service';
import { UserService } from 'src/app/services/User-Service';

@Component({
  selector: 'app-seventh-page',
  templateUrl: './seventh-page.component.html',
  styleUrls: ['./seventh-page.component.css']
})
export class SeventhPageComponent implements OnInit {
  // listaProduse:Product[] |undefined;
  //  cartProducts:Product[]=[];
   cartProducts:any[]=[]
   items:Product[] = [];
   myInputQuantity:number=1;
   productItem:Product|undefined;
   pretTransport:number=20;
   currentUser:User|undefined;
  
  constructor(
    private productService:ProductService,
    private userService:UserService,
    private cartService:CartService,
    @Inject(Router) private router: Router,
    private route:ActivatedRoute)
    { 
      this.items=this.cartService.items;
    }


  ngOnInit() {    
    this.currentUser=this.userService.getCurrentUser();

    //this.productService.findAllProducts().subscribe();
    // this.route.queryParams.subscribe(params => {
    // this.cartProducts = JSON.parse(params['cartProducts']);
    // console.log(this.cartProducts);
    // });

    for(let i=0; i<this.items.length; i++){
      this.items[i].quantityOrder = 1;
    }
  }
  btnClick=  () => {
    this.router.navigate(["/first-page"]);
  }
  btnClick2=  () => {
    this.router.navigate(["/seven-page"]);
  }
  onAddToCartClicked(product: Product) {
    this.cartProducts.push(product);
  }
  findProductIndex(product: Product): number {
    return this.items.findIndex(item => item.id === product.id);
  }

  removeItem(index: number): void {
    this.cartService.deleteItem(index);
  }

  findAllPrice(product: Product): number {
    let totalPrice = Number(product.pretProdus) * Number(product.quantityOrder);
    product.priceFinal=totalPrice;
    return totalPrice;
  }
  calculateTotalPrice(products: Product[]): number {
    let total: number = 0;
  
    for (let product of products) {
      product.priceFinal=this.findAllPrice(product);
      if (product.priceFinal) {
        total += Number(product.priceFinal);
      }

    }
    return total;
  }

  

  

}
