import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { List } from './models/lists';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  private lists = new BehaviorSubject([{name:"from service"}]);
  sharedLists = this.lists.asObservable();

  private listID = new BehaviorSubject(-1);
  sharedListID = this.listID.asObservable();

  constructor() { }

  nextListID(id: number) {
    this.listID.next(id)
  }
  updateList(list) {
    const currentValue = this.lists.value;
    const updatedValue = [...currentValue, list];
    this.lists.next(updatedValue);
  }
  
  // public listsArray:List[];
}
