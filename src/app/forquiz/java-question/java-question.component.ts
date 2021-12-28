import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-java-question',
  templateUrl: './java-question.component.html',
  styleUrls: ['./java-question.component.css']
})
export class JavaQuestionComponent implements OnInit {

  public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 15;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted: boolean = false;
  constructor(private questionService: QuestionService,private router:Router) { }

 

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions() {
    this.questionService.getQuestionJsonJ()
      .subscribe(res => {
        this.questionList = res.questions;
      })
  }
  nextQuestion() {
    this.currentQuestion++;
    this.resetCounter();
    this.getProgressPercent();

  }
  previousQuestion() {
    this.currentQuestion--;
    this.resetCounter();
  }
  @ViewChild('myButton') myButton!: ElementRef;
  triggerClick(){
    this.router.navigate(['/quiz']);
  }
  fun(){
    setTimeout(() => {
      this.triggerClick();
    }, 10000);
  }
  answer(currentQno: number, option: any) {

    if (currentQno === this.questionList.length) {
      setTimeout(() => {
        this.isQuizCompleted = true;
        this.stopCounter();
        this.fun();
      }, 1000);

    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

    } else {
      
        setTimeout(() => {
          this.currentQuestion++;
          this.inCorrectAnswer++;
          this.resetCounter();
          this.getProgressPercent();
        }, 1000);
        this.points -= 5;
        
      }

  }
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 15;
          this.points -= 5;
        }
      })
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 15;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 15;
    this.currentQuestion = 0;
    this.progress = "0";
  }
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;
  }
}
