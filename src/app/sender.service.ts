import { Injectable } from '@angular/core';
import { List } from './models/lists';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  public listsArray:List[];
  public test:String ;
  constructor() { }
}
