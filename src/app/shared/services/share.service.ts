import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }
  isTrue = new BehaviorSubject<boolean>(false)
  isTrue$ = this.isTrue.asObservable();
  userName= new Subject()
  userName$ = this.userName.asObservable();
}
