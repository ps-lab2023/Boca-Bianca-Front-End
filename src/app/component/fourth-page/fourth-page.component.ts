import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, zipAll } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { User } from 'src/app/model/User';
import { CartService } from 'src/app/services/Cart-Service';
import { ProductService } from 'src/app/services/Product-Service';
import { UserService } from 'src/app/services/User-Service';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnInit {
  productList: Product[] =[];
  sortedProductList:Product[]=[];
  selectedOption: String ='';
  selectedOptionGender: String='';
  product:Product[]=[];
  textName:String='';
  productFind:Product|undefined;
  productListByName: Product[] =[];
  productThird: Product[] =[];
  cartProducts:Product[]=[];
  click:number=0;
  currentUser:User|undefined;
  @Output() addToCartClicked = new EventEmitter<any>();


  constructor(
    private userService:UserService,
    private productService: ProductService,
    private cartService:CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser=this.userService.getCurrentUser();
    this.selectedOption = 'inorder';
    this.selectedOptionGender='feminin'
     this.sortProducts();
    this.productService.findAllProducts().subscribe(
      (res: Product[]) => {
        console.log(res);
        this.sortedProductList = res;
      
      },
      (error: any) => {
        console.error(error);
      }
    );

  
  
  }
 
  
  btnClick = () => {
    this.router.navigate(['/first-page']);
  }
  btnClick2=  () => {
    this.router.navigate(["/seven-page"]);
  }
 
  sortingcrescator()
  {
    this.productService.sorteazaCrescator();
  }

  sortingDescrescator()
  {
    this.productService.sorteazaDescrescator();
  }

  sortProducts() {

    if(this.selectedOption=='crescator')
    {
            this.productService.sorteazaCrescator().subscribe(
      (res: Product[]) => {
        console.log(res);
        this.sortedProductList = res;
        this.productThird=this.sortedProductList;

      },
      (error: any) => {
        console.error(error);
      }

    );}
    else if(this.selectedOption=='descrescator')
    {
            this.productService.sorteazaDescrescator().subscribe(
          (res: Product[]) => {
            console.log(res);
            this.sortedProductList = res;
            this.productThird=this.sortedProductList;

          },
          (error: any) => {
            console.error(error);
          }
        );
    }
    else if(this.selectedOption=='inorder' || this.selectedOption==''){
      this.productService.findAllProducts().subscribe(
        (res: Product[]) => {
          console.log(res);
          this.sortedProductList = res;
          this.productThird=this.sortedProductList;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }
  sortProductsByGender() {
    console.log(this.selectedOptionGender);

    if(this.selectedOptionGender=='feminin')
    {
            this.productService.findAllProductsGender(this.selectedOptionGender).subscribe(
        (res: Product[]) => {
          console.log(res);
          this.sortedProductList = res;
          this.productThird=this.sortedProductList;

        },
        (error: any) => {
          console.error(error);
        }

    );}
    else if(this.selectedOptionGender=='masculin')
    {
            this.productService.findAllProductsGender(this.selectedOptionGender).subscribe(
          (res: Product[]) => {
            console.log(res);
            this.sortedProductList = res;
            this.productThird=this.sortedProductList;

          },
          (error: any) => {
            console.error(error);
          }
        );
    }
    else if(this.selectedOptionGender=='kids' || this.selectedOptionGender==''){
      this.productService.findAllProductsGender(this.selectedOptionGender).subscribe(
        (res: Product[]) => {
          console.log(res);
          this.sortedProductList = res;
          this.productThird=this.sortedProductList;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }

  findByNume()
  {
   this.productService.findByName(this.textName).subscribe(
    (res: Product) => {

      this.productThird.splice(0, this.productThird.length);
      
      this.productFind = res;
      this.productListByName.push(res);
      this.productThird=this.productListByName;
      

    },
    (error: any) => {
      console.error(error);
    }
   );
  }

  addToCart(product:Product) {
    this.cartService.items.push(product);
    console.log(this.cartService.items);
  }

  
  // gotoSeventhPage() {
  //   this.router.navigate(['/seven-page'], { queryParams: { cartProducts: JSON.stringify(this.cartProducts) } });
  // }

}