import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssubjectsComponent } from './pages/cssubjects/cssubjects.component';
import { HomeComponent } from './pages/home/home.component';
import { IdeComponent } from './pages/ide/ide.component';
import { ProgrammingComponent } from './pages/programming/programming.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import {JavaWelcomeComponent} from './forquiz/java-welcome/java-welcome.component';
import {JavaQuestionComponent} from './forquiz/java-question/java-question.component';
import {WhatJComponent} from './javaTheory/what-j/what-j.component';
import{FeaturesJComponent} from './javaTheory/features-j/features-j.component';
import {JavaHomeComponent} from './javaTheory/java-home/java-home.component';
import{HelloJComponent} from './javaTheory/hello-j/hello-j.component';
import{ControlJComponent} from './javaTheory/control-j/control-j.component';
import{IfelseJComponent} from './javaTheory/ifelse-j/ifelse-j.component';
import{SwitchJComponent} from './javaTheory/switch-j/switch-j.component';
import{WhileJComponent} from './javaTheory/while-j/while-j.component';
import{DowhileJComponent} from './javaTheory/dowhile-j/dowhile-j.component';
import{ForJComponent} from './javaTheory/for-j/for-j.component';
import{BreakJComponent} from './javaTheory/break-j/break-j.component';
import{ContiJComponent} from './javaTheory/conti-j/conti-j.component';
import{DbmsHomeComponent} from './dbmsTheory/dbms-home/dbms-home.component';
import{WhatDComponent} from './dbmsTheory/what-d/what-d.component';
import{CharDComponent} from './dbmsTheory/char-d/char-d.component';
import{AppliDComponent} from './dbmsTheory/appli-d/appli-d.component';
import{ArchiDComponent} from './dbmsTheory/archi-d/archi-d.component';
import{ModelDComponent} from './dbmsTheory/model-d/model-d.component';
import{EntityDComponent} from './dbmsTheory/entity-d/entity-d.component';
import{RelationalDComponent} from './dbmsTheory/relational-d/relational-d.component';
import{SchemaDComponent} from './dbmsTheory/schema-d/schema-d.component';
import{IndeDComponent} from './dbmsTheory/inde-d/inde-d.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'home', component:HomeComponent },
  { path: 'programming', component: ProgrammingComponent },
  { path: 'cssubjects', component: CssubjectsComponent },
  { path: 'ide', component: IdeComponent },
  { path: 'quiz', component: QuizComponent },
  {path:'java-welcome', component:JavaWelcomeComponent},
  { path:'java-question',component:JavaQuestionComponent},
  { path:'whatJ',component:WhatJComponent},
  { path:'featuresJ',component:FeaturesJComponent},
  { path:'javaHome',component:JavaHomeComponent},
  { path:'helloJ',component:HelloJComponent},
  { path:'controlJ',component:ControlJComponent},
  { path:'ifelseJ',component:IfelseJComponent},
  { path:'switchJ',component:SwitchJComponent},
  { path:'whileJ',component:WhileJComponent},
  { path:'dowhileJ',component:DowhileJComponent},
  { path:'forJ',component:ForJComponent},
  { path:'breakJ',component:BreakJComponent},
  { path:'contiJ',component:ContiJComponent},
  { path:'dbmsHome',component:DbmsHomeComponent},
  { path:'whatD',component:WhatDComponent},
  { path:'charD',component:CharDComponent},
  { path:'appliD',component:AppliDComponent},
  { path:'archiD',component:ArchiDComponent},
  { path:'modelD',component:ModelDComponent},
  { path:'entityD',component:EntityDComponent},
  { path:'relationalD',component:RelationalDComponent},
  { path:'schemaD',component:SchemaDComponent},
  { path:'indeD',component:IndeDComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
