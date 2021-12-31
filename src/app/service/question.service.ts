import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http :HttpClient) { }

  getQuestionJsonJ(){
    return this.http.get<any>("assets/javaQuestion.json");
  }
  getQuestionJsonP(){
    return this.http.get<any>("assets/pythonQuestion.json");
  }
  getQuestionJsonS(){
    return this.http.get<any>("assets/sqlQuestion.json");
  }
  getQuestionJsonD(){
    return this.http.get<any>("assets/dataQuestion.json");
  }
}
