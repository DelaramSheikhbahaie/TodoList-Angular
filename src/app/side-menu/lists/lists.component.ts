import { Component, OnInit } from '@angular/core';
import { SenderService } from 'src/app/sender.service';
import {List} from '../../models/lists'
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists:List[];
  service :SenderService

  constructor() { }

  ngOnInit(): void {
    this.lists = [
      {
        name :" list1"
      }
    ]
    this.service.listsArray = this.lists ;
  }
  deleteList (id:number){
    this.lists = this.lists.filter((list , index)=> index !== id)
  }
  // editName (name:string){

  // }
  

}
