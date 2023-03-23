import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-dog-result',
  templateUrl: './dog-result.component.html',
  styleUrls: ['./dog-result.component.scss'],
})
export class DogResultComponent implements OnInit {
  dog?: Dog;
  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.getDog()
  }
  getDog() {
    this.dogService.getDog().subscribe((dog) => {
      if(dog.url.slice(-4) != ".mp4")
      {this.dog = dog;}
      else this.getDog()
    });
  }
}
