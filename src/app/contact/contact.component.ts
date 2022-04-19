import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  contactlist  = [
    {id: 1, name: 'MY NO.', email: 'chariebell.horca@evsu.edu.ph'  ,number: '09106532890'},
    {id: 2, name: 'Mama', email: 'fe.horca@gmail.com'  ,number: '09145214210'},
    {id: 3, name: 'Jhanne', email: 'jhanne.pilande@gmail.com'  ,number: '09145214210'},
    {id: 4, name: 'MaeAnn', email: 'maeann.hamtig@gmail.com'  ,number: '09145214210'},
    
   
  ]
  constructor(public alertController: AlertController,
              private toastCtrl: ToastController ) {
  }
  async  confirmation(index: number) {
    const alert = await this.alertController.create({
      header: 'Are you sure you want to delete?',
      buttons: [
         {
          text: 'Yes',
          handler: async () => {
              this.contactlist.splice(index, 1);
              let toast = await this.toastCtrl.create({
                header: 'Successfully Deleted!',
                buttons: ['OK'],
                color: 'warning'
              })
             toast.present();
              console.log('Delete clicked')
          }
        },
        {
          text: 'No',
          role: 'cancel', 
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });

    await alert.present();
    
  }


  async addUser() {
    let prompt = await this.alertController.create({
      header: 'New Contact',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name: 'email',
          placeholder: 'Email'
        },
        {
          name: 'number',
          placeholder: 'Number',
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
          handler: (data) => {
            console.log('Saved clicked');
            
          this.contactlist.push({
            id: data.id,
            name: data.name,
            email: data.email,
            number: data.number,
          });
     
          }
        }
      ]
    });
    await prompt.present();
  }
}