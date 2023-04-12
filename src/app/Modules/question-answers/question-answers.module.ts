import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionAnswersRoutingModule } from './question-answers-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuestionsComponent,
    AnswersComponent
  ],
  imports: [
    CommonModule,
    QuestionAnswersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class QuestionAnswersModule { }
