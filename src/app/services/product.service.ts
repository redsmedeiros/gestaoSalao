import { sample_products, sample_tags } from './../../data';
import { Product } from './../shared/models/Product';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tag } from './../shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll(): Product[]{
    return sample_products
  }

  getAllProductsBySearchTerm(searchTerm: string){
    return this.getAll().filter( product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags(): Tag[]{
    return sample_tags
  }

  getAllProductsByTag(tag: string): Product[]{
    return tag === 'All' ? this.getAll() : this.getAll().filter(product => product.tags?.includes(tag))
  }
}
