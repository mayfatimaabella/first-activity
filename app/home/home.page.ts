import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonCard,          
  IonCardHeader,     
  IonCardTitle,      
  IonCardSubtitle,   
  IonCardContent,
  IonRow,
  IonGrid,
  IonCol,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonCard,           
    IonCardHeader,     
    IonCardTitle,      
    IonCardSubtitle,  
    IonCardContent,
    IonRow,
    IonGrid,
    IonCol,
    IonButton 
     ],
})
export class HomePage {
  constructor() {}
}
