import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { ProgrammingComponent } from './pages/programming/programming.component';
import { CssubjectsComponent } from './pages/cssubjects/cssubjects.component';
import { IdeComponent } from './pages/ide/ide.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { HomeComponent } from './pages/home/home.component';
import { JavaWelcomeComponent } from './forquiz/java-welcome/java-welcome.component';
import { JavaQuestionComponent } from './forquiz/java-question/java-question.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './quiz-derective/change-bg.directive';
import { WhatJComponent } from './javaTheory/what-j/what-j.component';
import { FeaturesJComponent } from './javaTheory/features-j/features-j.component';
import { JavaHomeComponent } from './javaTheory/java-home/java-home.component';
import { HelloJComponent } from './javaTheory/hello-j/hello-j.component';
import { ControlJComponent } from './javaTheory/control-j/control-j.component';
import { IfelseJComponent } from './javaTheory/ifelse-j/ifelse-j.component';
import { SwitchJComponent } from './javaTheory/switch-j/switch-j.component';
import { WhileJComponent } from './javaTheory/while-j/while-j.component';
import { DowhileJComponent } from './javaTheory/dowhile-j/dowhile-j.component';
import { ForJComponent } from './javaTheory/for-j/for-j.component';
import { BreakJComponent } from './javaTheory/break-j/break-j.component';
import { ContiJComponent } from './javaTheory/conti-j/conti-j.component';
import { DbmsHomeComponent } from './dbmsTheory/dbms-home/dbms-home.component';
import { WhatDComponent } from './dbmsTheory/what-d/what-d.component';
import { CharDComponent } from './dbmsTheory/char-d/char-d.component';
import { AppliDComponent } from './dbmsTheory/appli-d/appli-d.component';
import { ArchiDComponent } from './dbmsTheory/archi-d/archi-d.component';
import { ModelDComponent } from './dbmsTheory/model-d/model-d.component';
import { EntityDComponent } from './dbmsTheory/entity-d/entity-d.component';
import { RelationalDComponent } from './dbmsTheory/relational-d/relational-d.component';
import { SchemaDComponent } from './dbmsTheory/schema-d/schema-d.component';
import { IndeDComponent } from './dbmsTheory/inde-d/inde-d.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProgrammingComponent,
    CssubjectsComponent,
    IdeComponent,
    QuizComponent,
    HomeComponent,
    JavaWelcomeComponent,
    JavaQuestionComponent,
    ChangeBgDirective,
    WhatJComponent,
    FeaturesJComponent,
    JavaHomeComponent,
    HelloJComponent,
    ControlJComponent,
    IfelseJComponent,
    SwitchJComponent,
    WhileJComponent,
    DowhileJComponent,
    ForJComponent,
    BreakJComponent,
    ContiJComponent,
    DbmsHomeComponent,
    WhatDComponent,
    CharDComponent,
    AppliDComponent,
    ArchiDComponent,
    ModelDComponent,
    EntityDComponent,
    RelationalDComponent,
    SchemaDComponent,
    IndeDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
