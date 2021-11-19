import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksDataService {
  url:String ="http://localhost:3000/";
  

  constructor(private http:HttpClient) {}

  // getSingleUser(id): Observable<any> {
  //   return this.http.get<any>(this.url + '/users/' + id)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // } 
  updateTodos(id:number , formData){
    this.http.put(this.url+'api/tasks/:id', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
  insertTask(taskData : object){
    this.http.post('api/tasks', taskData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
  } 
  
  // addUser(data): Observable<User> {
  //   return this.httpClient.post<User>(this.endpoint + '/users', JSON.stringify(data), this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }  

  // updateUser(id, data): Observable<User> {
  //   return this.httpClient.put<User>(this.endpoint + '/users/' + id, JSON.stringify(data), this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

  // deleteUser(id){
  //   return this.httpClient.delete<User>(this.endpoint + '/users/' + id, this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

  // processError(err) {
  //    let message = '';
  //    if(err.error instanceof ErrorEvent) {
  //     message = err.error.message;
  //    } else {
  //     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
  //    }
  //    console.log(message);
  //    return throwError(message);
  // }
  

