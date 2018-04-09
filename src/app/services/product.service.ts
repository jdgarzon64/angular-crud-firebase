import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Product} from '../models/product';


@Injectable()
export class ProductService {
productList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }

  getProduct() {
    return this.productList = this.firebase.list('products');
  }

  insertProduct(product: Product) {

  }
}
