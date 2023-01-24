import { ProductService } from './../../../services/product.service';
import { Product } from './../../../shared/models/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = []

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
    ) {

    this.activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm']){
        this.products = this.productService.getAllProductsBySearchTerm(params['searchTerm'])
      }else{
        this.products = this.productService.getAll()
      }
    })
  }

  ngOnInit(): void {
  }

}

//44:33
