import {  Component, OnInit,ViewChild,ElementRef  } from '@angular/core';

@Component({
  selector: 'app-data-welcome',
  templateUrl: './data-welcome.component.html',
  styleUrls: ['./data-welcome.component.css']
})
export class DataWelcomeComponent implements OnInit {

  @ViewChild('name') nameKey!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem('name',this.nameKey.nativeElement.value);
  }
}
