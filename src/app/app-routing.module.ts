import { HomeComponent } from './components/pages/home/home.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'search/:searchTerm', component: HomeComponent},
  {path:"usuarios", redirectTo:'usuarios'},
  {path:'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosModule)},
  {path:"tag/:tag", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
