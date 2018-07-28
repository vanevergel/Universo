import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario:string = "";
  constructor(public navCtrl: NavController) {

  }

  Redireccion()
{
  this.navCtrl.push(PrincipalPage)
}

}
