import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { List } from '../models/lists';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  private lists = new BehaviorSubject([{name:"Daily Tasks"} , {name:"Compeleted Tasks"}]);
  sharedLists = this.lists.asObservable();

  private listID = new BehaviorSubject(0);
  sharedListID = this.listID.asObservable();

  private TodoList = new BehaviorSubject([{listId:0 , content:"from service" , date:"1.1.1" , description:"this is a todo" , compeleted:false}]);
  sharedTodoList = this.TodoList.asObservable();

  // private todoName = new BehaviorSubject("")
  // sharedTodoName = this.todoName.asObservable();

  // private todoDate = new BehaviorSubject("")
  // sharedTodoDate = this.todoDate.asObservable();

  // private todoDescription = new BehaviorSubject("")
  // sharedTodoDescription = this.todoDescription.asObservable();

  constructor() { }

  nextListID(id: number) {
    this.listID.next(id)
  }
  updateList(list) {
    const currentValue = this.lists.value;
    const updatedValue = [...currentValue, list];
    this.lists.next(updatedValue);
  }
  updateTodoList(todoList) {
    const currentValue = this.TodoList.value;
    const updatedValue = [...currentValue, todoList];
    this.TodoList.next(updatedValue);
  }
  
  // public listsArray:List[];
}
