import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/user/login/login.component';
import { SignupComponent } from './Modules/user/signup/signup.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AskQuestionComponent } from './Modules/question-answers/ask-question/ask-question.component';
import { AuthGuard } from './shared/guards/auth.guard';



const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'user',
    loadChildren:()=>import('./Modules/user/user.module').then(m=>m.UserModule)
},

{
  path:'questions',
  loadChildren:()=>import('./Modules/question-answers/question-answers.module').then(m=>m.QuestionAnswersModule),
},

  // {
  //   path: 'user',
  //   loadChildren: () => import('./Modules/user/user.module').then(m => m.UserModule)
  // },
  // {
  //   path: 'user-profile',
  //   loadChildren: () =>
  //     import('./Modules/user-profile/user-profile.module').then(
  //       (c) => c.UserProfileModule
  //     ),canActivate: [AuthGuard]
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
