import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-java-welcome',
  templateUrl: './java-welcome.component.html',
  styleUrls: ['./java-welcome.component.css']
})
export class JavaWelcomeComponent implements OnInit {

  @ViewChild('name') nameKey!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem('name',this.nameKey.nativeElement.value);
  }
}
