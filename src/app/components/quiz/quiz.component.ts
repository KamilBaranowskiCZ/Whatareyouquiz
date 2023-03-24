import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  name = '';
  sex: 'male' | 'female' = 'female';
  age?: number;
  sports: 'often' | 'never' = 'never';
  doYouLikeTea = false;
  rules = false;
  proccesing = true;
  results?: 'fox' | 'cat' | 'dog';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  showResults() {
    this.proccesing = false;

    if (this.sex === 'male' && this.sports ===  "often") {
      this.results = 'dog';
    } 
    else if (this.name.length > 7 && this.doYouLikeTea == true) {
      this.results = 'cat';
    }
    else{
      this.results = "fox"
    }

    switch (this.results) {
      case 'fox':
        setTimeout(() => {
          this.router.navigate(['/fox']);
        }, 2000);

        break;
      case 'dog':
        setTimeout(() => {
          this.router.navigate(['/dog']);
        }, 2000);
        break;
      case 'cat':
          setTimeout(() => {
            this.router.navigate(['/cat']);
          }, 2000);
          break;
    }
    
  }
}
