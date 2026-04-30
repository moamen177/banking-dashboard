import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {
  constructor(private http: HttpClient){}
  getusers(){
  return this.http.get('https://jsonplaceholder.typicode.com/users')
  
}
}
