import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private baseURL="http://localhost:8098/api/v2/user";

  constructor(private http:HttpClient) { }

  getUser(){
     return this.http.get<User[]>(this.baseURL);
  }
  addUser(user:User):Observable<Object>{
    return this.http.post(this.baseURL,user);
  }
  getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${this.baseURL}/${id}`);
  }
  updateUser(id:number,user:User):Observable<Object>{
    return this.http.put<User>(`${this.baseURL}/${id}`,user);
  }
  deleteUsers(id:number):Observable<object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
