import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuarioSearchComponent } from './usuario-search/usuario-search.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';


@NgModule({
  declarations: [
    UsuariosListaComponent,
    UsuarioSearchComponent,
    UsuariosFormComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule
  ]
})
export class UsuariosModule { }
