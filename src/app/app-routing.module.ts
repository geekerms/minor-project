import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssubjectsComponent } from './pages/cssubjects/cssubjects.component';
import { HomeComponent } from './pages/home/home.component';
import { IdeComponent } from './pages/ide/ide.component';
import { ProgrammingComponent } from './pages/programming/programming.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import {JavaWelcomeComponent} from './forquiz/java-welcome/java-welcome.component';
import {JavaQuestionComponent} from './forquiz/java-question/java-question.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'home', component:HomeComponent },
  { path: 'programming', component: ProgrammingComponent },
  { path: 'cssubjects', component: CssubjectsComponent },
  { path: 'ide', component: IdeComponent },
  { path: 'quiz', component: QuizComponent },
  {path:'java-welcome', component:JavaWelcomeComponent},
  { path:'java-question',component:JavaQuestionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
