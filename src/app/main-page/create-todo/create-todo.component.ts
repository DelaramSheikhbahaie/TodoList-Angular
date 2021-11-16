import { Component, OnInit } from '@angular/core';
import { SenderService } from '../../sender.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  contentInput:String;
  dateInput:String;
  descriptionInput:String;

  constructor(private service:SenderService) { }

  ngOnInit(): void {
  }

  addTodo(){
    this.service.updateTodoList(
      {
        listId : 1 ,
        content:this.contentInput ,
        date:"this.dateInput" ,
        descriptopn:this.descriptionInput,
        compeleted:false
      })
  }
}
