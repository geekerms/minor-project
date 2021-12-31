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
import{PythonWelcomeComponent} from './forquiz/python-welcome/python-welcome.component';
import{PythonQuestionComponent} from './forquiz/python-question/python-question.component';
import{CHomeComponent} from './cTheory/c-home/c-home.component';
import{WhatCComponent} from './cTheory/what-c/what-c.component';
import{FeaturesCComponent}from './cTheory/features-c/features-c.component';
import{HistoryCComponent} from './cTheory/history-c/history-c.component';
import{FirstCComponent} from './cTheory/first-c/first-c.component';
import{CompilationCComponent} from './cTheory/compilation-c/compilation-c.component';
import{VariableCComponent} from './cTheory/variable-c/variable-c.component';
import{KeywordCComponent} from './cTheory/keyword-c/keyword-c.component';
import{ DatatypeCComponent} from './cTheory/datatype-c/datatype-c.component';
import{IfelseCComponent} from './cTheory/ifelse-c/ifelse-c.component';
import{SwitchCComponent} from './cTheory/switch-c/switch-c.component';
import {WhileCComponent} from './cTheory/while-c/while-c.component';
import{DowhileCComponent} from './cTheory/dowhile-c/dowhile-c.component';
import{ForCComponent} from './cTheory/for-c/for-c.component';
import {SqlWelcomeComponent} from './forquiz/sql-welcome/sql-welcome.component';
import{SqlQuestionComponent} from './forquiz/sql-question/sql-question.component';
import {DataWelcomeComponent} from './forquiz/data-welcome/data-welcome.component';
import {DataQuestionComponent} from './forquiz/data-question/data-question.component';






const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'home', component:HomeComponent },
  { path: 'programming', component: ProgrammingComponent },
  { path: 'cssubjects', component: CssubjectsComponent },
  { path: 'ide', component: IdeComponent },
  { path: 'quiz', component: QuizComponent },
  {path:'java-welcome', component:JavaWelcomeComponent},                            //QUIZ
  { path:'java-question',component:JavaQuestionComponent},
  { path:'python-welcome',component:PythonWelcomeComponent},
  { path:'python-question',component:PythonQuestionComponent},
  { path:'sql-welcome',component:SqlWelcomeComponent},
  { path:'sql-question',component:SqlQuestionComponent},
  { path:'data-welcome',component:DataWelcomeComponent},
  { path:'data-question',component:DataQuestionComponent},
  { path:'whatJ',component:WhatJComponent},                                         //Java 
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
  { path:'dbmsHome',component:DbmsHomeComponent},                                     //DBMS
  { path:'whatD',component:WhatDComponent},
  { path:'charD',component:CharDComponent},
  { path:'appliD',component:AppliDComponent},
  { path:'archiD',component:ArchiDComponent},
  { path:'modelD',component:ModelDComponent},
  { path:'entityD',component:EntityDComponent},
  { path:'relationalD',component:RelationalDComponent},
  { path:'schemaD',component:SchemaDComponent},
  { path:'indeD',component:IndeDComponent},
  {path:'cHome',component:CHomeComponent},                                            //C 
  {path:'whatC',component:WhatCComponent},
  {path:'featuresC',component:FeaturesCComponent},
  {path:'historyC',component:HistoryCComponent},
  {path:'firstC',component:FirstCComponent},
  {path:'compileC',component:CompilationCComponent},
  {path:'variableC',component:VariableCComponent},
  {path:'keywordC',component:KeywordCComponent},
  {path:'datatypeC',component: DatatypeCComponent},
  {path:'ifelseC',component: IfelseCComponent},
  {path:'switchC',component:SwitchCComponent},
  {path:'whileC',component:WhileCComponent},
  {path:'dowhileC',component:DowhileCComponent},
  {path:'forC',component:ForCComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
