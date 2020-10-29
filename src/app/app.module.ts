import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ContainerComponent } from './home/container/container.component';
import { FooterComponent } from './home/footer/footer.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutproduitComponent } from './ajoutproduit/ajoutproduit.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    ListproduitComponent,
    Erreur404Component,
    AjoutproduitComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
