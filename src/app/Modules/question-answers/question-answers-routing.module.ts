import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';

const routes: Routes = [
  {
    path:'',
    component:QuestionsComponent
  },
  {
    path:'ask-question',
    component:AskQuestionComponent
  },
  {
    path:'questions/:id',
    component:AnswersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionAnswersRoutingModule { }
