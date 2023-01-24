import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/models/Usuario';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.scss']
})
export class UsuariosListaComponent implements OnInit {

  usuarios!: Usuario[]

  constructor(private usuarioService: UsuariosService, private ActivatedRoute: ActivatedRoute) {
    this.usuarioService.list().subscribe(usuarios => this.usuarios = usuarios)
  }

  ngOnInit(): void {

  }

  searchUsuarios(searchTerm: string){
       let teste = this.usuarios.filter( busca => busca.name.toLowerCase().includes(searchTerm.toLowerCase()))
       console.log(teste)
      return this.usuarios.filter( busca => busca.name.toLowerCase().includes(searchTerm.toLowerCase()))

  }

}
