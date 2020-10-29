import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  url="http://localhost:8080";

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get(this.url+'/Categorie/All');
  }

}
