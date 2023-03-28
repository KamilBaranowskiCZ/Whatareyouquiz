import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  name = '';
  sex: 'male' | 'female' = 'female';
  age?: number;
  sports: 'often' | 'never' = 'never';
  doYouLikeTea = false;
  rules = false;
  proccesing = true;
  results?: 'fox' | 'cat' | 'dog';

  constructor(private router: Router) {}

  showResults() {
    this.proccesing = false;

    if (this.sex === 'male' && this.sports === 'often') {
      this.results = 'dog';
    } else if (this.name.length > 7 && this.doYouLikeTea) {
      this.results = 'cat';
    } else {
      this.results = 'fox';
    }

    setTimeout(() => {
      this.router.navigate(['/' + this.results]);
    }, 2000);
  }
}
