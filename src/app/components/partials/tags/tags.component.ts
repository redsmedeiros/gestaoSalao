import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags?: Tag[]

  constructor(private productService: ProductService) {

    this.tags = this.productService.getAllTags()
   }

  ngOnInit(): void {
  }

}

//1:00:52
