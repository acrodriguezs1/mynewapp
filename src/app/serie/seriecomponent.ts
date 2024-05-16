import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  promedio: number=0;
  constructor(private serieService: SerieService) { }
  

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }
  getPromedio(Serie: Serie[]){
    let prom :number=0
    Serie.forEach(serie => {
        prom= prom+serie.seasons
    });

    this.promedio=prom;
  }
  ngOnInit() {
    this.getSeries();
    this.getPromedio(this.series);
  }
}