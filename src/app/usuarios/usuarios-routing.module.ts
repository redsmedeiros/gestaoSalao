import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:UsuariosListaComponent,},
  {path:"usuario-search/:searchTerm", component: UsuariosListaComponent},
  {path: 'novo-usuario', component: UsuariosFormComponent},
  {path: 'editar-usuario/:id', component: UsuariosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
