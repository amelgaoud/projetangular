import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080";

  constructor(private http:HttpClient) { }
  login(data){
    return this.http.post('http://192.168.1.22:8080/login',data,{observe:'response'});
  }
}
