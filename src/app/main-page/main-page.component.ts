import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  listId:number;
  constructor(private service : SenderService) { }

  ngOnInit(): void {
    this.service.sharedListID.subscribe(id => this.listId =id)
  }

}
