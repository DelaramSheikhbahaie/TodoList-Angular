import { Component, OnInit } from '@angular/core';
import {List} from '../../models/lists'
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists:List[];

  constructor() { }

  ngOnInit(): void {
    this.lists = [
      {
        name :" list1"
      }
    ]
  }
  deleteList (id:number){
    this.lists = this.lists.filter((list , index)=> index !== id)
  }
  // editName (name:string){

  // }
}
