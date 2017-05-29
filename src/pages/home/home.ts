import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire} from 'angularfire2';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

import { HomeGame } from './game/homeGame';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public af: AngularFire, translate: TranslateService) {

	}

	ionViewWillLoad(){}

	ionViewDidLoad(){}

	ionViewWillEnter(){}

	ionViewDidEnter(){}

	ionViewWillLeave(){}

	ionViewDidLeave(){}

}


