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

  constructor(private service:SenderService) { }

  ngOnInit(): void {
    this.service.sharedLists.subscribe(list => this.lists = list)
  }
  deleteList (id:number){
    this.lists = this.lists.filter((list , index)=> index !== id)
  }
  // editName (name:string){

  // }
  

}
