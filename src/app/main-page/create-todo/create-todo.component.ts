import { Component, OnInit } from '@angular/core';
import { SenderService } from '../../services/sender.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  contentInput:String;
  dateInput:String;
  descriptionInput:String;
  listId:number;
  listName:string

  constructor(private service:SenderService) { }

  ngOnInit(): void {
    this.service.sharedListID.subscribe(id => this.listId =id)
    this.service.sharedListName.subscribe(name => this.listName = name)
  }

  addTodo(){
    if(this.contentInput !== "" ){
      // && this.dateInput !== "" && this.descriptionInput !== ""
      this.service.updateTodoList(
      {
        listId : this.listId ,
        content:this.contentInput ,
        date:this.dateInput ,
        description:this.descriptionInput,
        compeleted:false
      })
      // console.log(this.dateInput.slice(3,11))
      this.contentInput="";
      this.dateInput="";
      this.descriptionInput=""
    }
  }
}
