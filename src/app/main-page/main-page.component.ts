import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  message:string;

  constructor(private service : SenderService) { }

  ngOnInit(): void {
    this.service.sharedMessage.subscribe(message => this.message=message)
  }
  newMessage() {
    this.service.nextMessage("Second Message")
  }

}
