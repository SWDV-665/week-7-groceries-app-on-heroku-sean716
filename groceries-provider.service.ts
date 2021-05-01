import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesProviderService {

  items = [];

  constructor() {
    console.log("Hello GroceriesProviderService Provider")
   }

   getItems() {
    return this.items;
   }

   removeItem(index) {

    
    this.items.splice(index, 1);

   }

   addItem(item){
    this.items.push(item);

   }

   editItem(item, index){
    this.items[index] = item;

   }


}
