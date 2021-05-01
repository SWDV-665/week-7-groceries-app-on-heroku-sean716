import { Injectable } from '@angular/core';
import { GroceriesProviderService } from './groceries-provider.service';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class InputDialogProviderService {

  constructor(public alertCtrl: AlertController, public dataService: GroceriesProviderService) {
    console.log('Hello InputDialogProviderService');
   }
   


  async showPrompt(item?, index?) {
    const prompt = await this.alertCtrl.create({
      // title: 'Add Item',
      message: item? "Please edit item...": "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item ? item.quantity : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);

            }
            else {
              this.dataService.addItem(item);
              
            }
            
          }
        }
      ]
    });
    prompt.present();
  }

}
