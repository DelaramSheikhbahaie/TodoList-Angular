import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Schema } from 'inspector';
import { BehaviorSubject } from 'rxjs';
import { List } from '../models/lists';
import { Todo } from '../models/todos';

@Injectable({
  providedIn: 'root',
})
export class SenderService {
  constructor(private route: ActivatedRoute) {}

  DailyListID = '7f57bd2bc9259e055c44be9a';
  CompeletedListID = '8ed2864ab14f980a6b47bbb9';

  private lists = new BehaviorSubject([
    {
      _id: this.DailyListID,
      title: 'Daily Tasks',
      date: Date.now(),
      isMain: true,
    },
    {
      _id: this.CompeletedListID,
      title: 'Compeleted Tasks',
      date: Date.now(),
      isMain: false,
    },
  ]);
  sharedLists = this.lists.asObservable();

  private listID = new BehaviorSubject(0);
  sharedListID = this.listID.asObservable();

  private listName = new BehaviorSubject('Daily Tasks');
  sharedListName = this.listName.asObservable();

  private TodoList = new BehaviorSubject([]);
  sharedTodoList = this.TodoList.asObservable();

  nextListInfo(item: any) {
    var id: any;
    this.route.paramMap.subscribe((params) => (id = params.get('id')));
    this.listID.next(id);
    this.listName.next(item.title);
  }

  updateList(list) {
    const currentValue = this.lists.value;
    const updatedValue = currentValue.concat(list);
    this.lists.next(updatedValue);
  }
  updateTodoList(todoList: any) {
    this.TodoList.next(todoList);
    console.log(todoList);
  }
  removeDeletedListsBeforeRefresh(item) {
    const lists = this.lists.value;
    const updatedValue = lists.filter((list) => list._id != item._id);
    this.lists.next(updatedValue);
  }
}
