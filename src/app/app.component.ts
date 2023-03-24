import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(["en", "pl"]);
    translate.use("en")
   }

   switchToPL(){
    this.translate.use("pl")
   }

   switchToEN(){
    this.translate.use("en")
   }
}
