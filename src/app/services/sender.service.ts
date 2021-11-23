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

  CompeletedListID = '8ed2864ab14f980a6b47bbb9';

  defaultList = [
    {
      _id: this.CompeletedListID,
      title: 'Compeleted Tasks',
      date: Date.now(),
      isMain: false,
    },
  ];

  private DailyListID = new BehaviorSubject(null);
  SharedDailyListID = this.DailyListID.asObservable();

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

  setDailyListId(list) {
    this.DailyListID.next(list._id);
  }
}
