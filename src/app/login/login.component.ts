import { Router } from '@angular/router';
import { LoginService } from './../service/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { error } from 'protractor';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform: FormGroup;
submitted=false;
  constructor(private formBuilder: FormBuilder,
    private loginservice: LoginService,private router: Router) { }

  ngOnInit(): void {
    this.loginform=this.formBuilder.group({
      userName:['',Validators.required,Validators.email],
      password:['',Validators.required]
    })
  }
get f(){
  return this.loginform.controls;
}
login(){
  this.submitted=true;
  if(this.loginform.invalid){
    return;
  }
  this.loginservice.login(this.loginform.value).subscribe((res:any)=>{
    console.log(res);
}
  ,error=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,

    })

     Toast.fire({
      icon: 'success',
      title: 'verfier votre donnee'
    })

  }
  )
}
}
