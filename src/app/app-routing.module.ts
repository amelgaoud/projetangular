import { LoginComponent } from './login/login.component';
import { AjoutproduitComponent } from './ajoutproduit/ajoutproduit.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { ContainerComponent } from './home/container/container.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'home', component : HomeComponent,
   children: [
    {path: '', component: ContainerComponent},
    {path: 'ajoutproduit', component: AjoutproduitComponent},
    {path: 'listproduit', component : ListproduitComponent}
  ],canActivate:[AuthGuard]},
  {path:'',component:LoginComponent},
  {path: '**', component: Erreur404Component},

  {path: 'about', component: AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
