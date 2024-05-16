import { Component } from '@angular/core';
import { Serie } from './serie/serie';
import { dataSeries } from './serie/dataSeries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mynewapp';
  series: Array<Serie> = [];

  getSerieList(): Array<Serie> {
    return dataSeries;
  }

}
