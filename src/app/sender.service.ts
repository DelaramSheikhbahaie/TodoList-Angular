import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { List } from './models/lists';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  private message = new BehaviorSubject('First Message');
  sharedMessage = this.message.asObservable();

  private lists = new BehaviorSubject([{name:"from service"}]);
  sharedLists = this.lists.asObservable();

  constructor() { }

  nextMessage(message: string) {
    this.message.next(message)
  }
  updateList(list) {
    const currentValue = this.lists.value;
    const updatedValue = [...currentValue, list];
    this.lists.next(updatedValue);
  }
  
  // public listsArray:List[];
}
