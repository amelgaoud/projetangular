import { Produit } from './../model/produit';
import { CategorieService } from './../service/categorie.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProduitService } from './../service/produit.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
;
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
data='itgate'
listproduit;
modifform: FormGroup;
modalRef: BsModalRef;
fileToUpload: File = null;
listcategorie;
produit=new Produit();
  constructor(private modalService: BsModalService,
              private categorieservice: CategorieService,
              private produitservice: ProduitService
    ,         private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.getcategorie();
    this.getallproduit();
    this.modifform = this.formBuilder.group(
      {
        nom: [''],
        prix: [''],
        categorie: [''],
        image:['']

  }
    );
  }
recuper(id,nom,prix,categorie,image){

  this.produit.nom=nom;
  this.produit.prix=prix;
  this.produit.categorie=categorie;
  this.produit.image=image;
  console.log(this.produit)
}
   modifproduit() {
      let formdata=new FormData();
      formdata.append("nom",this.modifform.value.nom);
      formdata.append("prix",this.modifform.value.prix);

      formdata.append("categorie",this.modifform.value.categorie);

      this.produitservice.update(this.produit.id,formdata,this.modifform.value.categorie).subscribe(res=>{
       console.log(res);

     })
    }
    getcategorie(){

      this.categorieservice.getall().subscribe(res=>{
        console.log(res);
        this.listcategorie=res;
      })
    }
getallproduit(){
  this.produitservice.getall().subscribe(result=>{
    console.log(result);
    this.listproduit=result;
  })
}
deleteproduit(id){
  this.produitservice.delete(id).subscribe(res=>{
    console.log(res);
    // window.location.reload();
    this.getallproduit();
  });
}
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}

handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
  console.log(this.fileToUpload);

}
}
