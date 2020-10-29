import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  url="http://localhost:8080";

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get(this.url+'/produit/All');
  }
  save(data, idCategorie){
    return this.http.post(this.url+'/produit/save/'+idCategorie,data);
  }
  update(id,data,idCategorie){
    return this.http.put(this.url+'/produit/modif/'+id+'/'+idCategorie,data);
  }
  delete(id){
    return this.http.delete(this.url+'/articles/delete/'+id);
  }
}
