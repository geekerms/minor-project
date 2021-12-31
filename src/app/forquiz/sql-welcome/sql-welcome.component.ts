import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-sql-welcome',
  templateUrl: './sql-welcome.component.html',
  styleUrls: ['./sql-welcome.component.css']
})
export class SqlWelcomeComponent implements OnInit {


  @ViewChild('name') nameKey!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem('name',this.nameKey.nativeElement.value);
  }
}