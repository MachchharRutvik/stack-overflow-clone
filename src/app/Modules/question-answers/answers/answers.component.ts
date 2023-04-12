import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  constructor(private fb:FormBuilder,private api:ApiService,private route:ActivatedRoute,) { 
    this.route.params.subscribe((res)=>{
      this.questionId = res['id']
      console.log("questoinid",this.questionId)
    })
    this.answerForm = this.fb.group({
      answer:['',Validators.required]
    })
  }
  answerForm:any
  questionId:any
  question:any
  ngOnInit(): void {
    if(this.questionId){
      this.getQuestion(this.questionId)
    }
  }
 getQuestion(questionId){
  this.api.getQuestionById(questionId).subscribe((res)=>{
    if(res){
      this.question = res
    }
  })
 }
 get answer(){
  return this.answerForm.get('answer');
 }
 addAnswer(){
  let answer = this.answerForm.getRawValue()
  console.log("asnwer",answer)
  if(answer){
    this.api.addAnswer(this.questionId,answer)
  }
 }
}
