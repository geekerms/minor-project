import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-python-welcome',
  templateUrl: './python-welcome.component.html',
  styleUrls: ['./python-welcome.component.css']
})
export class PythonWelcomeComponent implements OnInit {

  @ViewChild('name') nameKey!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem('name',this.nameKey.nativeElement.value);
  }

}
