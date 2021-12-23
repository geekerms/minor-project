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
    JavaHomeComponent
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
