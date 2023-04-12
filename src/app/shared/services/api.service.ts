import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseURL=environment.baseURL
  userURL = environment.userURL
  questionsURL=environment.questionsURL

  addUser(user:any){
    try {
      return this.http.post(this.baseURL + this.userURL,user)
    } catch (error) {
      console.log("error occured",error)
      return null
    }
  }
  getUserDetailsByEmailPassword(email:any,password:any){
    try {
      return this.http.get(this.baseURL+this.userURL+"?email="+email+"&password="+password)
    } catch (error) {
     console.log(error)
     return null 
    }
  }
  addQuestion(question){
    try {
      return this.http.post(this.baseURL+this.questionsURL,question)
    } catch (error) {
      console.log(error,"error")
      return null
    }
  }
  getQuestions(){
    try {
      return this.http.get(this.baseURL+this.questionsURL)
    } catch (error) {
      console.log(error,"error")
      return null
    }
  }
  getQuestionById(id){
    try {
      return this.http.get(this.baseURL+this.questionsURL+"/"+id)
    } catch (error) {
      console.log(error,"error")
      return null
    }
  }
  addAnswer(id,answer){
    try {
      return this.http.put(this.baseURL+this.questionsURL+'/'+id,answer)
    } catch (error) {
      console.log(error,"error")
      return null
    }
  }
}
