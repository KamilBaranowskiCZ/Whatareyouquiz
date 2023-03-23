import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatResultComponent } from './components/cat-result/cat-result.component';
import { DogResultComponent } from './components/dog-result/dog-result.component';
import { FoxResultComponent } from './components/fox-result/fox-result.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {path: "", component: StartComponent},
  {path: "quiz", component: QuizComponent},
  {path: "fox", component: FoxResultComponent},
  {path: "dog", component: DogResultComponent},
  {path: "cat", component: CatResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
