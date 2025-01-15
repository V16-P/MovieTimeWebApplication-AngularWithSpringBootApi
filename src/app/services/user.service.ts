import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Register } from '../commons/register';

interface GetRegisterResponse{
  _embedded :{
    users : Register[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL:string="http://localhost:8080/user"


  constructor(private httpClient: HttpClient) {}


  getUserByEmail(userEmail: string): Observable<Register[]> {
    return this.httpClient.get<GetRegisterResponse>(`${this.userURL}?email=${userEmail}`).pipe(map(response=>response._embedded.users));
  }

  saveUser(user: Register):Observable<Register>{
    const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.post<Register>(this.userURL,user,httpOptions);
  }

  


}
