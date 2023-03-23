import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat-result',
  templateUrl: './cat-result.component.html',
  styleUrls: ['./cat-result.component.scss'],
})
export class CatResultComponent implements OnInit {
  cat?: Cat;
  catList: Cat[] = [];
  randomCatNumber = this.randomIntFromInterval(1,20)
  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.getCat()
  }
  getCat() {
    this.catService.getCat().subscribe((cat) => {
      this.catList = cat;
      this.cat = this.catList[this.randomCatNumber]
    });
  }

  randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
