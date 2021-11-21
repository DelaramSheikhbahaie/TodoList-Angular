import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { List } from '../models/lists';
import { Todo } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  private lists = new BehaviorSubject([{title:"Daily Tasks" , date:"Date.now()" ,isMain:true} , {title:"Compeleted Tasks", date:"Date.now()" , isMain:false}]);
  sharedLists = this.lists.asObservable();

  private listID = new BehaviorSubject(0);
  sharedListID = this.listID.asObservable();

  private listName = new BehaviorSubject("Daily Tasks");
  sharedListName = this.listName.asObservable();

  private TodoList = new BehaviorSubject([]);
  sharedTodoList = this.TodoList.asObservable();

  constructor() { }

  nextListInfo(id: number , name:string) {
    this.listID.next(id);
    this.listName.next(name);
  }
  updateList(list) {
    const currentValue = this.lists.value;
    const updatedValue = currentValue.concat(list)
    this.lists.next(updatedValue);
  }
  displayListsUpdateBeforeRefresh(newValue){
    const currentValue = this.lists.value;
    const updatedValue = [...currentValue , newValue]
    this.lists.next(updatedValue);
  }
  updateTodoList(todoList) {
    this.TodoList.next(todoList);
  }
  displayTodosUpdateBeforeRefresh(newValue){
    const currentValue = this.TodoList.value;
    const updatedValue = [...currentValue , newValue]
    this.TodoList.next(updatedValue);
  }
}
