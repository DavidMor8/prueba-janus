import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

 
private apiUrl = 'https://jsonplaceholder.typicode.com/users';

constructor(private _http: HttpClient) {}

getUsers(): Observable<User[]> {
  return this._http.get<User[]>(this.apiUrl);
}

getUserDetails(userId: number): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this._http.get<User>(url);
  }

}
