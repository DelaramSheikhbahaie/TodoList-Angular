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
  defaultList = [
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
  ];

  private lists = new BehaviorSubject([]);
  sharedLists = this.lists.asObservable();

  private listName = new BehaviorSubject('');
  sharedListName = this.listName.asObservable();

  private TodoList = new BehaviorSubject([]);
  sharedTodoList = this.TodoList.asObservable();

  nextListInfo(item: any) {
    this.listName.next(item.title);
  }

  updateList(list) {
    const updatedValue = this.defaultList.concat(list);
    this.lists.next(updatedValue);
  }

  updateTodoList(todoList: any) {
    this.TodoList.next(todoList);
  }
}
