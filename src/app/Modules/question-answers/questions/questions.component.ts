import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/Interfaces/question';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getQuestions()
  }
  questions:any
  getQuestions() {
    this.api.getQuestions().subscribe((res: any) => {
      if (res) {
        console.log("response", res)
        this.questions = res;
      }
    }, (err) => {
      console.log("err", err)
    })
  }
}
