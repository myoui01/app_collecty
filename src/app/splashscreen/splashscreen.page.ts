import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage{

  constructor(private navCtrl: NavController) {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.navCtrl.navigateForward('/login', { animated: true});
    }, 3500);
  }
}
