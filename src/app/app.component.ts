import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _title = 'whats-next';
  _advices:string[] = [];

  constructor(public translate: TranslateService) {
    translate.addLangs(['tr','en']);
    translate.setDefaultLang('tr');
  }

  getAdvice() {
    if(this._advices.length==0 || this.translate.currentLang === 'tr') {
      this._advices = ['Piyano Çal', 'Kitap Oku', 'Futbol Oyna', 'Satranç Oyna', 'Basketbol Oyna', 'Oyuncaklarınla Oyna'];
    }
    if(this.translate.currentLang === 'en') {
      this._advices = ['Play Piano', 'Read Books', 'Play football', 'Play Chess', 'Play Basketball', 'Play with Toys'];
    }
    return this._advices[Math.floor(Math.random() * this._advices.length)];
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
