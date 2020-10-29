import { CategorieService } from './../service/categorie.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitService } from './../service/produit.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-ajoutproduit',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.css']
})
export class AjoutproduitComponent implements OnInit {
  isActiveToggleTextPassword = true;
  registerForm: FormGroup;
  submitted = false;
  fileToUpload: File = null;
  listcategorie;
  constructor(private produitservice :ProduitService,private toastr: ToastrService,
              private formBuilder: FormBuilder,
              private categorieservice:CategorieService) { }

  ngOnInit() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,

    })

     Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
    this.getcategorie();
    this.registerForm = this.formBuilder.group(
        {
          nom: ['', Validators.required],
          prix: ['', Validators.required],
          categorie: ['', Validators.required],
          image: ['']

    }
      );
  }
  showToaster(){
    this.toastr.success("Hello, I'm the toastr message.")
}
getcategorie(){

  this.categorieservice.getall().subscribe(res=>{
    console.log(res);
    this.listcategorie=res;
  })
}
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  ajoutproduit() {

      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      let formdata=new FormData();
      formdata.append("nom",this.registerForm.value.nom);
      formdata.append("prix",this.registerForm.value.prix);
      formdata.append("image",this.fileToUpload);
      formdata.append("categorie",this.registerForm.value.categorie);

      this.produitservice.save(formdata,this.registerForm.value.categorie).subscribe(res=>{
       console.log(res);

     })
    }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword !== true);
  }
  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }



  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
  console.log(this.fileToUpload);

}

}
