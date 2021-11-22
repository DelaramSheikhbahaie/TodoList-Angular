import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Schema } from 'inspector';
import { BehaviorSubject } from 'rxjs';
import { List } from '../models/lists';
import { Todo } from '../models/todos';

@Injectable({
  providedIn: 'root'
})

export class SenderService {
  constructor(private route :ActivatedRoute){}
  
  private lists = new BehaviorSubject([{_id:0 ,title:"Daily Tasks" , date:"Date.now()" ,isMain:true} , {_id:1 ,title:"Compeleted Tasks", date:"Date.now()" , isMain:false}]);
  sharedLists = this.lists.asObservable();

  private listID = new BehaviorSubject(0);
  sharedListID = this.listID.asObservable();

  private listName = new BehaviorSubject("Daily Tasks");
  sharedListName = this.listName.asObservable();

  private TodoList = new BehaviorSubject([]);
  sharedTodoList = this.TodoList.asObservable();

  nextListInfo(item) {
    var id:any;
    this.route.paramMap.subscribe(params => id = params.get('id'))
    this.listID.next(id);
    this.listName.next(item.title);
  }
  updateList(list) {
    const currentValue = this.lists.value;
    const updatedValue = currentValue.concat(list)
    this.lists.next(updatedValue);
  }
  updateTodoList(todoList) {
    this.TodoList.next(todoList);
  }
  removeDeletedListsBeforeRefresh(item){
    const lists = this.lists.value;
    const updatedValue = lists.filter(list => list._id != item._id)
    this.lists.next(updatedValue);
  }
}
