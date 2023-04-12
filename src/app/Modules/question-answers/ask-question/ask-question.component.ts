import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  constructor(private api:ApiService,private fb:FormBuilder) { 
    this.questionForm = this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
      tags:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  questionForm:FormGroup

submitQuestion(){
  console.log("insubmint")
  let askedQuestion = this.questionForm.getRawValue();
  console.log(askedQuestion,"asked")
  let user = JSON.parse(localStorage.getItem('user'))
  
  if(askedQuestion){
    let question = {
      title:askedQuestion.title,
      description:askedQuestion.description,
      tags:askedQuestion.tags,
      views:0,
      votes:0,
      userId:user[0].id,
      answers:[]
    }
  console.log("question",question)
    this.api.addQuestion(question).subscribe((res)=>{
      console.log("res of addquestion",res)
      alert("question asked")
    },(err)=>{
      console.log("error",err)
    })

  }
}
  get title(){
    return this.questionForm.get('title')
  }

  get description(){
    return this.questionForm.get('description')
  }

  get tags(){
    return this.questionForm.get('tags')
  }
}
