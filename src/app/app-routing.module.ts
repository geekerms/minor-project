import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssubjectsComponent } from './pages/cssubjects/cssubjects.component';
import { HomeComponent } from './pages/home/home.component';
import { IdeComponent } from './pages/ide/ide.component';
import { ProgrammingComponent } from './pages/programming/programming.component';
import { QuizComponent } from './pages/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'programming', component: ProgrammingComponent },
  { path: 'cssubjects', component: CssubjectsComponent },
  { path: 'ide', component: IdeComponent },
  { path: 'quiz', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
