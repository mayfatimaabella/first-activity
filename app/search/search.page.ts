import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSearchbar, IonList, IonItem, IonLabel]
})
export class SearchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  users: User[]= [
    new User(1,'user1','user1@email.com', 'user1pass'),
    new User(2,'user2','user2@email.com', 'user2pass'),
    new User(3,'user3','user3@email.com', 'user3pass'),
    new User(4,'llanel26','llanel2quib@email.com','llanel22'),
    new User(5,'nize14','nizevsquez@email.com','nizeeu1'),
    new User(6,'angel02','angelcaintick@email.com','angelspook'),
    new User(7,'kishab01','kishakathbenzula@email.com','kisholin'),
    new User(8,'nelmarie44','nelamrpang@email.com','nelzpang'),
    new User(9,'joshiecc12','cullenwhite@email.com','joshclln'),
    new User(10,'scoups08','icescoups@email.com','1cescoop'),
    new User(11,'junghany4','angeljungs@email.com','yoonyoon'),
    new User(12,'joshhong','hongshuang@email.com','joshwa'),
    new User(13,'moontrippy','moonlighthue@email.com','moon3lits'),
    new User(14,'kentoy','kentucky@email.com','kenkenken'),
    new User(15,'rowchannel9','luxurybag@email.com','channel3tter'),
    new User(16,'generaljason','militaryguY@email.com','!!redflag$'),
    new User(17,'pablojohn','pabloyemail.com','pablicdis'),
    new User(18,'joshjess01','joshush@email.com','jessjane'),
    new User(19,'llanbrynn22','llannelbrynn@email.com','11anelbr3nn'),
    new User(20,'tiannell','angeltian@email,com','nellrow'),
    new User(21,'kateyes30','katerays@email.com','kitkatreyes'),
    new User(22,'timjun04','juntim@email.com','junbebr'),
    new User(23,'steelves1','interstell@email.com','stellie'),
    new User(24,'nikkpall32','nikkopal@email.com','nikkop'),
    new User(25,'juzteen5','justinedduse@email.com','justined')
  ]

}
