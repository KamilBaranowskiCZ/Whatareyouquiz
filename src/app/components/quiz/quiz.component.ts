import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  name = '';
  sex: 'male' | 'female' = 'male';
  age?: number;
  sports: 'often' | 'never' = 'never';
  doYouLikeTea = true;
  rules = false;
  proccesing = true;
  results?: 'duck' | 'coffe' | 'dog';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  showResults() {
    this.proccesing = false;

    //todo: dodac logike

    this.results = 'duck';
    switch (this.results) {
      case 'duck':
        this.router.navigate(['']);
        break;
      // case "coffe":
      // break;
      // case "dog":
      // break;
    }
  }
}
